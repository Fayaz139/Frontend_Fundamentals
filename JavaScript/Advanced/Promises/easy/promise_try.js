let buildSuit = new Promise((resolve, reject) => {
    let suitReady = true;

    if (suitReady) {
        resolve("suit is ready");
    }
    else {
        reject("suit isn't ready");
    }
})

buildSuit
.then((a) => {
    console.log(a);
    
})
.catch((a) => {
    console.log(a);
    
})
.finally(() => {
    console.log("task timeout");
    
})