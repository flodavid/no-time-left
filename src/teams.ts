import { Team } from './team.ts'

let teams: Array<Team>
let current_team = 0


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
  // TODO save to query params
}

/**
 * Change team to the next one in line
 */
export function goToNextTeam () {
  ++current_team
  if (current_team > teams.length - 1) {
    addTeam()
  }
}

/**
 * Remove all teams
 */
export function resetTeams () {
  console.log('Resetting teams')
  teams = []
  current_team = -1
  goToNextTeam()
}

/**
 * Select the next player in line
 * @returns the index of the player selected
 */
export function endRound () {
  storeRoundScores()
}

// /**
//  * Get the current player name
//  * @returns the index of the player
//  */
// export function getCurrentTeam () : Team {
//   return teams[CURRENT_TEAM]
// }

/**
 * Get the current player name
 * @returns the index of the player
 */
export function getCurrentTeam () : Team|null {
  if (teams.length === 0) return new Team('?')
  return teams[current_team]
}

export function getTeams () : Array<Team> {
  return teams
}

export function isLastTeam () : boolean{
  return current_team === teams.length -1
}

/*****************/
/*    SCORES     *
/*****************/

/**
 * Add a point to the current player
 * @returns the score of the player after adding the point
 */
export function addPointToCurrentTeam () : number {
  console.log('Adding a point to player', current_team)
  teams[current_team].roundScore ++
  // TODO save to query params
  return teams[current_team].roundScore
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
  current_team = 0

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
    current_team = 0
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
  current_team = 0
}

/**
 * Only reset round scores and playing team
 */
export function storeRoundScores() {
  current_team = 0
  for (let team in teams) {
    teams[team].totalScore += teams[team].roundScore
    teams[team].roundScore = 0
  }
}

/**
 * Reset round and party scores to 0
 * // TODO total game scores
 */
export function restart() {
  storeRoundScores()
}