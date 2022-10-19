setInterval(setClock, 1000)

const hoursHand = document.querySelector('[data-hours-hand]')
const minutesHand = document.querySelector('[data-minutes-hand]')
const secondsHand = document.querySelector('[data-seconds-hand]')

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

//TODO: set a gradient scrollbar, change font colors to B/W, gradient degrees changer