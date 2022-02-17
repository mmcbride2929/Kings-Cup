import playerTracker from './playerTracker.js'

const playerBtns = document.querySelectorAll('.player-btn')
const choosePlayerSection = document.querySelector('.choose-player-amount')

const choosePlayers = () => {
  playerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const players = e.target.innerText
      playerTracker(players)
      return players

      // hiding buttons after selection
      choosePlayerSection.classList.add('hide')
    })
  })
}

export default choosePlayers
