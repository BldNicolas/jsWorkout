const body = document.querySelector('body')
const backgroundPool = ["#d41313", "#62a31c", "#1c27a3"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const randomBGId = getRandomInt(3)

body.style.backgroundColor = backgroundPool[randomBGId]