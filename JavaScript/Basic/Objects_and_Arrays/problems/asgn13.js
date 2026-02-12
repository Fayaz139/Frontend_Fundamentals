// Count number of keys in object

function result(obj) {
    return Object.keys(obj).length;
}

let input = { a: 1, b: 2, c: 3 };

console.log(result(input));
