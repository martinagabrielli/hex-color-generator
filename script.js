// create array with hex code numbers and letters

const hexOptions = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// selectors

const hexBtn = document.querySelector('button')
const body = document.querySelector('body')
const hexHeading = document.querySelector('h2')
const hexCode = document.querySelector('[data-color-code]')

const copyBtn = document.querySelector('[data-hexcode]')

// body.appendChild(copyBtn)

// copyBtn.textContent = 'Copy Color'
// copyBtn.dataset.hexCode = 'hexcode'

// button event

let changeColor = () => {
    let randomCode = ''
    for (let i = 0; i < 6; i++) {
        randomCode += hexOptions[Math.floor(Math.random() * hexOptions.length)]
    }
    body.style.background = `#${randomCode}`
    hexCode.style.color = `#${randomCode}`
    hexCode.value = `#${randomCode}`
}

// function for copy to clipboard option

const copyToClipboard = () => {
    let copyText = document.querySelector('[data-color-code]')
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    alert(`Color ${copyText.value} copied to clipboard!`);
}

// events

hexBtn.addEventListener('click', changeColor)
copyBtn.addEventListener('click', copyToClipboard)
