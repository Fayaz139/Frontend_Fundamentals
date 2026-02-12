//Swap keys and values of object

function result(obj) {
    let key = Object.keys(obj);
    let output = {};
    let arr = [];

    for (let i = 0; i <= key.length-1; i++) {
        arr[i] = key[i];
        output[obj[key[i]]] = arr[i];
    }
    return output;
}

let input = { a: "x", b: "y", c: "z" };

console.log(result(input));
