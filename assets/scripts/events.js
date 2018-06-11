const store = require('./store.js')
const api = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then()
    .catch()
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then()
    .catch()
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then()
    .catch()
}

const onGetGame = function (event) {
  event.preventDefault()
  api.findGame()
    .then(ui.getGameSuccess)
    .catch()
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch()
}

const onspecificGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.find1Game(data)
    .then(ui.specificGameSuccess)
    .catch()
}

const onJoinGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.joinGame(data)
    .then(ui.specificGameSuccess)
    .catch()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetGame,
  onCreateGame,
  onspecificGame,
  onJoinGame
}
