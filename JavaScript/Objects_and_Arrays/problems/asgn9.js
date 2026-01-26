let result = function (obj) {
    let output = [];

    for (let key in obj) {
        for (let i of obj[key]) {
            if (!output.includes(i)) {
                output.push(i);
            }
        }
    }
    return output;
}

let input = { x: [1,2,3], y: [2,3,4], z: [4,5] };

console.log(result(input));