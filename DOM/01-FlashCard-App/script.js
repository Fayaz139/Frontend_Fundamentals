let btns = document.querySelectorAll("#buttons button")

btns[0].classList.add("border-indigo-500", "bg-indigo-100", "border-2")

let selectedTopic = btns[0].textContent

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        for (let j = 0; j < btns.length; j++) {
            btns[j].classList.remove("border-indigo-500", "bg-indigo-100", "border-2")
        }
        e.target.classList.add("border-indigo-500", "bg-indigo-100", "border-2")
        selectedTopic = e.target.textContent
    })
}

let opt = document.querySelector("#selection")
let totalQuestions = opt.value 


opt.addEventListener("change", (e) => {
    e.target.classList.add("border-2", "border-indigo-500")
    totalQuestions = e.target.value
})

document.querySelector("#startButton").addEventListener("click", (e) => {
    let finalTopic = selectedTopic;
    let finalNoOfQuestions = totalQuestions;

    document.querySelector("#selection-tab").classList.add("hidden")
    document.querySelector("#qna").classList.remove("hidden")
})


