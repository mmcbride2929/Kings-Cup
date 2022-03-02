const losingPlayer = document.querySelector('.losing-player')
let gameoverTurn = document.querySelector('.gameover-turn')

const displayGameOver = (gameOverContainer, turnCount, currentPlayer) => {
  gameOverContainer.classList.remove('hide')

  // displaying losing player on dom
  gameoverTurn.innerText = turnCount

  // displaying losing player on dom
  losingPlayer.innerText = currentPlayer
}

export default displayGameOver
