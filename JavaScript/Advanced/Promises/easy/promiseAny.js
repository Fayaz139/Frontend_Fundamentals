function callThor() {
  return Promise.reject("Thor Busy");
}

function callHulk() {
  return Promise.reject("Hulk Too Angry");
}

function callIronMan() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Iron Man Responded"), 5000)
  );
}

Promise.any([callThor(), callHulk(), callIronMan()])
  .then((hero) => {
    console.log("Hero Responded:", hero);
  })
  .catch((error) => {
    console.log("No Heroes Available:", error);
  });
