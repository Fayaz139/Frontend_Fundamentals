//Count word occurrences in array

function result(arr) {
    let output = {};

    for (let i = 0; i <= arr.length-1; i++) {
        if (!Object.keys(output).includes(arr[i])) {
            output[arr[i]] = 1;
        } else {
            output[arr[i]] += 1;
        }
    }
    return output;
}

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log(result(fruits));
