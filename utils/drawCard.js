const drawCard = async (id) => {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
  )

  const cardObject = await response.json()
  console.log(cardObject)

  return cardObject
}
export default drawCard
