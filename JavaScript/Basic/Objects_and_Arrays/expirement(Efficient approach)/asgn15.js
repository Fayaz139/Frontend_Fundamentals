function result(obj) {
    return output = Object.entries(obj).map(([key, value]) => `${key}=${value}`).join("");
}

let input = { name: "Alice", age: 25 };

console.log(result(input));