// Deep flatten nested arrays inside object

let result = (obj) => {
    let output = {};

    for (let key in obj) {
        output[key] = flattenArray(obj[key]);
    }

    return output;
}

function flattenArray(arr) {
    let res = [];
    for (let item of arr) {
        if (Array.isArray(item))
            res.push(...flattenArray(item));
        else
            res.push(item);
    }
    return res;
}

let input = { a: [1, [2, [3]]], b: [4, [5]] };

console.log(result(input));
