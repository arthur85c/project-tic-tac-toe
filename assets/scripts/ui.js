const store = require('./store.js')

const signInSuccess = function (response) {
  store.user = response.user
  console.log(response.user)
}

const getGameSuccess = function (response) {
  console.log(response)
}

const createGameSuccess = function (response) {
  console.log(response)
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
