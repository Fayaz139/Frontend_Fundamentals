// Check if two objects are deeply equal

function result(obj1, obj2) {
    let output = true;

    let s1 = JSON.stringify(obj1);
    let s2 = JSON.stringify(obj2);

    if (s1 !== s2) {
        return false;
    }

    return output;
}

let input1 = { a: { x: 1, y: 2 } };
let input2 = { a: { x: 1, y: 2 } };

console.log(result(input1, input2));
