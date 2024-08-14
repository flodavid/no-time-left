import { words } from './words.ts'
import * as Players from './players.ts'

const GAME_WORDS_NUMBER = 10
let message: HTMLParagraphElement
let scoreText: HTMLParagraphElement
let startButton: HTMLButtonElement, nextButton: HTMLButtonElement, guessButton: HTMLButtonElement, resetButton: HTMLButtonElement, 
    firstPlayerButton: HTMLButtonElement, nextPlayerButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement

function getRandomInt (max: number) {
  return Math.floor(Math.random() * max)
}

function reverseString (str: string) {
  return str.split("").reverse().join("")
}

/**
 * Adds a query string parameter in the provided url.
 * Concatenate words if it already exists.
 * Does nothing if value is null or undefined.
 *
 * @param {string} url to modify
 * @param {string} value of query parameter
 *
 * @returns {string} modified url.
 */
function addToWordsQueryStringParameter (word: string) {
  const url = new URL(window.location.href)
  if (word === null || word === undefined) {
    return url
  }

  word = reverseString(word)
  word = encodeURIComponent(word)

  const currentWords = url.searchParams.get('words')
  if (currentWords !== null) {
    url.searchParams.set('words', currentWords + '_' + word)
    history.pushState({}, '', url)
  } else {
    url.searchParams.set('words', word)
    history.pushState({}, '', url)
  }
}

function setRandomWord () {
  console.log('Next random word')
  scoreText.innerText = 'Player ' + (Players.getCurrentPlayer()) + ' score is: ' + Players.getCurrentPlayerScore()

  const currentWords = getCurrentWords()
  if (currentWords === null || currentWords.length <= GAME_WORDS_NUMBER) {
    const wordIndex = getRandomInt(words.length)
    message.innerText = 'Le mot est : '+ words[wordIndex]
    addToWordsQueryStringParameter(words[wordIndex])
  } else {
    const wordIndex = getRandomInt(currentWords.length)
    let word = decodeURIComponent(currentWords[wordIndex])
    word = reverseString(word)
    message.innerText = 'Le mot est : ' + word
  }
}

function getCurrentWords () : Array<string>|null {
  const url = new URL(window.location.href)
  const currentWords = url.searchParams.get('words')

  return currentWords !== null ? currentWords?.split('_') : null
}


function checkEndOfRound (): Boolean {
  const currentWords = getCurrentWords()
  if (currentWords !== null && currentWords?.length >= GAME_WORDS_NUMBER) {
    message.innerText = 'Fin du round'
    nextButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextPlayerButton.style.display = 'inline'
    nextRoundButton.style.display = 'inline'
    return true
  } else {
    // TODO afficher le bouton "Joueur suivant" uniquement quand le timer est terminé
    nextPlayerButton.style.display = 'inline'

    guessButton.style.display = 'inline'
    resetButton.style.display = 'inline'
    return false
  }
}

export function setupUserOutput (userScore: HTMLParagraphElement, word: HTMLParagraphElement) {
  console.log('User output init')
  scoreText = userScore
  message = word
}

export function setupStart (button: HTMLButtonElement) {
  console.log('start button setup')
  startButton = button

  const start = () => {
    console.log('(Re)Starting game')
    nextButton.style.display = 'inline'
    guessButton.style.display = 'inline'

    Players.goToNextPlayer()
    setRandomWord()
  }
  startButton.addEventListener('click', () => start())
}

export function setupNextWord (button: HTMLButtonElement) {
  console.log('next word button setup')
  nextButton = button

  const nextWord = () => {
    if (!checkEndOfRound()) {
      scoreText.innerText = 'Player ' + (Players.getCurrentPlayer()) + ' score is: ' + Players.getCurrentPlayerScore()

      setRandomWord()
    }
  }
  nextButton.addEventListener('click', () => nextWord())
}

export function setupGuessedWord (button: HTMLButtonElement) {
  console.log('guessed word button setup')
  guessButton = button

  const guessedWord = () => {
    scoreText.innerText = 'Player ' + (Players.getCurrentPlayer()) + ' score is: ' + Players.addPointToCurrentPlayer()

    if (checkEndOfRound()) {
      // TODO arrêt timer
      return
    }

    setRandomWord()
  }

  guessButton.addEventListener('click', () => guessedWord())
}

export function setupResetWords (button: HTMLButtonElement) {
  console.log('reset words button setup')
  resetButton = button

  const resetWords = () => {
    // Reset words in URL
    const url = new URL(window.location.href)
    url.searchParams.delete('words')
    history.pushState({}, '', url)

    // Reset scores
    Players.resetAll()

    // Reset buttons and current word
    message.innerText =''
    button.style.display = 'none'
    scoreText.style.display = 'none'
    startButton.style.display = 'inline'
    startButton.innerText = 'Restart'
    nextPlayerButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
  }

  button.addEventListener('click', () => resetWords())
}

/**
 * @TODO 
 * @param button 
 */
export function setupFirstPlayer (button: HTMLButtonElement) {
  console.log('next round button setup')
  firstPlayerButton = button

  const firstPlayer = () => {
    firstPlayerButton.style.display = 'none'
    // TODO
  }

  button.addEventListener('click', () => firstPlayer())
}

/**
 * @TODO 
 * @param button 
 */
export function setupNextPlayer (button: HTMLButtonElement) {
  console.log('next round button setup')
  nextPlayerButton = button

  const nextPlayer = () => {
    const playerIdx = Players.goToNextPlayer()
    scoreText.innerText = 'Player ' + (playerIdx) + ' score is: ' + Players.getCurrentPlayerScore()
    firstPlayerButton.style.display = 'inline'
    
    // TODO start timer
  }

  button.addEventListener('click', () => nextPlayer())
}

export function setupNextRound (button: HTMLButtonElement) {
  console.log('next round button setup')
  nextRoundButton = button

  const nextRound = () => {
    // TODO start timer
    nextRoundButton.style.display = 'none'
    
    message.innerText =''
    nextRoundButton.style.display = 'none'
    nextButton.style.display = 'inline'
    guessButton.style.display = 'inline'
    firstPlayerButton.style.display = 'none'
    resetButton.style.display = 'inline'

    const playerIdx = Players.goToNextPlayer()
    scoreText.innerText = 'Player ' + (playerIdx) + ' score is: ' + Players.getCurrentPlayerScore()

    Players.endRound()
    setRandomWord()
  }

  button.addEventListener('click', () => nextRound())
}

/**
 * Retrieve the words saved as query parameters
 */
export function loadWords () {
  console.log('reading words from URL')
   
  const currentWords = getCurrentWords()
  if (currentWords !== null && currentWords?.length > 0) {
    resetButton.style.display = 'inline'
    if (currentWords?.length >= GAME_WORDS_NUMBER) {
      nextButton.style.display = 'none'
      guessButton.style.display = 'none'
      nextPlayerButton.style.display = 'none'
      nextRoundButton.style.display = 'inline'
    } else {
      nextButton.style.display = 'inline'
      guessButton.style.display = 'inline'
      nextPlayerButton.style.display = 'inline'
      nextRoundButton.style.display = 'none'
    }
  } else {
    resetButton.style.display = 'none'
  }
}
