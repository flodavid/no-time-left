import { Team } from './team.ts'

let teams: Array<Team>
let CURRENT_TEAM = 0


/*****************/
/*      TEAMS     *
/*****************/

/**
 * Add a player to the game
 * @returns the score of the player after adding the point
 */
function addTeam () {
  console.log('Adding a team')
  teams.push(new Team((teams.length + 1).toString()))
  console.log('Total is', teams.length, 'players')
  return teams.length
  // TODO save to query params
}

/**
 * Select the next player in line
 * @returns the index of the player selected
 */
export function goToNextTeam () {
  CURRENT_TEAM ++
  if (CURRENT_TEAM > teams.length) {
    return addTeam()
  }
  return CURRENT_TEAM
}

/**
 * Select the next player in line
 * @returns the index of the player selected
 */
export function goToFirstTeam () {
  CURRENT_TEAM = 0
}

/**
 * Remove all teams
 */
export function resetTeams () {
  console.log('Resetting teams')
  teams = []
  CURRENT_TEAM = 0
}

/**
 * Select the next player in line
 * @returns the index of the player selected
 */
export function endRound () {
  resetRoundScores()
}

/**
 * Change team to the next one in line
 * @returns the new current team index
 */
export function nextTeam() {
  ++CURRENT_TEAM
  if (CURRENT_TEAM >= teams.length) {
    CURRENT_TEAM = 0
  }
  return CURRENT_TEAM
  // TODO reset timer
}

/**
 * Get the current player name
 * @returns the index of the player
 */
export function getCurrentTeam () : number {
  return CURRENT_TEAM
}

export function isLastTeam () {
  return CURRENT_TEAM === teams.length
}

/*****************/
/*    SCORES     *
/*****************/

/**
 * Add a point to the current player
 * @returns the score of the player after adding the point
 */
export function addPointToCurrentTeam () : number {
  console.log('Adding a point to player', CURRENT_TEAM)
  teams[CURRENT_TEAM - 1].score ++
  // TODO save to query params
  return teams[CURRENT_TEAM - 1].score
}

/**
 * Get the current player score
 * @returns the score of the player
 */
export function getCurrentTeamScore () : number {
  if (CURRENT_TEAM == 0) return 0
  return teams[CURRENT_TEAM - 1].score
}

function getCurrentTeams() : Array<string>|null {
  const url = new URL(window.location.href)
  const teams = url.searchParams.getAll('p')
  return teams
}

/**
 * Retrieve the players saved as query parameters
 */
export function loadScores () {
  console.log('reading scores from URL')
  teams = []
  CURRENT_TEAM = 0

  const teamsString = getCurrentTeams()
  if (teamsString !== null && teams?.length > 0) {
    for (const team of teamsString) {
      const name = team.split('_')[0]
      const score = team.split('_')[1]
      // TODO insert them in the order of their index
      if (name !== null && score !== null && !Number.isNaN(parseInt(score))) {
        teams.push(new Team(name, parseInt(score))) // TODO 
      }
    }
  } else {
    CURRENT_TEAM = 0
  }
}

/*****************/
/*     BOTH      *
/*****************/

/**
 * Remove all scores and players
 */
export function resetAll() {
  teams = []
  CURRENT_TEAM = 0
}

/**
 * Only reset round nscores
 */
export function resetRoundScores() {
  for (let team in teams) {
    teams[team].score = 0
  }
}

/**
 * Reset round and party scores to 0
 * // TODO party scores
 */
export function restart() {
  resetRoundScores()
  CURRENT_TEAM = 0
}