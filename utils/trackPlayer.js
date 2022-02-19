let displayCurrentPlayer = document.querySelector('.current-player')

const trackPlayer = (currentPlayer, playerTotal) => {
  currentPlayer++

  if (currentPlayer > playerTotal) {
    currentPlayer = 1
    displayCurrentPlayer.innerHTML = currentPlayer
  }
  if (currentPlayer <= playerTotal) {
    displayCurrentPlayer.innerHTML = currentPlayer
  }

  return currentPlayer
}

export default trackPlayer
