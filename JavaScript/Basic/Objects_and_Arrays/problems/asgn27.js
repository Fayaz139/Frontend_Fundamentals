// Find longest string among object values

function result(obj) {
    let output = "";
    let max = 0;

    for (let item in obj) {
        if (obj[item].length > max) {
            max = obj[item].length;
            output = obj[item];
        }
    }

    return output;
}

let input = { a: "apple", b: "banana", c: "kiwi" }

console.log(result(input));
