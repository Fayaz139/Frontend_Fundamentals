//pick only keys given in the array from the object

function result(obj, arr) {
    let output = {};
    
    for (let key in obj) {
        for (let i of arr) {
            if (i === key) {
                output[key] = obj[key];
            }
        }
    }
    return output;
}

let inputObj = { name: "Rahul", age: 23, city: "Noida" };
let inputArr = ["name","city"];

console.log(result(inputObj, inputArr));
