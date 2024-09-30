import { words } from './words.ts'
import * as utils from './utils.ts'

const GAME_WORDS_NUMBER = 10 // TODO replace by user input

export let remaining: number
export let randomWord: string

function nextRandomWord () {
  const currentWords = getCurrentWords()
  if (currentWords === null || currentWords.length <= GAME_WORDS_NUMBER) {
    randomWord = words[utils.getRandomInt(words.length)]
    utils.addToWordsQueryStringParameter(randomWord)
  } else {
    const wordIndex = utils.getRandomInt(currentWords.length)
    let word = decodeURIComponent(currentWords[wordIndex])
    randomWord = utils.reverseString(word)
  }
}

function getCurrentWords () : Array<string>|null {
  const url = new URL(window.location.href)
  const currentWords = url.searchParams.get('words')

  return currentWords !== null ? currentWords?.split('_') : null
}

/**
 * Update the score, the words remaining, and get a new random word if needed
 * @returns true if there are remainging words to guess
 */
export function wordFound (): boolean {
  --remaining

  nextRandomWord()

  return remaining > 0
}

/**
 * Get a new random word if needed
 */
export function wordNotFound () {
  nextRandomWord()
}

// /**
//  * Get the score of the current team
//  * @returns the score
//  */
// export function currentScore(): number {
//   return teams[currentTeam].score
// }

/**
 * Retrieve the words saved as query parameters
 */
// export function loadWords () {
//   console.log('reading words from URL')
  
//   currentTeam = 0
//   remaining = GAME_WORDS_NUMBER
   
//   const currentWords = getCurrentWords()
// }

export function hasWords () : boolean {
  const currentWords = getCurrentWords()
  if (currentWords !== null) return getCurrentWords.length > 0
  else return false
}

export function resetGame () {
  console.log('resetting game')
  
  remaining = GAME_WORDS_NUMBER
}
