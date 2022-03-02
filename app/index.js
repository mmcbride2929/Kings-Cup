import fetchDeckId from '../utils/fetchDeckId.js'
import fetchCard from '../utils/fetchCard.js'
import tabPop from '../utils/tabPop.js'
import trackTurn from '../utils/trackTurn.js'
import trackPlayer from '../utils/trackPlayer.js'
import drawCard from '../utils/drawCard.js'
import displayCard from '../utils/displayCard.js'
import displayGameOver from '../utils/displayGameOver.js'
import hideGameOver from '../utils/hideGameOver.js'
import displayChoosePlayerAmount from '../utils/displayChoosePlayerAmount.js'
import hideChoosePlayer from '../utils/hideChoosePlayer.js'
import displayGamePlayContainer from '../utils/displayGamePlayContainer.js'
import displayRule from '../utils/displayRule.js'
import hideGamePlayContainer from '../utils/hideGamePlayContainer.js'

const drawBtn = document.querySelector('.draw-btn')
const restart = document.querySelectorAll('.restart')
const gameOverContainer = document.querySelector('.game-over-container')
const loserNotification = document.querySelector('.loser-notification')
const playerBtns = document.querySelectorAll('.player-btn')
const choosePlayerAmount = document.querySelector('.choose-player-amount')
const cardPlaceholder = document.querySelector('.card-placeholder')
const gamePlayContainer = document.querySelector('.gameplay-container')

// fetching our deck object, and getting our deck ID
let deckObject = await fetchDeckId()
let deckId = deckObject.deck_id

// getting an int that will randomly pop tab
let gameOver = tabPop()

// setting game default values
let turnCount = 0
let playerTotal = 0
let currentPlayer = 0

// listening for player to choose player amt
playerBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    playerTotal = parseInt(e.target.innerText)

    // hide choose player function
    hideChoosePlayer(choosePlayerAmount)

    // can now draw cards and see player details
    displayGamePlayContainer(gamePlayContainer)

    cardPlaceholder.classList.remove('hide')
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
    cardPlaceholder.classList.add('hide')

    // displaying rule
    displayRule(card)
  } else {
    // hiding all gameplay elements
    hideGamePlayContainer(gamePlayContainer)

    // displaying game-over modal
    displayGameOver(gameOverContainer, turnCount, currentPlayer)
  }
})

// event listener for restart button
restart.forEach((btn) => {
  console.log('df')
  btn.addEventListener('click', async () => {
    // fetching our new deck obj, and getting deck ID
    deckObject = await fetchDeckId()
    deckId = deckObject.deck_id

    // getting new int that will randomly pop tab
    gameOver = tabPop()

    // resetting our turns
    turnCount = 0

    // setting a default value for players
    playerTotal = 0
    currentPlayer = 0

    hideGameOver(gameOverContainer)
    // hiding our game over elements

    // tracking turns passed
    trackTurn(0)

    // resetting current player text
    trackPlayer(0, 1)

    displayChoosePlayerAmount(choosePlayerAmount)

    displayCard('reset')
    hideGamePlayContainer(gamePlayContainer)
  })
})
