let res = Object.fromEntries(
    Object.entries(input).sort((a, b) => a[1] - b[1])
);
console.log(res);