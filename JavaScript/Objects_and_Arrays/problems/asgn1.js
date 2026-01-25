function result(expenses) {
    let output = {};
    let keys = Object.keys(expenses);

    for (let i = 0; i <= keys.length-1; i++) {
        let values = expenses[keys[i]];
        let sum = 0;
        for (let j = 0; j <= values.length-1; j++) {
            sum += values[j];
        }
        output[keys[i]] = sum; 
    }
    return output;
}

let expenses1 = {
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60]
}

console.log(result(expenses1));
