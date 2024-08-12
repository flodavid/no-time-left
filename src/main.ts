import './style.css'
import { loadGame, setupNextWord, setupGuessedWord, setupResetWords, setupNextRound } from './words.ts'

const nextWord = document.querySelector<HTMLButtonElement>('#next_word')!
const guessedWord = document.querySelector<HTMLButtonElement>('#guessed_word')!
const resetWords = document.querySelector<HTMLButtonElement>('#reset_words')!
const nextRound = document.querySelector<HTMLButtonElement>('#next_round')!
const word = document.querySelector<HTMLParagraphElement>('#word')!

loadGame(nextWord, guessedWord, resetWords, nextRound)
setupNextWord(nextWord, guessedWord, resetWords, nextRound, word)
setupGuessedWord(guessedWord, nextWord, resetWords, nextRound, word)
setupResetWords(resetWords, nextWord, guessedWord, nextRound, word)
setupNextRound(nextRound, nextWord, guessedWord, resetWords, word)
