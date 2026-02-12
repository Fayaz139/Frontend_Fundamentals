//Find student with highest average marks

function result(obj) {
    let output = "";
    let max = -Infinity;

    for (let key in obj) {
        let sum = 0;
        for (let i of obj[key]) {
            sum += i;
        }
        let avg = sum/(obj[key].length);
        if (avg > max) {
            max = avg;
            output = key;
        }
    }

    return output;
}

let input = { A: [80, 90], B: [70, 75, 85] }

console.log(result(input));
