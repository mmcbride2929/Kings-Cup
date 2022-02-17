const currentPlayer = document.querySelector('.player-tracker')

const playerTracker = (players) => {
  console.log(players)
  currentPlayer.innerText = players
}
export default playerTracker
