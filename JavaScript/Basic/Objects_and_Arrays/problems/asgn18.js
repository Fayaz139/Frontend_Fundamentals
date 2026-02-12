// Convert array of objects to lookup by id

function result(arr) {
    let output = {};

    for (let i of arr) {
        output[i.id] = i;
    }

    return output;
}

let input = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

console.log(result(input));