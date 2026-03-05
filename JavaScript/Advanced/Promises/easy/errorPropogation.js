function buildSuit () {
    return Promise.resolve();
}


buildSuit()
  .then(() => {
    throw "Arc Reactor Failure";
  })
  .then(() => console.log("This Won’t Run"))
  .catch((error) => console.log("Handled:", error));
