function result(arr) {
    let output = {};

    for (let {user, amount} of arr) {
        output[user] = (output[user] || 0) + amount;
    }

    return output;
}

let input = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
];

console.log(result(input));