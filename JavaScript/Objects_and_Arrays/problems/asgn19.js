// Check if all values in object are numbers

function result(obj) {
    let values = Object.values(obj);
    
    for (let value of values) {
        if (typeof value !== "number") {
            output = false;
            return false;
        }
    }

    return true;
}

let input = { a: 1, b: "hello", c: 3 };

console.log(result(input));