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
}

/**
 * Select the next player in line
 * @returns the index of the player selected
 */
export function endRound () {
  current_team = 0
  resetRoundScores()
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

export function isLastTeam () {
  return current_team === teams.length
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
  teams[current_team].score ++
  // TODO save to query params
  return teams[current_team].score
}

/**
 * Get the current player score
 * @returns the score of the player
 */
export function getCurrentTeamScore () : number {
  if (current_team == 0) return 0
  return teams[current_team].score
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
  current_team = 0
}