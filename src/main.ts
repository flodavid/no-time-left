import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupRandomWord } from './words.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    <h1>Random word</h1>
    <div class="card">
      <button id="random_word" type="button">START</button>
      <p id="word"></p>
    </div>
  </div>
`

setupRandomWord(document.querySelector<HTMLButtonElement>('#random_word')!, document.querySelector<HTMLParagraphElement>('#word')!)
