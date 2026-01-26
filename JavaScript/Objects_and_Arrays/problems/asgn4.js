//Find the largest value key

function result(obj) {
    let keys = Object.keys(obj);
    let max = obj[keys[0]];
    let output = keys[0];

    for (let i = 0; i <= keys.length-1; i++) {
        if (obj[keys[i]] > max) {
            output = keys[i];
            max = obj[keys[i]]
        }
    }
    return output;
}

let input = { a: 10, b: 50, c: 20 };

console.log(result(input));