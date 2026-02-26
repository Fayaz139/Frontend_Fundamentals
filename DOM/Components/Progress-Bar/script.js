let num = 0;
let pCount = 0;
let pCountLimit = 5;

let btn = document.querySelector("#counterBtn")
btn.addEventListener("click", () => {
    if (pCount < pCountLimit) {
        pCount++

        let filler = document.querySelector("#filler")
        let percentage = (pCount/pCountLimit)*100
        filler.style.width = `${percentage}%`

        document.querySelector("#pCount").textContent = `${pCount}/${pCountLimit}`
    } 
    if (pCount === pCountLimit) {
        btn.textContent = "Submit"
    } else {
        btn.textContent = "next"
    }
})

let progressCount = document.querySelector("#selection")
progressCount.addEventListener("change", (e) => {
    pCountLimit = Number(e.target.value)
    pCount = 0

    document.querySelector("#pCount").textContent = `${pCount}/${pCountLimit}`

    let filler = document.querySelector("#filler")
    filler.style.width = "0%"

    btn.textContent = "start"
})
