// create array with hex code numbers and letters

const hexOptions = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// selectors

const hexBtn = document.querySelector('button')
const body = document.querySelector('body')

// create heading and append it to body

let hexHeading = document.createElement('h2')
body.appendChild(hexHeading)

// button event

let changeColor = () => {
    let randomCode = ''
    for (let i = 0; i < 6; i++) {
        randomCode += hexOptions[Math.floor(Math.random() * hexOptions.length)]
    }
    body.style.background = `#${randomCode}`
    hexHeading.innerText = `This Hex Color Code Is: #${randomCode}`
}

hexBtn.addEventListener('click', changeColor)