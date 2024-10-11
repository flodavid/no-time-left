import './style.css'
import * as Game from './game.ts'
import * as Interface from './interface.ts'

const scoreGroup = document.querySelector<HTMLDivElement>('#score_group')!
const round = document.querySelector<HTMLParagraphElement>('#round')!
const team = document.querySelector<HTMLParagraphElement>('#team')!
const score = document.querySelector<HTMLParagraphElement>('#score')!

const instruction = document.querySelector<HTMLParagraphElement>('#instruction')!
const word = document.querySelector<HTMLParagraphElement>('#word')!

const remainingGroup = document.querySelector<HTMLDivElement>('#words_and_time_left')!
const remainingNumber = document.querySelector<HTMLSpanElement>('#remaining')!
const start = document.querySelector<HTMLButtonElement>('#start')!
const pause = document.querySelector<HTMLButtonElement>('#pause')!
const resume = document.querySelector<HTMLButtonElement>('#resume')!

const turnButtonsGroup = document.querySelector<HTMLDivElement>('#turn_buttons')!
const skipWord = document.querySelector<HTMLButtonElement>('#skip_word')!
const guessedWord = document.querySelector<HTMLButtonElement>('#guessed_word')!
const nextTeam = document.querySelector<HTMLButtonElement>('#next_team')!
const nextRound = document.querySelector<HTMLButtonElement>('#next_round')!

const resetGame = document.querySelector<HTMLButtonElement>('#reset_game')!

// TODO remove
const endTimer = document.querySelector<HTMLButtonElement>('#end_timer')!

Game.initGame()

Interface.setupUserOutput(scoreGroup, round, team, score, remainingGroup, remainingNumber,
    instruction, word)
Interface.setupTimerButtons(start, pause, resume)

Interface.setupTurnButtons(turnButtonsGroup)
Interface.setupSkipWord(skipWord)
Interface.setupGuessedWord(guessedWord)
Interface.setupNextTeam(nextTeam)
Interface.setupNextRound(nextRound)

Interface.setupResetGame(resetGame)
Interface.setupEndTimer(endTimer)

