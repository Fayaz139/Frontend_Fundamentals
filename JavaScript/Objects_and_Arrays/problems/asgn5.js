let result = function (obj) {
    let output = [];
    let key = Object.keys(obj);

    for (let i = 0; i <= key.length-1; i++) {
        output = output.concat(obj[key[i]]);
    }
    return output;
}

let input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

console.log(result(input));

Object.values