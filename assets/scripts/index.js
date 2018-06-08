'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')
const consolidation = require('./consolidations.js')

$(() => {
  $('#box-1').on('click', consolidation.square1
  )
  $('#box-1').on('click', events.decide
  )
  $('#box-2').on('click', consolidation.square2
  )
  $('#box-2').on('click', events.decide
  )
  $('#box-3').on('click', consolidation.square3
  )
  $('#box-3').on('click', events.decide
  )
  $('#box-4').on('click', consolidation.square4
  )
  $('#box-4').on('click', events.decide
  )
  $('#box-5').on('click', consolidation.square5
  )
  $('#box-5').on('click', events.decide
  )
  $('#box-6').on('click', consolidation.square6
  )
  $('#box-6').on('click', events.decide
  )
  $('#box-7').on('click', consolidation.square7
  )
  $('#box-7').on('click', events.decide
  )
  $('#box-8').on('click', consolidation.square8
  )
  $('#box-8').on('click', events.decide
  )
  $('#box-9').on('click', consolidation.square9
  )
  $('#box-9').on('click', events.decide
  )
  // $('#sign-up-form').on('submit', authEvents.onSignUp)
  // $('#login-form').on('submit', authEvents.onSignIn)
  // $('#change-password-form').on('submit', authEvents.onChangePassword)
  // $('.signout').on('click', authEvents.onSignOut)
})
