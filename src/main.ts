import './style.css'
import * as Players from './teams.ts'
import * as Interface from './interface.ts'


const start = document.querySelector<HTMLButtonElement>('#start_btn')!
const pause = document.querySelector<HTMLButtonElement>('#pause_btn')!
const play = document.querySelector<HTMLButtonElement>('#play_btn')!
const reset = document.querySelector<HTMLButtonElement>('#reset_btn')!

const score = document.querySelector<HTMLParagraphElement>('#score')!
const remaining = document.querySelector<HTMLParagraphElement>('#remaining')!
const skipWord = document.querySelector<HTMLButtonElement>('#skip_word')!
const guessedWord = document.querySelector<HTMLButtonElement>('#guessed_word')!
const resetWords = document.querySelector<HTMLButtonElement>('#reset_words')!

const nextTeam = document.querySelector<HTMLButtonElement>('#next_team')!
const nextRound = document.querySelector<HTMLButtonElement>('#next_round')!
const message = document.querySelector<HTMLParagraphElement>('#word')!

// TODO remove
const endTimer = document.querySelector<HTMLButtonElement>('#end_timer')!

Interface.setupUserOutput(score, remaining, message)
Interface.setupStart(start)
Interface.setupPauseTimer(pause)
Interface.setupPlayTimer(play)
Interface.setupResetTimer(reset)

Interface.setupSkipWord(skipWord)
Interface.setupGuessedWord(guessedWord)
Interface.setupResetWords(resetWords)

Interface.setupNextTeam(nextTeam)
Interface.setupNextRound(nextRound)

// TODO remove
Interface.setupEndTimer(endTimer)

// Game.loadWords()
Players.loadScores()
