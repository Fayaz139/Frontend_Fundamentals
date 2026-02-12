function result(obj) {
    let output = [];
    let values = Object.values(obj);

    output = values.flat();

    return output;
}

let input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"], leaves: ["spinach", "coriander"] }

console.log(result(input));
