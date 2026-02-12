// Find common keys between two objects

function result(obj1, obj2) {
    let output = [];
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    for (let key of keys1) {
        if (keys2.includes(key)) {
            output.push(key);
        }
    }

    return output;
}

let input1 = { a: 1, b: 2, c: 3 };
let input2 = { b: 4, c: 5, d: 6 };

console.log(result(input1, input2));