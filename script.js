const startButton = document.getElementById('startButton')
const container = document.getElementsByClassName('container')[0]
const keyboardContainer = document.getElementById('keyboardContainer')
const livesLeftHtml = document.getElementById('livesLeftHtml')
const word = document.getElementById('word')
startButton.addEventListener('click', startGame)

const words = [
    'labas',
    'geras',
    'viso',
    'ačiū',
    'dėkui'

]

let answer = ''
let livesLeft = 9
let mistakes = 0
let guesses = []
let wordStatus = null

function startGame() {
    startButton.innerText = 'Restart game'
    container.style.display = 'block'
    randomWord()
    generateButtons()
    livesLeftHtml.innerText = livesLeft
    guessedWord()

}

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)]
}

function generateButtons() {
    let alphabetArray = 'abcčdeėfghiklmnoprsštuūvzž'
    let separateLetters = alphabetArray.replace(/ /g, '').split('');
    separateLetters.map(letter => {
        keyboardContainer.innerHTML += `<button class="letter-buttons" id="${letter}">${letter}</button>`

    })
}

function guessedWord() {
    wordStatus = answer.split('').map(letter =>
        guesses.indexOf(letter) >= 0 ? letter : " _ ").join('')
    word.innerHTML = wordStatus
}



