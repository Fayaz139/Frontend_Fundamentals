function result(obj, arr) {
    let output = {};
    
    for (let i of arr) {
        if (i in obj) {
            output[i] = obj[i];
        }
    }
    return output;
}

let inputObj = { name: "Rahul", age: 23, city: "Noida" };
let inputArr = ["name","city"];

console.log(result(inputObj, inputArr));
