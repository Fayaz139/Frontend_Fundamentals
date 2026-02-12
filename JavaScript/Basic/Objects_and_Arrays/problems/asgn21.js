// Transform API response to object (id -> name)

function result(arr) {
    let output = {};

    for (let {id, name} of arr) {
        output[id] = name;
    }

    return output;
}

let input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

console.log(result(input));
