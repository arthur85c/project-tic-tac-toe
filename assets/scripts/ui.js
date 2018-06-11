const store = require('./store.js')

const signInSuccess = function (response) {
  store.user = response.user
  console.log(response.user)
  console.log(store)
}

const getGameSuccess = function (response) {
  console.log(response)
}

const createGameSuccess = function (response) {
  store.newGame = response.game
  console.log(response)
  console.log(store.newGame.id)
}

const specificGameSuccess = function (response) {
  console.log(response)
}

const specificGameFail = function (response) {
  console.log(response)
}


module.exports = {
  signInSuccess,
  getGameSuccess,
  createGameSuccess,
  specificGameSuccess,
  specificGameFail
}
