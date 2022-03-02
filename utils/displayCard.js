const cardImage = document.querySelector('.card-img')
const cardValue = document.querySelector('.card-value')
const detailsContainer = document.querySelector('.details-container')

const displayCard = (card) => {
  if (card === 'reset') {
    cardImage.classList.add('hide')
    detailsContainer.classList.add('hide')
  } else {
    const { image, value } = card

    // getting card image and value
    cardImage.src = image
    cardValue.innerText = value
    cardImage.classList.remove('hide')
    detailsContainer.classList.remove('hide')
  }
}
export default displayCard
