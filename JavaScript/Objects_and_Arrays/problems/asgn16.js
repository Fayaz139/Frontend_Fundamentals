// Count even and odd numbers in array

function result(arr) {
    let output = {};
    let even = 0;
    let odd = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            even += 1;
        }
        else {
            odd += 1;
        }
    }
    output["even"] = even;
    output["odd"] = odd;
    
    return output;
}

let input = [1,2,3,4,5,6];

console.log(result(input));
