const losingPlayer = document.querySelector('.losing-player')

const displayGameOver = (
  drawBtn,
  restart,
  gameOverAlert,
  loserNotification,
  currentPlayer
) => {
  // revealing game over elements
  gameOverAlert.classList.remove('hide')
  restart.classList.remove('hide')

  // revealing loser notification
  loserNotification.classList.remove('hide')

  // hiding ability to draw card
  drawBtn.classList.add('hide')

  // displaying losing player on dom
  losingPlayer.innerText = currentPlayer
}

export default displayGameOver
