import fetchDeckId from '../utils/fetchDeckId.js'
import drawCard from '../utils/drawCard.js'
import displayRule from '../utils/displayRule.js'
import tabPop from '../utils/tabPop.js'
import choosePlayers from '../utils/choosePlayers.js'

const drawBtn = document.querySelector('.draw-btn')
const cardImage = document.querySelector('.card-img')
const cardValue = document.querySelector('.card-value')
const cardSuit = document.querySelector('.card-suit')
const restart = document.querySelector('.restart')
const gameOverAlert = document.querySelector('.game-over-alert')

// fetching our deck object, and getting our deck ID
let deckObject = await fetchDeckId()
let deckId = deckObject.deck_id
let cardsRemaining = document.querySelector('.cards-remaining')

// getting an int that will randomly pop tab
let gameOver = tabPop()

// tracking our turns
let turnCount = 0

// waiting for player to choose player amount...
choosePlayers()

// listening for clicks, onClick draw a card
drawBtn.addEventListener('click', async () => {
  if (turnCount < gameOver) {
    turnCount++

    //drawing our card, getting a card object back
    const cardObject = await drawCard(deckId)

    // getting cards left from card object
    cardsRemaining.innerText = cardObject.remaining

    // getting card from card object, and destructuring
    const card = cardObject.cards[0]
    const { image, suit, value } = card

    cardImage.src = image
    cardValue.innerText = value
    cardSuit.innerText = suit

    // calling the display rule func + passing the card value
    displayRule(value)
  } else {
    // revealing game over elements
    gameOverAlert.classList.remove('active')
    restart.classList.remove('active')
  }
})

// event listener for restart button
restart.addEventListener('click', async () => {
  //// fetching our new deck object, and getting our deck ID
  deckObject = await fetchDeckId()
  deckId = deckObject.deck_id

  // getting new int that will randomly pop tab
  gameOver = tabPop()

  // resetting our turns
  turnCount = 0

  // hiding our game over elements
  gameOverAlert.classList.add('active')
  restart.classList.add('active')

  // clearing the card details and image from dom
  cardImage.src = ''
  cardValue.innerText = ''
  cardSuit.innerText = ''

  // clearing the game rules
  displayRule('CLEAR')

  // resetting cards remaining
  cardsRemaining.innerText = 52
})

// if playersSet === false, modal needs to be up
// select player amount. do flexbox of 6 boxes.
//onclick dissppear modal, set playersSet to true,
// take player input amount and store amount in var.
// have a function called player tracker
// func takes amount of player,.. increment on draw card.. and if player amount matches player counter, restart to player one.

// track and declare winner

// restart function and adding back .active

// on click..reset players, modal pops up,.
// get a new deck id, new deck, hide suits,card, hide
// restart
