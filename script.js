// create array with hex code numbers and letters

const hexOptions = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// selectors

const hexBtn = document.querySelector('button')
const body = document.querySelector('body')
const hexHeading = document.querySelector('h2')
const copyBtn = document.querySelector('[data-copy-btn]')

// button event

let changeColor = () => {
    let randomCode = ''
    for (let i = 0; i < 6; i++) {
        randomCode += hexOptions[Math.floor(Math.random() * hexOptions.length)]
    }
    body.style.background = `#${randomCode}`
    hexHeading.innerText = `This Hex Color Code Is: #${randomCode}`
}

// function for copy to clipboard option

function copyHexColor(){
    let hexCode = document.querySelector('[data-hexcode]')
    let range = document.createRange()
    range.selectNode(hexCode)
    window.getSelection().addRange(range)
    document.execCommand('copy');
    alert(`Color ${hexCode.textContent} copied to clipboard`)
}

// events

hexBtn.addEventListener('click', changeColor)
copyBtn.addEventListener('click', copyHexColor)