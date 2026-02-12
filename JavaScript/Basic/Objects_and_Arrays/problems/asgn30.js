// Remove deeply nested key from object

function result(obj, ch) {
    let output = {};

    for (let item in obj) {
        if (item === ch) {
            continue;
        }

        if (typeof obj[item] === "object" && obj[item] !== null) {
            output[item] = result(obj[item], ch);
        } else {
            output[item] = obj[item];
        }
    }

    return output;
}

let input = { a: { b: { c: 1, d: 2 } } }
let remove = "c";

console.log(result(input, remove));
