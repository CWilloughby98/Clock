setInterval(setClock, 1000)

const hoursHand = document.querySelector('[data-hours-hand]')
const minutesHand = document.querySelector('[data-minutes-hand]')
const secondsHand = document.querySelector('[data-seconds-hand]')

function changeGradient(color1, color2){
    document.body.style.background = linearGradient
}

function setClock() {
    const now = new Date()
    const seconds = now.getSeconds() / 60
    const minutes = (seconds + now.getMinutes()) / 60
    const hours = (minutes + now.getHours()) / 12

    setRotation(secondsHand, seconds)
    setRotation(minutesHand, minutes)
    setRotation(hoursHand, hours)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

var css = document.querySelector('.codes')
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var bodys = document.getElementById('gradient')
var linearDirection = document.getElementsByName('toDirection')[0]

function currentSettings() {
    var CSSprop = window.getComputedStyle(bodys, null).getPropertyValue('background-image')
}
currentSettings()


function returnColor() {
    body.style.background = 'linear-gradient(' + linearDirection.value + ',' + color1.value + ',' + color2.value + ')'
    currentSettings()
}

document.querySelector('select[name = "toDirection"]').onchange = returnColor;
color1.addEventListener('input', returnColor)
color2.addEventListener('input', returnColor)

//TODO: set a gradient scrollbar, change font colors to B/W, gradient degrees changer