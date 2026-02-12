//Sort object entries by values(ascending)
function result(obj) {
    let output = [];
    let min = +Infinity;

    for (let key in obj) {
        let arr = [];
        arr.push(key);
        arr.push(obj[key]);
        output.push(arr);
    }

    output = output.sort((a, b) => a[1] - b[1]);

    return output;
}

let input = { a: 3, b: 1, c: 2 }
    
console.log(result(input));

// there is same question solved with very short-form in the expirements directory