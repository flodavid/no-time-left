import './style.css'
import { loadGame, setupNextWord, setupGuessedWord, setupResetWords, setupNextRound } from './words.ts'

loadGame(document.querySelector<HTMLButtonElement>('#next_word')!,
            document.querySelector<HTMLButtonElement>('#guessed_word')!,
            document.querySelector<HTMLButtonElement>('#reset_words')!,
            document.querySelector<HTMLButtonElement>('#next_round')!)

setupNextWord(document.querySelector<HTMLButtonElement>('#next_word')!,
              document.querySelector<HTMLButtonElement>('#guessed_word')!,
              document.querySelector<HTMLButtonElement>('#reset_words')!,
              document.querySelector<HTMLButtonElement>('#next_round')!,
              document.querySelector<HTMLParagraphElement>('#word')!)

setupGuessedWord(document.querySelector<HTMLButtonElement>('#guessed_word')!,
                document.querySelector<HTMLButtonElement>('#next_word')!,
                document.querySelector<HTMLButtonElement>('#reset_words')!,
                document.querySelector<HTMLButtonElement>('#next_round')!,
                document.querySelector<HTMLParagraphElement>('#word')!)

setupResetWords(document.querySelector<HTMLButtonElement>('#reset_words')!,
                document.querySelector<HTMLButtonElement>('#next_word')!,
                document.querySelector<HTMLButtonElement>('#guessed_word')!,
                document.querySelector<HTMLButtonElement>('#next_round')!,
                document.querySelector<HTMLParagraphElement>('#word')!)

setupNextRound(document.querySelector<HTMLButtonElement>('#next_round')!,
                document.querySelector<HTMLButtonElement>('#next_word')!,
                document.querySelector<HTMLButtonElement>('#guessed_word')!,
                document.querySelector<HTMLButtonElement>('#reset_words')!,
                document.querySelector<HTMLParagraphElement>('#word')!)
