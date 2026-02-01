function result(obj) {
    let freq = {};
    let maxWord = "";
    let maxCount = 0;

    for (let key in obj) {
        for (let word of obj[key]) {
            freq[word] = (freq[word] || 0) + 1;

            if (freq[word] > maxCount) {
                maxCount = freq[word];
                maxWord = word;
            }
        }
    }

    return maxWord;
}

let input = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] };

console.log(result(input));