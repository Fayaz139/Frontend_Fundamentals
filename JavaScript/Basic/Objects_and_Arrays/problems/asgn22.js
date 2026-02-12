// Remove falsy values from object

function result(obj) {
    let output = {};

    for (let data in obj) {
        if (obj[data]) {
            output[data] = obj[data];
        }
    }

    return output;
}

let input = { a: 0, b: null, c: "hello", d: undefined, e: 5 }

console.log(result(input));
