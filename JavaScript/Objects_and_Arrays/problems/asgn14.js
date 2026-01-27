// Capitalize 1st character from the string values inside object

function result(obj) {
    let output = {};
    
    for (let key in obj) {
        let value = obj[key];
        output[key] = value[0].toUpperCase() + value.slice(1);
    }
    
    return output;
}

let input = { name: "alice", city: "delhi" };

console.log(result(input));