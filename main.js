const button1 = document.querySelector('#buttonOne')
const button2 = document.querySelector('#buttonTwo')
const button3 = document.querySelector('#buttonThree')
const button4 = document.querySelector('#buttonFour')
const button5 = document.querySelector('#buttonFive')
const button6 = document.querySelector('#buttonSix')
const list = document.querySelector('#list')
const title = document.querySelector('#titleOne')
// listUl.style.backgroundColor = "grey"
// title.style.color = "green"

listUl.style.listStyle = "none"
// list.style.borderRadius = '30px'
listUl.style.textAlign = 'center'
title.style.textAlign = 'center'
console.log({ buttonOne })


button1.onclick = () => {
    if (title.style.color === "green") {
        title.style.color = ""
    } else {
        title.style.color = "green"
    }
}
button2.onclick = () => {
    if (button2.style.backgroundColor === "pink") {
        button2.style.backgroundColor = "white"
    } else {
        button2.style.backgroundColor = "pink"
    }
}
button3.onclick = () => {
    if (title.style.fontSize === "100px") {
        title.style.fontSize = ""
    } else {
        title.style.fontSize = "100px"
    }
}
button4.onclick = () => {
    if (button4.style.backgroundColor === "blue") {
        button4.style.backgroundColor = ""
    } else {
        button4.style.backgroundColor = "blue"
    }
}
button5.onclick = () => {
    if (button5.style.backgroundColor === "white") {
        button5.style.backgroundColor = ""
    } else {
        button5.style.backgroundColor = "white"
    }
}
button6.onclick = () => {
    if (title.style.textTransform === 'uppercase') {
        title.style.textTransform = 'lowercase'
    } else {
        title.style.textTransform = 'uppercase'
    }
}
