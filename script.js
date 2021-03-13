const startButton = document.getElementById('startButton')
const container = document.getElementsByClassName('container')[0]
const keyboardContainer = document.getElementById('keyboardContainer')
const mistakesHtml = document.getElementById('mistakesHtml')
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
    word.innerHTML = ''
    mistakesHtml.innerText = 0
    mistakes = 0
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
    keyboardContainer.innerHTML = ''
    let alphabetArray = 'abcčdeėfghiklmnoprsštuūvzž'
    let separateLetters = alphabetArray.replace(/ /g, '').split('');
    separateLetters.map(letter => {
        keyboardContainer.innerHTML += `<button class="letter-buttons" id="${letter}">${letter}</button>`

    })
    separateLetters.map(letter => {
        document.getElementById(letter).addEventListener('click', selectLetter)
    })


}


function selectLetter(e) {
    let chosenLetterId = e.target.innerText
    guesses.indexOf(chosenLetterId) === -1 ? guesses.push(chosenLetterId) : null
    document.getElementById(chosenLetterId).removeEventListener('click', selectLetter)
    document.getElementById(chosenLetterId).style.opacity = "0.5"

    if (answer.indexOf(chosenLetterId) >= 0) {
        guessedWord()
        if (wordStatus === answer) {
            keyboardContainer.innerHTML = 'Congratulations! You won!'
            keyboardContainer.style.textAlign = 'center'
            keyboardContainer.style.paddingTop = '30px'
            keyboardContainer.style.fontSize = '20px'
            keyboardContainer.style.color = 'green'

        }
    } else if (answer.indexOf(chosenLetterId) === -1) {
        mistakes++
        mistake()
        if (livesLeft === mistakes) {
            keyboardContainer.innerHTML = 'Oh my! You lost!'
            keyboardContainer.style.textAlign = 'center'
            keyboardContainer.style.paddingTop = '30px'
            keyboardContainer.style.fontSize = '20px'
            keyboardContainer.style.color = 'red'
        }
    }
}

function guessedWord() {

    wordStatus = answer.split('').map(letter =>
        guesses.indexOf(letter) >= 0 ? letter : " _ ").join('')
    word.innerHTML = wordStatus
}

function mistake() {
    mistakesHtml.innerText = mistakes
}



