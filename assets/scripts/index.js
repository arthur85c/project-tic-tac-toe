'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')
const authEvents = require('./auth/events.js')

$(() => {
  $('#box-1').on('click', events.decide
  )
  $('#box-2').on('click', function () {
    console.log('no. 2')
  })
  $('#box-3').on('click', function () {
    console.log('no. 3')
  })
  $('#box-4').on('click', function () {
    console.log('no. 4')
  })
  $('#box-5').on('click', function () {
    console.log('no. 5')
  })
  $('#box-6').on('click', function () {
    console.log('no. 6')
  })
  $('#box-7').on('click', function () {
    console.log('no. 7')
  })
  $('#box-8').on('click', function () {
    console.log('no. 8')
  })
  $('#box-9').on('click', function () {
    console.log('no. 9')
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#login-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('.signout').on('click', authEvents.onSignOut)
})
})
