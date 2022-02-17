const fetchDeckId = async () => {
  const response = await fetch(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  )
  const deckId = await response.json()

  return deckId
}

export default fetchDeckId
