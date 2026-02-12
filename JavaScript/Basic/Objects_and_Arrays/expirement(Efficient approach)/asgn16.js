function result(arr) {
    let output = {even: 0, odd: 0}

    for (let num of arr) {
        num % 2 === 0 ? output.even++ : output.odd++;
    }

    return output;
}

let input = [1,2,3,4,5,6]

console.log(result(input));