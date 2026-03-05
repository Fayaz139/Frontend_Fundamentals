function callThor() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Thor Arrived"), 3000)
  );
}

function callIronMan() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Iron Man Arrived"), 5000)
  );
}

Promise.race([callThor(), callIronMan()])
  .then((winner) => {
    console.log("First Arrived:", winner);
  })
  .catch((error) => {
    console.log("Mission Failed:", error);
  });
