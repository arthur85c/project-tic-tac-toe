const api = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.createSuccess)
    .catch(ui.createFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePWsuccess)
    .catch(ui.changePWfail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signoutSuccess)
    .catch(ui.signoutFail)
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

const onSignUpShow = function (event) {
  event.preventDefault()
  ui.showSignInForm()
}

const onChangePWshow = function (event) {
  event.preventDefault()
  ui.showChangePWForm()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetGame,
  onCreateGame,
  onspecificGame,
  onSignUpShow,
  onChangePWshow
}
