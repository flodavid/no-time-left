import * as Game from './game.ts'

let instruction: HTMLParagraphElement
let wordParagraph: HTMLParagraphElement
let round: HTMLSpanElement, team: HTMLSpanElement, score: HTMLSpanElement, remainingNumber: HTMLSpanElement
let scoreGroup: HTMLDivElement, timeGroup: HTMLDivElement, turnButtonsGroup: HTMLDivElement,
    roundButtonsGroup: HTMLDivElement
let startButton: HTMLButtonElement, pauseButton: HTMLButtonElement, resumeButton: HTMLButtonElement,
    skipButton: HTMLButtonElement, guessButton: HTMLButtonElement,
    resetButton: HTMLButtonElement, nextRoundButton: HTMLButtonElement,
    nextTeamButton: HTMLButtonElement, addTeamButton: HTMLButtonElement, addTeamNextRoundButton: HTMLButtonElement

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
  scoreGroup = score_group
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

export function setupTurnButtons(group: HTMLDivElement,
                                 skip_word: HTMLButtonElement, guessed_word: HTMLButtonElement)
{
  turnButtonsGroup = group
  skipButton = skip_word
  guessButton = guessed_word

  skipButton.addEventListener('click', () => doSkipWord())
  guessButton.addEventListener('click', () => doGuessedWord())
}

export function setupRoundButtons(group: HTMLDivElement,
                                 next_team: HTMLButtonElement, add_team: HTMLButtonElement,
                                 add_team_next_round: HTMLButtonElement, next_round: HTMLButtonElement)
{
  roundButtonsGroup = group
  nextTeamButton = next_team
  addTeamButton = add_team
  addTeamNextRoundButton = add_team_next_round
  nextRoundButton = next_round

  nextTeamButton.addEventListener('click', () => doNextTeam())
  addTeamButton.addEventListener('click', () => {
    doAddTeam()
  })
  addTeamNextRoundButton.addEventListener('click', () => {
    doAddTeam()
    doNextRound()
  })
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
  undisplayElement(addTeamButton)
  doNextTeam()
}

export function setupResetGame (button: HTMLButtonElement) {
  resetButton = button

  const reset = () => {
    console.log('Resetting game')

    // Reset teams and scores
    Game.resetGame()
    
    // Update texts to a new game state
    instruction.innerText = 'Prêts à commencer ?'

    // Reset buttons
    displayElement(startButton)
    undisplayElement(scoreGroup)
    undisplayElement(timeGroup)
    hideElement(wordParagraph)
    undisplayElement(turnButtonsGroup)
    undisplayElement(roundButtonsGroup)
    undisplayElement(pauseButton)
    showElement(pauseButton)
    undisplayElement(resumeButton)
    undisplayElement(nextTeamButton)
    displayElement(addTeamButton)
    undisplayElement(addTeamNextRoundButton)
    undisplayElement(nextRoundButton)
    hideElement(resetButton)
  }
  button.addEventListener('click', () => reset())

  if (!Game.hasWords()) {
    hideElement(resetButton)
  }
}

function nextTeamClicked () {
  updateTexts()

  displayElement(startButton)
  disableButton(skipButton)
  disableButton(guessButton)
  undisplayElement(roundButtonsGroup)

  hideElement(resetButton)
}

function doNextRound () {
  Game.endRound()
  
  updateTexts()
  
  displayElement(startButton)
  undisplayElement(timeGroup)
  undisplayElement(roundButtonsGroup)

  showElement(resetButton)
}

export function setupFakeEndTimer (button: HTMLButtonElement) {
  button.addEventListener('click', () => {Game.reset(); doEndTimer()})
}

function updateTexts () {
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
      // instruction.innerText = 'Prêts pour la manche suivante ?'
      wordParagraph.innerText = Game.randomWord
      showElement(wordParagraph)
    } else {
      instruction.innerText = 'En attente des joueurs'
      hideElement(wordParagraph)
    }
  } else {
    if (Game.round === Game.Round.End - 1) {
      /* End of game screen */
      instruction.innerText = 'Partie terminée\n'
      undisplayElement(scoreGroup)
      undisplayElement(timeGroup)
      // Printing scores. TODO improve it
      Game.getTeams().forEach(team => {
        instruction.innerText += '\n Équipe ' + team.name + ' : ' + team.totalScore + ' points'
      })
    } else instruction.innerText = 'Tous les mots ont été devinés. Fin du round'
  }
    
    // Remaining
    remainingNumber.innerText = Game.remainingWords().toString()
}

function doStartGame () {
  console.log('(Re)Starting game')

  Game.startTurn()
  
  updateTexts()
  
  // Actions during the guessing phase
  displayElement(scoreGroup)

  displayElement(turnButtonsGroup)
  enableButton(guessButton)
  enableButton(skipButton)
  
  undisplayElement(startButton)
  displayElement(timeGroup)

  showElement(resetButton)
  disableButton(resetButton)
}

function doPauseGame () {
  console.log('Stopping timer')
  Game.pause()

  updateTexts()

  disableButton(guessButton)
  disableButton(skipButton)
  undisplayElement(pauseButton)
  displayElement(resumeButton)
  enableButton(resetButton)
}

function doResumeGame () {
  console.log('Resuming timer')
  Game.resume()

  updateTexts()
  
  enableButton(guessButton)
  enableButton(skipButton)
  displayElement(pauseButton)
  undisplayElement(resumeButton)
  disableButton(resetButton)
}

function doEndTimer () {
  console.log("end of timer")
  // updateTexts()
  instruction.innerText = 'Fin du temps !\n\nPassez le téléphone à l\'équipe suivante'

  hideElement(wordParagraph)
  undisplayElement(timeGroup)
  undisplayElement(turnButtonsGroup)
  hideElement(resetButton)

  // Wait 3 seconds before show round buttons to avoid miss clicks
  window.setTimeout(() => {
    instruction.innerText = '\n\n Vous pouvez'

    displayElement(roundButtonsGroup)
    enableButton(resetButton)
    showElement(resetButton)

    if (Game.hasWords()) {
      if (Game.getTeams().length > 1) {
        instruction.innerText += ' démarrer le tour suivant'
        displayElement(nextTeamButton)

        if (Game.isLastTeam()) {
          displayElement(addTeamButton)
          instruction.innerText += ' ou ajouter une équipe à la manche actuelle'
        } else undisplayElement(addTeamButton)
      } else {
        instruction.innerText += ' ajouter une seconde équipe à la partie'
      }
    } else {
      if (Game.round < Game.Round.End - 1) {
        if (Game.isLastTeam()) {
          displayElement(addTeamNextRoundButton)
          instruction.innerText += ' passer à la manche suivante tout en ajoutant une équipe ou simplement'
        }
        instruction.innerText += ' passer à la manche suivante'
        // Not last round
        displayElement(nextRoundButton)
      }
    }
  }, 4000)
}

///////////////////////////////////////
//              UTILS                //
///////////////////////////////////////

function undisplayElement (element : HTMLElement) {
  element.hidden = true
}

function displayElement (element : HTMLElement) {
  element.hidden = false
}

function hideElement (element : HTMLElement) {
  element.style.visibility = "hidden"
}

function showElement (element : HTMLElement) {
  element.style.visibility = "visible"
  // element.hidden = false
}

function enableButton (button : HTMLButtonElement) {
  button.disabled = false
}

function disableButton (button : HTMLButtonElement) {
  button.disabled = true
}
