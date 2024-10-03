import { words } from './words.ts'
import * as utils from './utils.ts'
import { Timer } from './timer.ts'
import { resetTeams, addPointToCurrentTeam, goToNextTeam } from './teams.ts';
export { resetTeams, getCurrentTeam, getCurrentTeamScore, goToNextTeam, isLastTeam } from './teams.ts';

const GAME_WORDS_NUMBER : number = 10 // TODO replace by user input
const timer = new Timer('timer');

export enum Round {
  Description,
  Word,
  Signs,
  End,
}

export let randomWord: string|undefined
export let round: Round

let gameWords: string[] = []
export let guessedWords: string[] = []

/******************/
/*    Actions     */
/******************/

function nextRandomWord () {
  readGameWords()
  if (gameWords.length + guessedWords.length < GAME_WORDS_NUMBER) {
    randomWord = words[utils.getRandomInt(words.length)]
    utils.addToWordsQueryStringParameter(randomWord)
  } else {
    randomWord = gameWords.shift()
  }
}

/**
 * Read the gamewords from the URL and add them to the game if there are none yet
 */
function readGameWords () {
  // If game words have not been initialized, get words from URL and store them
  if (gameWords.length === 0) {
    const url = new URL(window.location.href)
    const urlWords = url.searchParams.get('words')
    const storedWordList = urlWords !== null ? urlWords?.split('_') : []
    for (const word of storedWordList) {
      if (gameWords.length === GAME_WORDS_NUMBER) break
      gameWords.push(utils.reverseString(decodeURIComponent(word)))
    }
    shuffle(gameWords)
    
  }

  if (gameWords === null) gameWords = []
}

function shuffle (array: string[]) { 
  return array.sort(() => Math.random() - 0.5)
}

/**
 * Update the score, the words remaining, and get a new random word if needed
 * @returns true if there are remaining words to guess
 */
export function wordFound (): boolean {
  if (randomWord) guessedWords.push(randomWord)

  addPointToCurrentTeam()
  nextRandomWord()

  return guessedWords.length < GAME_WORDS_NUMBER
}

/**
 * Get a new random word if needed
 */
export function wordNotFound () {
  if (randomWord) gameWords.push(randomWord)
  nextRandomWord()
}

/**
 * Start the team turn
 */
export function startTurn () {
  nextRandomWord()
  goToNextTeam()
  timer.start()

  if (round < Round.End) {
  }
}

/**
 * Pause the current turn
 */
export function pause () {
  timer.stop()
}

/**
 * Pause the current turn
 */
export function resume () {
  timer.start()
}

/**
 * End the round, intialize a new one if necessary
 */
export function endRound () {
  // Go to next round if it is not the last one
  ++round
  gameWords = []
  guessedWords = []
  if (round < Round.End) {
    nextRandomWord()
  }

  endRound()
}

export function resetGame () {
  console.log('resetting game')
  
  round = Round.Description
  gameWords = []
  guessedWords = []
  randomWord = ''

  timer.reset()
  resetTeams()
  
  // Reset URL words
  const url = new URL(window.location.href)
  url.searchParams.set('words', '')
}


/******************/
/*      Data      */
/******************/

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
  if (gameWords !== null) return gameWords.length > 0
  else return false
}

export function remainingWords () : number {
  return GAME_WORDS_NUMBER - guessedWords.length
}
