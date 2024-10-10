import * as Game from './game.ts'

let message: HTMLParagraphElement
let scoreText: HTMLParagraphElement
let remainingText: HTMLParagraphElement
let remainingGroup: HTMLDivElement, turnButtonsGroup: HTMLDivElement
let startButton: HTMLButtonElement, pauseButton: HTMLButtonElement, playButton: HTMLButtonElement,
    skipButton: HTMLButtonElement, guessButton: HTMLButtonElement,
    resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement,
    nextTeamButton: HTMLButtonElement

function updateTexts() {
  if (Game.randomWord != null) {
    if (Game.isTimerRunning()) {
      message.innerText = 'Faites deviner : ' + Game.randomWord
      // Score
      scoreText.innerText = 'Round ' + (Game.round + 1) + '. Equipe ' + Game.getCurrentTeam()?.name + ' : ' + Game.getCurrentTeam()?.score.toString() + ' points'
    } else {
      message.innerText = 'En attente des joueurs'
    }
  } else {
    message.innerText = 'Manche terminée'
    // TODO arrêter le tour (chrono, ...)
  }
  
  // Remaining
  remainingText.innerText = Game.remainingWords().toString()
}

export function setupUserOutput(userScore: HTMLParagraphElement, wordsRemainingGroup: HTMLDivElement,
                                wordsRemainingNumber: HTMLParagraphElement, word: HTMLParagraphElement) {
  console.log('User output init')
  scoreText = userScore
  remainingGroup = wordsRemainingGroup
  remainingText = wordsRemainingNumber
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

    Game.startTurn()
    
    updateTexts()

    remainingGroup.hidden = false
    turnButtonsGroup.hidden = false
    guessButton.disabled = false
    skipButton.disabled = false
    startButton.disabled = true
    pauseButton.disabled = false
    resetButton.disabled = false
    skipButton.style.display = 'inline'
    guessButton.style.display = 'inline'
    nextTeamButton.style.display = 'none'
  }
  startButton.addEventListener('click', () => start())
}

export function setupResetGame (button: HTMLButtonElement) {
  console.log('reset game button setup')
  resetButton = button

  const reset = () => {
    console.log('Resetting game')

    // Reset teams and scores
    Game.resetGame()
    // Reset buttons
    message.innerText ='Prêts à commencer'
    startButton.innerText = 'Relancer'

    remainingGroup.hidden = true
    turnButtonsGroup.hidden = true
    startButton.disabled = false
    pauseButton.disabled = true
    playButton.disabled = false
    playButton.style.display = 'none'
    resetButton.style.display = 'none'
    playButton.style.display = 'none'
    pauseButton.style.display = 'inline'
    playButton.style.display = 'none'
    skipButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
    nextTeamButton.style.display = 'none'
  }
  button.addEventListener('click', () => reset())
}

export function setupResumeTimer (button: HTMLButtonElement) {
  playButton = button

  const play= () => {
    console.log('Resuming timer')
    Game.resume()

    updateTexts()
  
    pauseButton.disabled = false
    pauseButton.style.display = 'inline'
    playButton.style.display = 'none'
  }
  button.addEventListener('click', () => play())
}

export function setupPauseTimer (button: HTMLButtonElement) {
  console.log('stop timer setup')
  pauseButton = button

  const pause = () => {
    console.log('Stopping timer')
    Game.pause()

    updateTexts()
  
    guessButton.disabled = true
    skipButton.disabled = true
    pauseButton.disabled = true
    pauseButton.style.display = 'none'
    playButton.style.display = 'inline'
  }
  button.addEventListener('click', () => pause())
}

export function setupTurnButtons(group: HTMLDivElement) {
  turnButtonsGroup = group

  const skipWord = () => {
    Game.wordNotFound()
    updateTexts()
  }
  group.addEventListener('click', () => skipWord())
}

export function setupSkipWord(button: HTMLButtonElement) {
  skipButton = button

  const skipWord = () => {
    Game.wordNotFound()
    updateTexts()
  }
  button.addEventListener('click', () => skipWord())
}

export function setupGuessedWord(button: HTMLButtonElement) {
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

/**
 * @TODO 
 * @param button 
 */
export function setupNextTeam (button: HTMLButtonElement) {
  nextTeamButton = button

  const nextTeam = () => {
    Game.goToNextTeam()
    
    updateTexts()

    startButton.disabled = false
    skipButton.disabled = true
    guessButton.disabled = true
    skipButton.style.display = 'initial'
    guessButton.style.display = 'initial'
    nextTeamButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
    resetButton.disabled = true
  }
  button.addEventListener('click', () => nextTeam())
}

export function setupNextRound (button: HTMLButtonElement) {
  nextRoundButton = button

  const nextRound = () => {
    Game.endRound()
    
    // TODO include in updateTexts
    message.innerText = ''
    scoreText.innerText = ''
    updateTexts()
    
    startButton.disabled = false
    remainingGroup.hidden = true
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
    message.innerText = 'Fin du temps !'

    startButton.disabled = true
    pauseButton.disabled = true
    skipButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextTeamButton.style.display = 'inline'
    if (Game.isLastTeam()) {
      nextRoundButton.style.display = 'inline'
      nextTeamButton.innerText = 'Ajouter une équipe'
    } else {
      nextTeamButton.innerText = 'Equipe suivante'
    }
    resetButton.style.display = 'inline'
  }
  button.addEventListener('click', () => {Game.pause(); endTimer()}) // TODO remove, Fake event

  Game.addEndTimerAction(endTimer)
}
