const turnHeader = document.querySelector('.turn-header')

const displayGameStart = (
  drawBtn,
  currentPlayerHeader,
  choosePlayerSection
) => {
  turnHeader.classList.remove('hide')
  drawBtn.classList.remove('hide')
  currentPlayerHeader.classList.remove('hide')
  choosePlayerSection.classList.add('hide')
}

export default displayGameStart
