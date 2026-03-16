const fs = require('fs').promises;
const { Command } = require('commander');
const program = new Command();
const path = require("path");
const file = path.join(__dirname, "todo.json");
// const file = "todo.json";

//Check the json file for the presence of data
async function check() {
    try {
        let data = await fs.readFile(file, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        return false;
    }
}

program
  .name('TODO')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program
  .command("add")
  .description('Add the todo')
  .argument("<todo>")
  .action(async (todo) => {
    let fileData = await check();

    if (!fileData) {
        let obj = [{
            "id" : 0,
            "todo" : todo
        }]
        await fs.writeFile(file, JSON.stringify(obj, null, 2), 'utf-8');
        console.log("TODO added succesfully");
    } else {
        let idCounter = fileData.length > 0 ? Math.max(...fileData.map(t => t.id)) : -1;
        let obj = {
            "id" : idCounter+1,
            "todo" : todo
        }
        fileData.push(obj)
        await fs.writeFile(file, JSON.stringify(fileData, null, 2), 'utf-8');
        console.log("TODO added succesfully");
    }
});

program
  .command("show")
  .description("Show the list of todo's")
  .action(async () => {
    let fileData = await check();

    if (fileData) {
        console.table(fileData);
    } else {
        console.log("There are no TODO's to show");
    }
});

program
  .command("update")
  .description('Update the existing todo')
  .argument("<id>")
  .argument("<todo>")
  .action(async (id, todo) => {
    let fileData = await check();
    id = Number(id);

    if (fileData) {
        let found = false;
        for (let item of fileData) {
            if (item.id === id) {
                item.todo = todo;
                found = true;
                break;
            }
        }
        if (!found) {
            console.log(`There does not exist any todo with id:${id}`)
        } else {
            await fs.writeFile(file, JSON.stringify(fileData, null, 2), "utf-8");
            console.log("Updated Successfully");
        }
    } else {
        console.log("There are no TODO's to update");
    }
});

program
  .command("delete")
  .description('Delete the available todo')
  .argument("<id>")
  .action(async (id) => {
    let fileData = await check();
    id = Number(id);
    
    if (fileData) {
        let ogLength = fileData.length

        let newData = fileData.filter(obj => obj.id !== id)
        
        if (newData.length < ogLength) {
            await fs.writeFile(file, JSON.stringify(newData, null, 2), 'utf-8');
            console.log(`Successfully deleted the TODO with id:${id}`);
        } else {
            console.log(`There does not exist any todo with id:${id}`)
        }
    } else {
        console.log("There are no TODO's to Delete");
    }
});

program.parse();