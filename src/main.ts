import './style.css'
import * as Game from './game.ts'
import * as Players from './players.ts'


const start = document.querySelector<HTMLButtonElement>('#start_btn')!

const score = document.querySelector<HTMLParagraphElement>('#score')!
const nextWord = document.querySelector<HTMLButtonElement>('#next_word')!
const guessedWord = document.querySelector<HTMLButtonElement>('#guessed_word')!
const resetWords = document.querySelector<HTMLButtonElement>('#reset_words')!

const firstPlayer = document.querySelector<HTMLButtonElement>('#first_player')!
const nextPlayer = document.querySelector<HTMLButtonElement>('#next_player')!
const nextRound = document.querySelector<HTMLButtonElement>('#next_round')!
const message = document.querySelector<HTMLParagraphElement>('#word')!


Game.setupUserOutput(score, message)
Game.setupStart(start)

Game.setupNextWord(nextWord)
Game.setupGuessedWord(guessedWord)
Game.setupResetWords(resetWords)

Game.setupFirstPlayer(firstPlayer)
Game.setupNextPlayer(nextPlayer)
Game.setupNextRound(nextRound)

Game.loadWords()
Players.loadScores()
