const store = require('./store.js')
const consolidation = require('./consolidations.js')
const api = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')
const sequence = consolidation.sequence

const decide = function () {
  if (sequence.length === 9) {
    console.log('run the function to determin who is the winner')
  } else if (sequence.length % 2 === 0) {
    return $(`#${sequence[sequence.length - 1]}.image`).html('<img id="O" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Red_circle_%28thin%29.svg/200px-Red_circle_%28thin%29.svg.png">')
  } else {
    return $(`#${sequence[sequence.length - 1]}.image`).html('<img id="X" src="https://vignette.wikia.nocookie.net/house-of-cards/images/a/a5/X.png/revision/latest?cb=20161128021903">')
  }
}

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

module.exports = {
  decide: decide,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onGetGame: onGetGame,
  onCreateGame: onCreateGame,
  onspecificGame: onspecificGame
}
