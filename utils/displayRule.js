const rule = document.querySelector('.rule')
const ruleDescription = document.querySelector('.rule-description')

const displayRule = (card) => {
  // displaying our hidden elements
  // rule.classList.remove('hide')
  //  ruleDescription.classList.remove('hide')
  const { value } = card
  switch (value) {
    case 'ACE':
      rule.innerText = 'Social'
      ruleDescription.innerText = 'Everyone drinks'
      break
    case '2':
      rule.innerText = 'You'
      ruleDescription.innerText = 'Pick someone to take a drink'
      break
    case '3':
      rule.innerText = 'Me'
      ruleDescription.innerText = 'Take a drink'
      break
    case '4':
      rule.innerText = 'Guys'
      ruleDescription.innerText = 'All guys drink'
      break
    case '5':
      rule.innerText = 'Jive'
      ruleDescription.innerText =
        "Create a dance sequence, the first person who can't repeat it drinks"
      break
    case '6':
      rule.innerText = 'Chicks'
      ruleDescription.innerText = 'All ladies drink'
      break
    case '7':
      rule.innerText = 'Heaven'
      ruleDescription.innerText =
        'Last person to point towards the sky has to drink'
      break
    case '8':
      rule.innerText = 'Date'
      ruleDescription.innerText = 'Find a drinking buddy'
      break
    case '9':
      rule.innerText = 'Rhyme'
      ruleDescription.innerText =
        "Pick a word, and others must say a word that rhymes with it. The  first who doesn't drinks."
      break
    case '10':
      rule.innerText = 'Categories'
      ruleDescription.innerText =
        'Pick a category, others need to say things in that category, or drink.'
      break
    case 'JACK':
      rule.innerText = 'Never Have I Ever'
      ruleDescription.innerText =
        'First person to put down all 3 fingers must drink'
      break
    case 'QUEEN':
      rule.innerText = 'Question Master'
      ruleDescription.innerText =
        'Ask Questions; those who answer have to drink'
      break
    case 'KING':
      rule.innerText = 'RULE'
      ruleDescription.innerText =
        'the King creates a rule.. if someone breaks it, drink.'
      break
    case 'CLEAR':
    // displaying our hidden elements
    // rule.classList.add('hide')
    // ruleDescription.classList.add('hide')
    // break
    default:
      console.log('ERROR')
  }
}

export default displayRule
