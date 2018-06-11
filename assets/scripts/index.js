'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')
const consolidation = require('./consolidations.js')

$(() => {
  $('#box-1').on('click', consolidation.square0
  )
  $('#box-2').on('click', consolidation.square1
  )
  $('#box-3').on('click', consolidation.square2
  )
  $('#box-4').on('click', consolidation.square3
  )
  $('#box-5').on('click', consolidation.square4
  )
  $('#box-6').on('click', consolidation.square5
  )
  $('#box-7').on('click', consolidation.square6
  )
  $('#box-8').on('click', consolidation.square7
  )
  $('#box-9').on('click', consolidation.square8
  )
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#login-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('.signout').on('click', events.onSignOut)
  $('.getGame').on('click', events.onGetGame)
  $('.createGame').on('click', events.onCreateGame)
  $('.specificGame').on('submit', events.onspecificGame)
  $('.join-game').on('submit', events.onJoinGame)
})
