import * as Game from './game.ts'

let message: HTMLParagraphElement
let scoreText: HTMLParagraphElement
let remainingText: HTMLParagraphElement
let startButton: HTMLButtonElement, pauseButton: HTMLButtonElement, playButton: HTMLButtonElement,
    skipButton: HTMLButtonElement, guessButton: HTMLButtonElement,
    resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement,
    nextTeamButton: HTMLButtonElement

function updateTexts() {
  // Word to guess
  if (Game.randomWord != null) {
    message.innerText = 'Le mot est : ' + Game.randomWord
  } else {
    message.innerText = 'Manche terminée'
  }
  // Score
  scoreText.innerText = 'Le score de l\'équipe ' + Game.getCurrentTeam()?.name + ' est : ' + Game.getCurrentTeam()?.score.toString()
  // scoreText.innerText = Game.currentScore().toString()
  
  // Remaining
  remainingText.innerText = Game.remainingWords().toString()
}

export function setupUserOutput(userScore: HTMLParagraphElement, wordsRemaining: HTMLParagraphElement, word: HTMLParagraphElement) {
  console.log('User output init')
  scoreText = userScore
  remainingText = wordsRemaining
  message = word
}

export function setupStart(button: HTMLButtonElement) {
  console.log('start button setup')
  startButton = button

  const start = () => {
    console.log('(Re)Starting game')
    
    if (Game.hasWords()) {
      resetButton.style.display = 'inline'
    } else {
      resetButton.style.display = 'none'
    }

    Game.resetGame()
    Game.startTurn()
    
    updateTexts()

    message.innerText = ''
    startButton.disabled = true
    pauseButton.disabled = false
    resetButton.disabled = false
    skipButton.style.display = 'inline'
    guessButton.style.display = 'inline'
    nextTeamButton.style.display = 'none'
  }
  startButton.addEventListener('click', () => start())
}

export function setupPauseTimer (button: HTMLButtonElement) {
  console.log('stop timer setup')
  pauseButton = button

  const pause = () => {
    console.log('Stopping timer')
    Game.pause()
  
    pauseButton.style.display = 'none'
    playButton.style.display = 'inline'
  }
  button.addEventListener('click', () => pause())
}

export function setupResetTimer (button: HTMLButtonElement) {
    console.log('reset timer setup')
    resetButton = button

    const reset = () => {
        console.log('Resetting timer')
        Game.resetGame();
      
        startButton.disabled = false
        pauseButton.disabled = true
        pauseButton.style.display = 'inline'
        playButton.style.display = 'none'
        resetButton.disabled = true
        nextRoundButton.style.display = 'none'
        nextTeamButton.style.display = 'none'
      }
      button.addEventListener('click', () => reset())
}

export function setupPlayTimer (button: HTMLButtonElement) {
    console.log('stop timer setup')
    playButton = button

    const play= () => {
      console.log('Resuming timer')
      Game.resume()
    
      pauseButton.style.display = 'inline'
      playButton.style.display = 'none'
    }
    button.addEventListener('click', () => play())
}

export function setupSkipWord(button: HTMLButtonElement) {
  console.log('next word button setup')
  skipButton = button

  const skipWord = () => {
    Game.wordNotFound()
    updateTexts()
  }
  skipButton.addEventListener('click', () => skipWord())
}

export function setupGuessedWord(button: HTMLButtonElement) {
  console.log('guessed word button setup')
  guessButton = button

  const guessedWord = () => {
    const wordsRemaining = Game.wordFound()
    updateTexts()

    if (!wordsRemaining) {
      message.innerText = 'Fin du round'
      skipButton.style.display = 'none'
      guessButton.style.display = 'none'
      nextRoundButton.style.display = 'inline'
    // } else if () { // TODO add check on notTimeLeft
    // nextPlayerButton.style.display = 'inline'  // TODO
    }      

    // TODO arrêt partie et timer
  }

  guessButton.addEventListener('click', () => guessedWord())
}

export function setupResetWords(button: HTMLButtonElement) {
  console.log('reset words button setup')
  resetButton = button

  const resetWords = () => {
    // Reset words in URL
    const url = new URL(window.location.href)
    url.searchParams.delete('words')
    history.pushState({}, '', url)

    // Reset scores
    // Players.resetAll() // TODO

    // Reset buttons and current word
    message.innerText ='Prêts à commencer'
    button.style.display = 'none'
    startButton.innerText = 'Relancer'
    startButton.style.display = ''
    skipButton.style.display = 'none'
    // nextPlayerButton.style.display = 'none' // TODO
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
    Game.resetTeams()
    
    // TODO afficher le bouton "Joueur suivant" uniquement quand le timer est terminé
    nextTeamButton.style.display = 'inline'
  }

  button.addEventListener('click', () => resetWords())
}


/**
 * @TODO 
 * @param button 
 */
export function setupNextTeam (button: HTMLButtonElement) {
  console.log('next round button setup')
  nextTeamButton = button

  const nextTeam = () => {
    message.innerText = ''

    const teamIdx = Game.goToNextTeam()
    scoreText.innerText = 'Le score de l\'équipe ' + (teamIdx) + ' est : ' + Game.getCurrentTeamScore()
    nextTeamButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
    resetButton.disabled = true
    // TODO start timer
  }

  button.addEventListener('click', () => nextTeam())
}

export function setupNextRound (button: HTMLButtonElement) {
  console.log('next round button setup')
  nextRoundButton = button

  const nextRound = () => {
    Game.endRound()
    
    message.innerText = ''
    updateTexts()

    skipButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
    nextTeamButton.style.display = 'none'
    resetButton.style.display = 'inline'
  }


  button.addEventListener('click', () => nextRound())
}

export function setupEndTimer (button: HTMLButtonElement) {
  
  const endTimer = () => {
    Game.pause() // Fake event

    message.innerText = 'Fin du temps !'

    startButton.disabled = false
    pauseButton.disabled = true
    nextTeamButton.style.display = 'inline'
    if (Game.isLastTeam()) {
      nextRoundButton.style.display = 'inline'
      nextTeamButton.innerText = 'Ajouter une équipe'
    } else {
      nextTeamButton.innerText = 'Equipe suivante'
    }
    skipButton.style.display = 'none'
    guessButton.style.display = 'none'
    resetButton.style.display = 'inline'
  }


  button.addEventListener('click', () => endTimer())
}
