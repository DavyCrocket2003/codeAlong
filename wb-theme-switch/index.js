console.log("Hello world!")


let count = 0
const increase = () => {
    count++
    console.log(count)
    updateDisplay()
}

const decrease = () => {
    count--
    console.log(count)
    updateDisplay()
}

const reset = () => {
    count=0
    console.log(count)
    updateDisplay()
}

const updateDisplay = (num=count) => {
    display.innerHTML = num
}

let display = document.querySelector("#displayCount")
let plusBtn = document.querySelector("#plus")
let minusBtn = document.querySelector("#minus")
let resetBtn = document.querySelector("#reset")

plusBtn.addEventListener("click", increase)
minusBtn.addEventListener("click", decrease)
resetBtn.addEventListener("click", reset)


const body = document.querySelector("body")
const main = document.querySelector("main")
const buttons = document.querySelectorAll("button")
const fbBtn = document.getElementById("facebook")
const dmBtn = document.getElementById("devmountain")
const twBtn = document.getElementById("twitter")
const dfBtn = document.getElementById("default")

const selectTheme = (theme) => {
    body.className = theme
    main.className = theme
    buttons.forEach((item) => {
        item.className = theme
    })

}

fbBtn.addEventListener("click", () => selectTheme("facebook"))
dmBtn.addEventListener("click", () => selectTheme("devmountain"))
twBtn.addEventListener("click", () => selectTheme("twitter"))
dfBtn.addEventListener("click", () => selectTheme("default"))

