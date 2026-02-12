// Convert object to query string

function result(obj) {
    let output = "";

    let val = Object.entries(obj);

    for (let i = 0; i <= val.length-1; i++) {
        output += val[i][0] + "=" + val[i][1];
        if (i !== val.length-1) {
            output += "&";
        }
    }

    return output;
}

let input = { name: "Alice", age: 25 };

console.log(result(input));
