const fs = require('fs').promises;

const file = "todo.json";

//Check the json file for the presence of data
async function check() {
    try {
        let data = await fs.readFile(file, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        return false;
    }
}

//add a todo to the file :C
async function add(todo) {
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
}

//show all the available todo's : R
async function show() {
    let fileData = await check();

    if (fileData) {
        console.table(fileData);
    } else {
        console.log("There are no TODO's to show");
    }
}

//update the available todo's : U
async function update(id, updatedTodo) {
    let fileData = await check();

    if (fileData) {
        for (item of fileData) {
            if (item.id === id) {
                item.todo = updatedTodo;
            }
        }
        await fs.writeFile(file, JSON.stringify(fileData, null, 2), "utf-8");
        console.log("Updated Successfully");
    } else {
        console.log("There are no TODO's to update");
    }
}

//delete the available todo's : D
async function remove(id) {
    let fileData = await check();
    
    if (fileData) {
        let newData = [];
        for (data of fileData) {
            if (data.id !== id) {
                newData.push(data);
            }
        }
        await fs.writeFile(file, JSON.stringify(newData, null, 2), 'utf-8');
        console.log(`Successfully deleted the TODO with id:${id}`);
    } 
}

async function start() {
    // await add("Perform Umrah");
    // await update(3, "Perform Hajj with Sincerity");
    await remove(4);
    await show();
}
start()