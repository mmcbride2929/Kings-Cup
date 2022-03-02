const tabPop = () => {
  let randomNumber = Math.floor(Math.random() * (27 - 15) + 15)

  // enable to make game quicker for testing
  //let randomNumber = Math.floor(Math.random() * (7 - 5) + 5)

  return randomNumber
}

export default tabPop
