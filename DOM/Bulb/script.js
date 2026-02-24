let a = document.getElementById("bulb")
let b = document.getElementById("button")

b.addEventListener("click", () => {
    let val = b.innerText;
    if (val === 'On') {
        val = "Off"
        b.innerText = "Off"
        a.style.backgroundColor = 'yellow'
    } else {
        val = 'On'
        b.innerText = "On"
        a.style.backgroundColor = 'white'
    }
})