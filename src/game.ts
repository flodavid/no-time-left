import { words, expressions } from './words.ts'
import * as Utils from './utils.ts'
import { Timer } from './timer.ts'
import { loadScores, resetTeams, addPointToCurrentTeam, storeRoundScores, goToNextTeam } from './teams.ts';
export { getCurrentTeam, addTeam, goToNextTeam, getTeams, isLastTeam } from './teams.ts';

let GAME_WORDS_NUMBER: number
if (location.hostname === "localhost") {
  GAME_WORDS_NUMBER = 5
} else {
  GAME_WORDS_NUMBER = 20 // TODO replace by user input
}
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

/**
 * Update the score, the words remaining, and get a new random word if needed
 * @returns true if there are remaining words to guess
 */
export function wordFound () {
  if (randomWord) guessedWords.push(randomWord)

  addPointToCurrentTeam()

  if (guessedWords.length >= GAME_WORDS_NUMBER) {
    randomWord = undefined
    timer.forceEnd()
  } else {
    nextRandomWord()
  }
}

/**
 * Get a new random word if needed
 */
export function wordNotFound () {
  if (randomWord) gameWords.push(randomWord)
  nextRandomWord()
}

/**
 * Setup default action (always triggered) on timer end.
 * 
 * The current random word is put back the word at the start of the word stack,
 * for the next player to draw it
 */
function setGameEndTimerAction () {
  addEndTimerAction(() => {
    // Reinsert random word and unset it
    if (randomWord) {
      gameWords.unshift(randomWord)
      randomWord = undefined
    }
  })
}

/**
 * Start the team turn
 */
export function startTurn () {
  if (round < Round.End) {
    nextRandomWord()

    timer.start()
    setGameEndTimerAction()
    
  } else {
    console.error('END OF GAME ===== NOT IMPLEMENTED') // TODO add end of game actions (show scores)
  }
}

/**
 * Pause the current turn
 */
export function pause () {
  timer.stop()
}


/**
 * Reset timer. TODO remove, used for fake end timer
 */
export function reset () {
  timer.reset()
}

/**
 * Pause the current turn
 */
export function resume () {
  timer.resume()
}

/**
 * End the round, intialize a new one if necessary
 */
export function endRound () {
  storeRoundScores()
  // Go to next round if it is not the last one
  ++round
  if (round < Round.End) {
    goToNextTeam()
    readGameWords()
    guessedWords = []
  }
}


/**
 * Set the game to its initial state
 */
export function initGame () {
  readGameWords()
  loadScores()
  resetTeams()
  guessedWords = []
  round = Round.Description
  randomWord = ''
}

/**
 * 
 */
export function addEndTimerAction (endTimerAction: () => void) {
  // Add action on timer end
  timer.onTimerEnd.push(() => endTimerAction())
}

/**
 * Reset the game to its initial state.
 * Words, teams, scores are wiped, buttons are set to their initial state 
 */
export function resetGame () {
  initGame()
  timer.reset()
  resetTeams()
  
  // Reset words in URL
  const url = new URL(window.location.href)
  url.searchParams.delete('words')
  history.pushState({}, '', url)
}

/******************/
/*      Data      */
/******************/

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
  if (randomWord) return true
  else return gameWords !== null && gameWords.length > 0
}

export function remainingWords () : number {
  return GAME_WORDS_NUMBER - guessedWords.length
}

export function isTimerRunning () : boolean {
  return timer.isRunning()
}


/******************/
/*      Utils     */
/******************/

/**
 * Read the gamewords from the URL and add them to the game if there are none yet
 */
function readGameWords () {
  gameWords = []

  // Get words from URL and store them
  const url = new URL(window.location.href)
  const urlWords = url.searchParams.get('words')
  const storedWordList = urlWords !== null ? urlWords?.split('_') : []
  for (const word of storedWordList) {
    if (gameWords.length === GAME_WORDS_NUMBER) break
    gameWords.push(Utils.reverseString(decodeURIComponent(word)))
  }
  Utils.shuffleArray(gameWords)
}

function nextRandomWord () {
  if (gameWords === null) gameWords = []
  if (gameWords.length + guessedWords.length < GAME_WORDS_NUMBER) {
    randomWord = words.concat(expressions)[Utils.getRandomInt(words.length + expressions.length)]
    Utils.addToWordsQueryStringParameter(randomWord)
  } else {
    randomWord = gameWords.shift()
  }
}