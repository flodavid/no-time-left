import { words } from './words.ts'
import * as Utils from './utils.ts'
import { Timer } from './timer.ts'
import { loadScores, resetTeams, addPointToCurrentTeam, resetRoundScores } from './teams.ts';
export { getCurrentTeam, getCurrentTeamScore, goToNextTeam, isLastTeam } from './teams.ts';

const GAME_WORDS_NUMBER : number = 15 // TODO replace by user input
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
    randomWord = words[Utils.getRandomInt(words.length)]
    Utils.addToWordsQueryStringParameter(randomWord)
  } else {
    randomWord = gameWords.shift()
  }
}

/**
 * Read the gamewords from the URL and add them to the game if there are none yet
 */
function readGameWords () {
  // If game words have not been initialized, get words from URL and store them
  if (gameWords?.length === 0) {
    const url = new URL(window.location.href)
    const urlWords = url.searchParams.get('words')
    const storedWordList = urlWords !== null ? urlWords?.split('_') : []
    for (const word of storedWordList) {
      if (gameWords.length === GAME_WORDS_NUMBER) break
      gameWords.push(Utils.reverseString(decodeURIComponent(word)))
    }
    Utils.shuffleArray(gameWords)
    
  }

  if (gameWords === null) gameWords = []
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
    console.error('END OF GAME == NOT IMPLEMENTED') // TODO add end of game actions (show scores)
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
  if (round < Round.End) {
    readGameWords()
    guessedWords = []
    resetRoundScores()
  }
}


/**
 * Set the game to its initial state
 */
export function initGame () {
  loadScores()
  resetTeams()
  gameWords = []
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
  if (gameWords !== null) return gameWords.length > 0
  else return false
}

export function remainingWords () : number {
  return GAME_WORDS_NUMBER - guessedWords.length
}

export function isTimerRunning () : boolean {
  return timer.isRunning()
}
