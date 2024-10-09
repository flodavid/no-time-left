import './style.css'
import * as Game from './game.ts'
import * as Interface from './interface.ts'


const start = document.querySelector<HTMLButtonElement>('#start')!
const pause = document.querySelector<HTMLButtonElement>('#pause')!
const resume = document.querySelector<HTMLButtonElement>('#resume')!
const reset = document.querySelector<HTMLButtonElement>('#reset')!

const remainingGroup = document.querySelector<HTMLDivElement>('#words_and_time_left')!
const score = document.querySelector<HTMLParagraphElement>('#score')!
const remainingNumber = document.querySelector<HTMLParagraphElement>('#remaining')!
const message = document.querySelector<HTMLParagraphElement>('#word')!

const turnButtonsGroup = document.querySelector<HTMLDivElement>('#turn_buttons')!
const skipWord = document.querySelector<HTMLButtonElement>('#skip_word')!
const guessedWord = document.querySelector<HTMLButtonElement>('#guessed_word')!
const nextTeam = document.querySelector<HTMLButtonElement>('#next_team')!
const nextRound = document.querySelector<HTMLButtonElement>('#next_round')!

const resetWords = document.querySelector<HTMLButtonElement>('#reset_words')!

// TODO remove
const endTimer = document.querySelector<HTMLButtonElement>('#end_timer')!

Interface.setupUserOutput(score, remainingGroup, remainingNumber, message)
Interface.setupStart(start)
Interface.setupPauseTimer(pause)
Interface.setupResumeTimer(resume)
Interface.setupResetGame(reset)

Interface.setupTurnButtons(turnButtonsGroup)
Interface.setupSkipWord(skipWord)
Interface.setupGuessedWord(guessedWord)
Interface.setupNextTeam(nextTeam)
Interface.setupNextRound(nextRound)

Interface.setupResetGame(resetWords)


Game.initGame()

// TODO remove
Interface.setupEndTimer(endTimer)
