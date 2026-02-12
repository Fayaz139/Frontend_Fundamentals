function result(arr) {
    let output = {};

    for (let i = 0; i <= arr.length-1; i++) {
            output[arr[i]] = (output[arr[i]] || 0) + 1;       
    }
    return output;
}

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log(result(fruits));
