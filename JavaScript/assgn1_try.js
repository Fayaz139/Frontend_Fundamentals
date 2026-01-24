function result(exp) {
    let keys = Object.keys(exp);
    let res = {};

    for (let key of keys) {
        let sum = 0;
        for (let values of exp[key]) {
            sum += values;
        }
        res[key] = sum;
    }
    return res;
}

let expenses = {
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60]
}

console.log(result(expenses));
