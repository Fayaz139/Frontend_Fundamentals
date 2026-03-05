function callThor() {
  return Promise.resolve("Thor Arrived");
}

function callHulk() {
  return Promise.reject("Hulk Busy");
}

function callIronMan() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Iron Man Arrived"), 2000)
  );
}

Promise.allSettled([callThor(), callHulk(), callIronMan()])
  .then((results) => {
    console.log(results);
  });
