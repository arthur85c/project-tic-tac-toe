'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')
const consolidation = require('./consolidations.js')

$(() => {
  $('.game').hide()
  $('.game').on('click', '#box-1', consolidation.square0)
  $('.game').on('click', '#box-2', consolidation.square1)
  $('.game').on('click', '#box-3', consolidation.square2)
  $('.game').on('click', '#box-4', consolidation.square3)
  $('.game').on('click', '#box-5', consolidation.square4)
  $('.game').on('click', '#box-6', consolidation.square5)
  $('.game').on('click', '#box-7', consolidation.square6)
  $('.game').on('click', '#box-8', consolidation.square7)
  $('.game').on('click', '#box-9', consolidation.square8)
  $('.sign-up').on('submit', '#sign-up-form', events.onSignUp)
  $('.sign-in').on('submit', '#login-form', events.onSignIn)
  $('.afterSignin').on('submit', '#change-password-form', events.onChangePassword)
  $('.afterSignin').on('click', '.signout', events.onSignOut)
  $('.afterSignin').on('click', '.getGame', events.onGetGame)
  $('.afterSignin').on('click', '.createGame', events.onCreateGame)
  $('afterSignin').on('submit', '.specificGame', events.onspecificGame)
  $('.sign-in').on('click', '.generate-sign-up-form', events.onSignUpShow)
  $('.afterSignin').on('click', '.changePasswordForm', events.onChangePWshow)
})
