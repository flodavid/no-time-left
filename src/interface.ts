import * as Game from './game.ts'

let instruction: HTMLParagraphElement
let wordParagraph: HTMLParagraphElement
let round: HTMLSpanElement, team: HTMLSpanElement, score: HTMLSpanElement, remainingNumber: HTMLSpanElement
let scoreGroup: HTMLDivElement, timeGroup: HTMLDivElement, turnButtonsGroup: HTMLDivElement
let startButton: HTMLButtonElement, pauseButton: HTMLButtonElement, resumeButton: HTMLButtonElement,
    skipButton: HTMLButtonElement, guessButton: HTMLButtonElement,
    resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement,
    nextTeamButton: HTMLButtonElement, addTeamButton: HTMLButtonElement

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
  time_group: HTMLDivElement, words_remaining_number: HTMLSpanElement,
  message: HTMLParagraphElement, word: HTMLParagraphElement)
{
  console.log('User output init')
  scoreGroup= score_group
  round = round_number
  team = team_number
  score = score_number
  timeGroup = time_group
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
  // Changes made on the interface when the timer ends
  Game.addEndTimerAction(doEndTimer)
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
    scoreGroup.hidden = false
    timeGroup.hidden = true
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

export function setupTurnButtons(group: HTMLDivElement,
                                 skip_button: HTMLButtonElement, guess_button: HTMLButtonElement,
                                 next_team_button: HTMLButtonElement, add_team_button: HTMLButtonElement,
                                 next_round_button: HTMLButtonElement)
{
  turnButtonsGroup = group
  skipButton = skip_button
  guessButton = guess_button
  nextTeamButton = next_team_button
  addTeamButton = add_team_button
  nextRoundButton = next_round_button

  skipButton.addEventListener('click', () => doSkipWord())
  guessButton.addEventListener('click', () => doGuessedWord())
  nextTeamButton.addEventListener('click', () => doNextTeam())
  addTeamButton.addEventListener('click', () => doAddTeam())
  nextRoundButton.addEventListener('click', () => doNextRound())
}

function doSkipWord () {
  Game.wordNotFound()
  updateTexts()
}

const doGuessedWord = () => {
  Game.wordFound()
  updateTexts()
}

function doNextTeam () {
  Game.goToNextTeam()  
  nextTeamClicked()
}

function doAddTeam () {
  Game.addTeam()  
  nextTeamClicked()
}

function nextTeamClicked () {
  updateTexts()

  startButton.hidden = false
  skipButton.disabled = true
  guessButton.disabled = true
  skipButton.style.display = 'initial'
  guessButton.style.display = 'initial'
  nextTeamButton.style.display = 'none'
  addTeamButton.style.display = 'none'
  nextRoundButton.style.display = 'none'
  resetButton.style.visibility = 'hidden'
}

function doNextRound () {
  Game.endRound()
  
  updateTexts()
  
  startButton.hidden = false
  timeGroup.hidden = true
  nextRoundButton.style.display = 'none'
  nextTeamButton.style.display = 'none'
  resetButton.style.visibility = "visible"
}

export function setupFakeEndTimer (button: HTMLButtonElement) {
  button.addEventListener('click', () => {Game.reset(); doEndTimer()})
}

function updateTexts() {
  // Display score and round
  round.innerText = (Game.round + 1).toString()

  // Round
  if (Game.round === Game.Round.Description) instruction.innerText = 'Faites deviner en décrivant :'
  else if (Game.round === Game.Round.Word) instruction.innerText = 'Faites deviner avec un seul mot :'
  else if (Game.round === Game.Round.Signs) instruction.innerText = 'Faites deviner en mimant :'

  // Score
  var currentTeam = Game.getCurrentTeam()
  team.innerText = currentTeam ? currentTeam.name : 'inconnue'
  score.innerText = currentTeam ? currentTeam.roundScore.toString() : '0'

  if (Game.hasWords()) {
    if (Game.randomWord !== undefined && Game.isTimerRunning()) {
      wordParagraph.innerText = Game.randomWord
      wordParagraph.style.visibility = "visible"
    } else {
      instruction.innerText = 'En attente des joueurs'
      wordParagraph.style.visibility = "hidden"
    }
  } else {
    if (Game.round === Game.Round.End - 1) {
      /* End of game screen */
      instruction.innerText = 'Partie terminée\n'
      scoreGroup.hidden = true
      timeGroup.hidden = true
      // Printing scores. TODO improve it
      Game.getTeams().forEach(team => {
        instruction.innerText += '\n Equipe ' + team.name + ' : ' + team.totalScore + ' points'
      })
    } else instruction.innerText = 'Tous les mots ont été devinés. Fin du round'
  }
    
    // Remaining
    remainingNumber.innerText = Game.remainingWords().toString()
}

function doStartGame() {
  console.log('(Re)Starting game')

  Game.startTurn()
  
  updateTexts()
  
  startButton.hidden = true
  timeGroup.hidden = false
  scoreGroup.style.visibility = 'visible'
  turnButtonsGroup.style.visibility = 'visible'
  guessButton.disabled = false
  skipButton.disabled = false
  pauseButton.hidden = false
  resetButton.style.visibility = "visible"
  resetButton.disabled = true
  skipButton.style.display = 'inline'
  guessButton.style.display = 'inline'
  nextTeamButton.style.display = 'none'
  addTeamButton.style.display = 'none'
}

function doPauseGame () {
  console.log('Stopping timer')
  Game.pause()

  updateTexts()

  guessButton.disabled = true
  skipButton.disabled = true
  pauseButton.hidden = true
  resumeButton.hidden = false
  resetButton.disabled = false
}

function doResumeGame () {
  console.log('Resuming timer')
  Game.resume()

  updateTexts()
  
  guessButton.disabled = false
  skipButton.disabled = false
  pauseButton.hidden = false
  resumeButton.hidden = true
  resetButton.disabled = true
}

function doEndTimer () {
  console.log("end of timer")
  // updateTexts()
  instruction.innerText = 'Fin du temps !'

  wordParagraph.style.visibility = "hidden"
  startButton.hidden = true
  // The pause button should disappear, but still leave an empty space
  pauseButton.style.visibility = 'hidden'
  skipButton.style.display = 'none'
  guessButton.style.display = 'none'

  if (Game.hasWords()) {
    nextTeamButton.style.display = 'inline'
    if (Game.isLastTeam()) {
      addTeamButton.style.display = 'inline'
    }
  } else {
    if (Game.round < Game.Round.End - 1) {
      // Not last round
      nextRoundButton.style.display = 'inline'
    }
  }
  resetButton.style.visibility = "visible"
}
