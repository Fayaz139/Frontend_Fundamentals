function changeBg(color) {
    let a = document.querySelector("body");
    let b = document.querySelectorAll(".but")
    b.forEach((b) => {
        b.addEventListener('mouseenter', () => {
            a.style.backgroundColor = b.id;
        })
        b.addEventListener('mouseleave', () => {
            a.style.backgroundColor = "black";
        })
    })
} 