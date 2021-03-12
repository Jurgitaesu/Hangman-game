const startButton = document.getElementById('startButton')
const container = document.getElementsByClassName('container')[0]
startButton.addEventListener('click', startGame)

const words = [
    'labas',
    'geras',
    'viso',
    'ačiū',
    'dėkui'

]

let answer = ''
let maxWrong = 6
let mistakes = 0
let guesses = []


function startGame() {
    container.style.display = 'block'
    randomWord()

}

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)]
}