import fetchDeckId from '../utils/fetchDeckId.js'
import fetchCard from '../utils/fetchCard.js'
import tabPop from '../utils/tabPop.js'
import trackTurn from '../utils/trackTurn.js'
import trackPlayer from '../utils/trackPlayer.js'
import drawCard from '../utils/drawCard.js'
import displayCard from '../utils/displayCard.js'
import displayGameOver from '../utils/displayGameOver.js'
import hideGameOver from '../utils/hideGameOver.js'
import displayGameStart from '../utils/displayGameStart.js'

const drawBtn = document.querySelector('.draw-btn')
const currentPlayerHeader = document.querySelector('.current-player-header')
const restart = document.querySelector('.restart')
const gameOverAlert = document.querySelector('.game-over-alert')
const loserNotification = document.querySelector('.loser-notification')
const playerBtns = document.querySelectorAll('.player-btn')
const choosePlayerSection = document.querySelector('.choose-player-amount')

// fetching our deck object, and getting our deck ID
let deckObject = await fetchDeckId()
let deckId = deckObject.deck_id

// getting an int that will randomly pop tab
let gameOver = tabPop()
let turnCount = 1
let playerTotal = 1
let currentPlayer = 1

playerBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    playerTotal = parseInt(e.target.innerText)

    // can now draw cards and see player details
    displayGameStart(drawBtn, currentPlayerHeader, choosePlayerSection)
  })
})

// listening for clicks to draw a card
drawBtn.addEventListener('click', async () => {
  if (turnCount < gameOver) {
    //fetching our card, getting a card object back
    const cardObject = await fetchCard(deckId)

    // drawing card
    const card = drawCard(cardObject)

    // incrementing our turn
    turnCount = trackTurn(turnCount)

    // tracking our current player
    currentPlayer = trackPlayer(currentPlayer, playerTotal, loserNotification)

    // displaying card
    displayCard(card)
  } else {
    displayGameOver(
      drawBtn,
      restart,
      gameOverAlert,
      loserNotification,
      currentPlayer
    )
  }
})

// event listener for restart button
restart.addEventListener('click', async () => {
  // fetching our new deck obj, and getting deck ID
  deckObject = await fetchDeckId()
  deckId = deckObject.deck_id

  // getting new int that will randomly pop tab
  gameOver = tabPop()

  // resetting our turns
  turnCount = 1

  // setting a default value for players
  playerTotal = 1
  currentPlayer = 1

  hideGameOver(restart, gameOverAlert, loserNotification, currentPlayerHeader)
  // hiding our game over elements

  displayCard('reset')

  // tracking turns passed
  trackTurn(0)

  // resetting current player text
  trackPlayer(0, 1)

  // display buttons after restart
  choosePlayerSection.classList.remove('hide')
})
