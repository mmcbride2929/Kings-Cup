import displayRule from '../utils/displayRule.js'

const cardImage = document.querySelector('.card-img')
const cardValue = document.querySelector('.card-value')
const cardSuit = document.querySelector('.card-suit')

const displayCard = (card) => {
  // clearing the card details and image from dom
  if (card === 'reset') {
    cardImage.src = ''
    cardValue.innerText = ''
    cardSuit.innerText = ''

    //  clearing the game rules
    displayRule('CLEAR')
  } else {
    const { image, suit, value } = card

    cardImage.src = image
    cardValue.innerText = value
    cardSuit.innerText = suit

    // calling the display rule func + passing the card value
    displayRule(value)
  }
}
export default displayCard
