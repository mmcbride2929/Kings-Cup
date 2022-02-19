let turnTracker = document.querySelector('.turn-tracker')

const trackTurn = (turnCount) => {
  turnCount++

  // getting cards left from card object
  turnTracker.innerText = turnCount

  return turnCount
}

export default trackTurn
