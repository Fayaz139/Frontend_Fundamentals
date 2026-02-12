// Remove duplicate objects by id

function result(arr) {
    let output = {};

    for (let obj of arr) {
        // here the item is stored like {1: {id: 1, name: "A"}}
        // as the object stores only the unique keys so for showing only the value is shown 
        output[obj.id] = obj;
    }
    
    // here for displaying only values are returned 
    // {1(key): (value){id: 1, name: "A"}}
    return Object.values(output);
}

let input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]

console.log(result(input));
