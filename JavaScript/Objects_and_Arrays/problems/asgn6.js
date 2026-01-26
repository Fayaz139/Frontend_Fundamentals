//Group people by city

function result(arr) {

    let output = {};
    
    for (let i of arr) {
        if (!output[i.city]) {
            output[i.city] = [];
        }
        output[i.city].push(i.name);
    }

    return output;
}


// Group people by city
let input = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

console.log(result(input));

// { Delhi: ["A", "C"], Mumbai: ["B"] }

