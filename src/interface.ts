import * as Game from './game.ts'

let instruction: HTMLParagraphElement
let wordParagraph: HTMLParagraphElement
let round: HTMLSpanElement, team: HTMLSpanElement, score: HTMLSpanElement, remainingNumber: HTMLSpanElement
let scoreGroup: HTMLDivElement, remainingGroup: HTMLDivElement, turnButtonsGroup: HTMLDivElement
let startButton: HTMLButtonElement, pauseButton: HTMLButtonElement, resumeButton: HTMLButtonElement,
    skipButton: HTMLButtonElement, guessButton: HTMLButtonElement,
    resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement,
    nextTeamButton: HTMLButtonElement

/**
 * 
 * @param score_paragraph Text giving the current team score
 * @param remaining_group Div containing the remaining time and words to guess
 * @param words_remaining_number Number of words remaining
 * @param message Instructions given to the players of what to do
 * @param word Current word to guess
 */
export function setupUserOutput(score_group: HTMLDivElement,
  round_number: HTMLSpanElement, team_number: HTMLSpanElement, score_number: HTMLParagraphElement,
  remaining_group: HTMLDivElement, words_remaining_number: HTMLSpanElement,
  message: HTMLParagraphElement, word: HTMLParagraphElement)
{
  console.log('User output init')
  scoreGroup= score_group
  round = round_number
  team = team_number
  score = score_number
  remainingGroup = remaining_group
  remainingNumber = words_remaining_number
  instruction = message
  wordParagraph = word
}

export function setupTimerButtons (
    start_button: HTMLButtonElement,
    pause_button: HTMLButtonElement,
    resume_button: HTMLButtonElement)
{
  startButton = start_button
  pauseButton = pause_button
  resumeButton = resume_button

  startButton.addEventListener('click', () => doStartGame())
  pauseButton.addEventListener('click', () => doPauseGame())
  resumeButton.addEventListener('click', () => doResumeGame())
}

export function setupResetGame (button: HTMLButtonElement) {
  resetButton = button

  const reset = () => {
    console.log('Resetting game')

    // Reset teams and scores
    Game.resetGame()
    
    // Update texts to a new game state
    instruction.innerText = 'Prêts à commencer ?'
    startButton.innerText = 'Relancer'

    // Reset buttons
    scoreGroup.style.visibility = 'hidden'
    startButton.hidden = false
    remainingGroup.style.visibility = 'hidden'
    wordParagraph.style.visibility = 'hidden'
    turnButtonsGroup.style.visibility = 'hidden'
    pauseButton.hidden = true
    pauseButton.style.visibility = 'visible'
    resumeButton.hidden = true
    skipButton.style.display = 'initial'
    guessButton.style.display = 'initial'
    nextRoundButton.style.display = 'none'
    nextTeamButton.style.display = 'initial'
    resetButton.style.visibility = "hidden"
  }
  button.addEventListener('click', () => reset())

  if (!Game.hasWords()) {
    resetButton.style.visibility = "hidden"
  }
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
      instruction.innerText = 'Fin du round'
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
 * @param button 
 */
export function setupNextTeam (button: HTMLButtonElement) {
  nextTeamButton = button

  const nextTeam = () => {
    Game.goToNextTeam()
    
    updateTexts()

    startButton.hidden = false
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
    
    updateTexts()
    
    startButton.hidden = false
    remainingGroup.hidden = true
    skipButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextRoundButton.style.display = 'none'
    nextTeamButton.style.display = 'none'
    resetButton.style.visibility = "visible"
  }
  button.addEventListener('click', () => nextRound())
}

export function setupEndTimer (button: HTMLButtonElement) {
  
  const endTimer = () => {
    console.log("end of timer")
    // updateTexts()
    instruction.innerText = 'Fin du temps !'

    wordParagraph.style.visibility = "hidden"
    startButton.hidden = true
    // The pause button should disappear, but still leave an empty space
    pauseButton.style.visibility = 'hidden'
    skipButton.style.display = 'none'
    guessButton.style.display = 'none'
    nextTeamButton.style.display = 'inline'
    if (Game.isLastTeam()) {
      nextRoundButton.style.display = 'inline'
      nextTeamButton.innerText = 'Ajouter une équipe'
    } else {
      nextTeamButton.innerText = 'Equipe suivante'
    }
    resetButton.style.visibility = "visible"
  }
  button.addEventListener('click', () => {Game.reset(); endTimer()}) // TODO remove, Fake event

  Game.addEndTimerAction(endTimer)
}

function updateTexts() {

    // // TODO include in updateTexts
    // instruction.innerText = ''
    // scoreText.innerText = ''

  if (Game.randomWord != null) {
    if (Game.isTimerRunning()) {
      if (Game.round === Game.Round.Word) instruction.innerText = 'Faites deviner en décrivant :'
      else if (Game.round === Game.Round.Description) instruction.innerText = 'Faites deviner avec un seul mot :'
      else if (Game.round === Game.Round.Signs) instruction.innerText = 'Faites deviner en mimant :'
      else instruction.innerText = 'Partie terminée'
      
      wordParagraph.innerText = Game.randomWord
      wordParagraph.style.visibility = "visible"
      // Score
      round.innerText = (Game.round + 1).toString()
      var currentTeam = Game.getCurrentTeam()
      team.innerText = currentTeam ? currentTeam.name : 'inconnue'
      score.innerText = currentTeam ? currentTeam.score.toString() : '0'
    } else {
      instruction.innerText = 'En attente des joueurs'
      wordParagraph.style.visibility = "hidden"
    }
  } else {
    instruction.innerText = 'Manche terminée'
  }
  
  // Remaining
  remainingNumber.innerText = Game.remainingWords().toString()
}

function doStartGame() {
  console.log('(Re)Starting game')

  Game.startTurn()
  
  updateTexts()
  
  startButton.hidden = true
  scoreGroup.style.visibility = 'visible'
  remainingGroup.style.visibility = 'visible'
  turnButtonsGroup.style.visibility = 'visible'
  guessButton.disabled = false
  skipButton.disabled = false
  pauseButton.hidden = false
  resetButton.disabled = false
  skipButton.style.display = 'inline'
  guessButton.style.display = 'inline'
  nextTeamButton.style.display = 'none'
}

function doPauseGame () {
  console.log('Stopping timer')
  Game.pause()

  updateTexts()

  guessButton.disabled = true
  skipButton.disabled = true
  pauseButton.hidden = true
  resumeButton.hidden = false
  resetButton.style.visibility = "visible"
}

function doResumeGame () {
  console.log('Resuming timer')
  Game.resume()

  updateTexts()
  
  guessButton.disabled = false
  skipButton.disabled = false
  pauseButton.hidden = false
  resumeButton.hidden = true
}
