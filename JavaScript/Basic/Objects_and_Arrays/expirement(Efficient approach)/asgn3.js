function result(key) {
    let keys = Object.keys(key);
    let output = {};

    for (let i = 0; i <= keys.length-1; i++) {
        output[key[keys[i]]] = keys[i]
    }

    return output;
}

let input = { a: "x", b: "y", c: "z" }
console.log(result(input));
