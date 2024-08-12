import './style.css'
import { setupNextWord, setupGuessedWord } from './words.ts'


setupNextWord(document.querySelector<HTMLButtonElement>('#next_word')!,
              document.querySelector<HTMLButtonElement>('#guessed_word')!,
              document.querySelector<HTMLParagraphElement>('#word')!)
setupGuessedWord(document.querySelector<HTMLButtonElement>('#guessed_word')!,
                  document.querySelector<HTMLParagraphElement>('#word')!)
