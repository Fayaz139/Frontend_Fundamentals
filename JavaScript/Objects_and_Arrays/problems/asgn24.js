// Transform array of orders into revenue per category

function result(arr) {
    let output = {};

    for (let {category, price} of arr) {
        output[category] = (output[category] || 0) + price;
    }

    return output;
}

let input = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

console.log(result(input));
