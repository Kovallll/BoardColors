const board = document.querySelector('#board')
const colors = ['#0070f0', '#00d9ff', '#781669', '#08ff08', '#e9fa00', '#ff3300', '#ff00bb', '#00ff9d']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.background = `#1d1d1d`
    elem.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor() {
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}