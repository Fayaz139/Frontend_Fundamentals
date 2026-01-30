// Build index of ids grouped by category

function result(arr) {
    let output = {};

    for (let {id, category} of arr) {
        if (!output[category]) {
            output[category] = [];
        }
        output[category].push(id);
    }

    return output;
}

let input = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]

console.log(result(input));
