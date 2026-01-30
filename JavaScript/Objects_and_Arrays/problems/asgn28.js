// Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys and inside each you store values per language [Hard**]

function result(obj) {
    let output = {};

    for (let language in obj) {
        for (let word in obj[language]) {
            if (!output[word]) {
                output[word] = {};
            }
            output[word][language] = obj[language][word];
        }
    }

    return output;
}

let input = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
};

console.log(result(input));


// {
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }