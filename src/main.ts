import './style.css'
import { setupUserOutput, setupNextWord, setupGuessedWord, setupResetWords, setupNextRound, loadGame } from './game.ts'

const score = document.querySelector<HTMLParagraphElement>('#score')!
const nextWord = document.querySelector<HTMLButtonElement>('#next_word')!
const guessedWord = document.querySelector<HTMLButtonElement>('#guessed_word')!
const resetWords = document.querySelector<HTMLButtonElement>('#reset_words')!
const nextRound = document.querySelector<HTMLButtonElement>('#next_round')!
const message = document.querySelector<HTMLParagraphElement>('#word')!

setupUserOutput(score, message)

setupNextWord(nextWord)
setupGuessedWord(guessedWord)
setupResetWords(resetWords)
setupNextRound(nextRound)

loadGame()
