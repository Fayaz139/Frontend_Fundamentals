// Sum all transactions per user

function result(arr) {
    let output = {};

    for (let i of arr) {
        let data = Object.values(i);

        if (output[data[0]] === undefined) {
            output[data[0]] = 0;
        }
        output[data[0]] += data[1];
    }

    return output;
}

let input = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
];

console.log(result(input));