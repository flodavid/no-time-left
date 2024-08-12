import { words } from './words.ts'

const GAME_WORDS_NUMBER = 10
let message: HTMLParagraphElement
let score: number
let scoreText: HTMLParagraphElement
let nextButton: HTMLButtonElement, guessButton: HTMLButtonElement, 
    resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

function reverseString(str: string) {
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
function addToWordsQueryStringParameter(word: string) {
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

function setRandomWord() {
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

function getCurrentWords() : Array<string>|null {
  const url = new URL(window.location.href)
  const currentWords = url.searchParams.get('words')

  return currentWords !== null ? currentWords?.split('_') : null
}


function checkEndOfRound(): Boolean {
  const currentWords = getCurrentWords()
  if (currentWords !== null && currentWords?.length >= GAME_WORDS_NUMBER) {
    message.innerText = 'Fin du round'
    nextButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'inline'
    return true
  } else {
    guessButton.style.display = 'inline'
    resetButton.style.display = 'inline'
    return false
  }
}

export function setupUserOutput(userScore: HTMLParagraphElement, word: HTMLParagraphElement) {
  console.log('User output init')
  scoreText = userScore
  message = word
  score = 0
}

export function setupNextWord(button: HTMLButtonElement) {
  console.log('next word button setup')
  nextButton = button

  const nextWord = () => {
    if (!checkEndOfRound()) {
      button.innerText = 'Passer le mot'
      scoreText.innerText = score.toString()
      setRandomWord()
    }
  }
  nextButton.addEventListener('click', () => nextWord())
}

export function setupGuessedWord(button: HTMLButtonElement) {
  console.log('guessed word button setup')
  guessButton = button

  const guessedWord = () => {
    score += 1
    scoreText.innerText = score.toString()

    if (checkEndOfRound()) {
      // TODO arrêt timer
      return
    }

    setRandomWord()
  }

  guessButton.addEventListener('click', () => guessedWord())
}

export function setupResetWords(button: HTMLButtonElement) {
  console.log('reset words button setup')
  resetButton = button

  const resetWords = () => {
    // Reset words in URL
    const url = new URL(window.location.href)
    url.searchParams.delete('words')
    history.pushState({}, '', url)

    // Reset scores
    score = 0

    // Reset buttons and current word
    message.innerText =''
    button.style.display = 'none'
    nextButton.innerText = 'RESTART'
    nextButton.style.display = 'inline'
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
  }

  button.addEventListener('click', () => resetWords())
}

export function setupNextRound(button: HTMLButtonElement) {
  console.log('next round button setup')
  nextRoundButton = button

  const nextRound = () => {
    // TODO start timer
    nextRoundButton.style.display = 'none'
    
    message.innerText =''
    nextRoundButton.style.display = 'none'
    nextButton.innerText = 'Passer le mot'
    nextButton.style.display = 'inline'
    guessButton.style.display = 'inline'
    resetButton.style.display = 'inline'

    score = 0
    scoreText.innerText = score.toString()

    setRandomWord()
  }

  button.addEventListener('click', () => nextRound())
}

export function loadGame() {
  console.log('loading game')
   
  const currentWords = getCurrentWords()
  if (currentWords !== null && currentWords?.length > 0) {
    resetButton.style.display = 'inline'
    if (currentWords?.length >= GAME_WORDS_NUMBER) {
      nextButton.style.display = 'none'
      guessButton.style.display = 'none'
      nextRoundButton.style.display = 'inline'
    } else {
      nextButton.innerText = 'Passer le mot'
      nextButton.style.display = 'inline'
      guessButton.style.display = 'inline'
      nextRoundButton.style.display = 'none'
    }
  } else {
    resetButton.style.display = 'none'
  }
}
