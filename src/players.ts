let SCORES: Array<number>
let CURRENT_PLAYER : number


/*****************/
/*    PLAYERS    *
/*****************/

/**
 * Add a player to the game
 * @returns the score of the player after adding the point
 */
function addPlayer () {
  console.log('Adding player')
  SCORES.push(0)
  console.log('Total is', SCORES.length, 'players')
  return SCORES.length
  // TODO save to query params
}

/**
 * Select the next player in line
 * @returns the index of the player selected
 */
export function goToNextPlayer () {
  CURRENT_PLAYER ++
  if (CURRENT_PLAYER > SCORES.length) {
    return addPlayer()
  }
  return CURRENT_PLAYER
}

/**
 * Select the next player in line
 * @returns the index of the player selected
 */
export function endRound () {
  resetRoundScores()
  CURRENT_PLAYER = 1
  return CURRENT_PLAYER
}

/*****************/
/*    SCORES     *
/*****************/

/**
 * Add a point to the current player
 * @returns the score of the player after adding the point
 */
export function addPointToCurrentPlayer () : number {
  console.log('Adding a point to player', CURRENT_PLAYER)
  SCORES[CURRENT_PLAYER - 1] ++
  // TODO save to query params
  return SCORES[CURRENT_PLAYER - 1]
}

/**
 * Get the current player name
 * @returns the index of the player
 */
export function getCurrentPlayer () : number {
  return CURRENT_PLAYER
}

/**
 * Get the current player score
 * @returns the score of the player
 */
export function getCurrentPlayerScore () : number {
  return SCORES[CURRENT_PLAYER - 1]
}

function getCurrentPlayers() : Array<string>|null {
  const url = new URL(window.location.href)
  const players = url.searchParams.getAll('p')
  return players
}

/**
 * Retrieve the players saved as query parameters
 */
export function loadScores () {
  console.log('reading scores from URL')
  SCORES = []

  const players = getCurrentPlayers()
  if (players !== null && players?.length > 0) {
    CURRENT_PLAYER = players.length
    for (const player of players) {
      const index = player.split('_')[0]
      const score = player.split('_')[1]
      // TODO insert them in the order of their index
      if (index !== null && score !== null && !Number.isNaN(parseInt(score))) {
        SCORES.push(parseInt(score))
      }
    }
  } else {
    CURRENT_PLAYER = 0
  }
}

/*****************/
/*     BOTH      *
/*****************/

/**
 * Remove all scores and players
 */
export function resetAll() {
  SCORES = []
  CURRENT_PLAYER = 0
}

/**
 * Only reset round nscores
 */
export function resetRoundScores() {
  for (let player in SCORES) {
    SCORES[player] = 0
  }
  CURRENT_PLAYER = 0
}

/**
 * Reset round and party scores to 0
 * // TODO party scores
 */
export function restart() {
  resetRoundScores()
}