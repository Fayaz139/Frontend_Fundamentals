function result(obj) {
    let max = -Infinity;
    let output = "";

    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            output = key;
        }
    }
    return output
}

let input = { a: 10, b: 50, c: 20 };

console.log(result(input));