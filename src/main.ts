import './style.css'
import * as Game from './game.ts'
import * as Interface from './interface.ts'

const header = document.querySelector<HTMLLinkElement>('#header')!
header.href = window.location.pathname

const scoreGroup = document.querySelector<HTMLDivElement>('#score_group')!
const round = document.querySelector<HTMLParagraphElement>('#round')!
const team = document.querySelector<HTMLParagraphElement>('#team')!
const score = document.querySelector<HTMLParagraphElement>('#score')!

const instruction = document.querySelector<HTMLParagraphElement>('#instruction')!
const word = document.querySelector<HTMLParagraphElement>('#word')!

const timeGroup = document.querySelector<HTMLDivElement>('#time_management')!
const remainingNumber = document.querySelector<HTMLSpanElement>('#remaining')!
const start = document.querySelector<HTMLButtonElement>('#start')!
const pause = document.querySelector<HTMLButtonElement>('#pause')!
const resume = document.querySelector<HTMLButtonElement>('#resume')!

const turnButtonsGroup = document.querySelector<HTMLDivElement>('#turn_buttons')!
const skipWord = document.querySelector<HTMLButtonElement>('#skip_word')!
const guessedWord = document.querySelector<HTMLButtonElement>('#guessed_word')!

const roundButtonsGroup = document.querySelector<HTMLDivElement>('#round_buttons')!
const nextTeam = document.querySelector<HTMLButtonElement>('#next_team')!
const addTeam = document.querySelector<HTMLButtonElement>('#add_team')!
const addTeamAndNextRound = document.querySelector<HTMLButtonElement>('#add_team_next_round')!
const nextRound = document.querySelector<HTMLButtonElement>('#next_round')!

const resetGame = document.querySelector<HTMLButtonElement>('#reset_game')!

// TODO remove
const endTimer = document.querySelector<HTMLButtonElement>('#end_timer')!

Game.initGame()

Interface.setupUserOutput(scoreGroup, round, team, score, timeGroup, remainingNumber,
    instruction, word)
Interface.setupTimerButtons(start, pause, resume)
Interface.setupTurnButtons(turnButtonsGroup, skipWord, guessedWord)
Interface.setupRoundButtons(roundButtonsGroup, nextTeam, addTeam, addTeamAndNextRound, nextRound)
Interface.setupResetGame(resetGame)

Interface.setupFakeEndTimer(endTimer)
