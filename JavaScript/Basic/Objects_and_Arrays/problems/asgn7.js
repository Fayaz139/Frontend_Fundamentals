//Filter object by values > 50

function result(obj) {
    let output = {};

    for (let key in obj) {
        if (obj[key] > 50) {
            output[key] = obj[key];
        }
    }
    return output;
}

let input = { a: 20, b: 60, c: 40, d: 90 };

console.log(result(input));