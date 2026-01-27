// Chuck object entries into groups of size

function result(obj, n) {
    let output = [];
    let arr1 = Object.entries(obj);

    for (let i = 0; i <= arr1.length-1; i+=n) {
        output.push(arr1.slice(i, i+n));
    }

    return output;
}

let input = { a: 1, b: 2, c: 3, d: 4 }
let size = 2

console.log(result(input, size));
