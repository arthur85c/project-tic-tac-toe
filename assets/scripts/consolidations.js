const api = require('./api.js')

let sequence = [ , , , , , , , , , ]
let player1 = []
let player2 = []

const update = function (index, values) {
  let data = {
    'game': {
      'cell': {
        'index': `${index}`,
        'value': `${values}`
      },
      'over': false
    }
  }
  return data
}

const updateWinLoose = function () {
  let data = {
    'game': {
      'cell': {
        'index': undefined,
        'value': undefined
      },
      'over': true
    }
  }
  return data
}

const winOrNot = function () {
  if (player1.length + player2.length < 9) {
    if (sequence[0] === 'X' && sequence[1] === 'X' && sequence[2] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[3] === 'X' && sequence[4] === 'X' && sequence[5] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[6] === 'X' && sequence[7] === 'X' && sequence[8] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'X' && sequence[3] === 'X' && sequence[6] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[1] === 'X' && sequence[4] === 'X' && sequence[7] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[2] === 'X' && sequence[5] === 'X' && sequence[8] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[2] === 'X' && sequence[4] === 'X' && sequence[6] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'X' && sequence[4] === 'X' && sequence[8] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'O' && sequence[1] === 'O' && sequence[2] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[3] === 'O' && sequence[4] === 'O' && sequence[5] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[6] === 'O' && sequence[7] === 'O' && sequence[8] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'O' && sequence[3] === 'O' && sequence[6] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[1] === 'O' && sequence[4] === 'O' && sequence[7] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[2] === 'O' && sequence[5] === 'O' && sequence[8] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[2] === 'O' && sequence[4] === 'O' && sequence[6] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'O' && sequence[4] === 'O' && sequence[8] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    }
  } else if (player1.length + player2.length === 9) {
    if (sequence[0] === 'X' && sequence[1] === 'X' && sequence[2] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[3] === 'X' && sequence[4] === 'X' && sequence[5] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[6] === 'X' && sequence[7] === 'X' && sequence[8] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'X' && sequence[3] === 'X' && sequence[6] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[1] === 'X' && sequence[4] === 'X' && sequence[7] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[2] === 'X' && sequence[5] === 'X' && sequence[8] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[2] === 'X' && sequence[4] === 'X' && sequence[6] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'X' && sequence[4] === 'X' && sequence[8] === 'X') {
      console.log('Fuck yeah! X WINS!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'O' && sequence[1] === 'O' && sequence[2] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[3] === 'O' && sequence[4] === 'O' && sequence[5] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[6] === 'O' && sequence[7] === 'O' && sequence[8] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'O' && sequence[3] === 'O' && sequence[6] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[1] === 'O' && sequence[4] === 'O' && sequence[7] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[2] === 'O' && sequence[5] === 'O' && sequence[8] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[2] === 'O' && sequence[4] === 'O' && sequence[6] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else if (sequence[0] === 'O' && sequence[4] === 'O' && sequence[8] === 'O') {
      console.log('Fuck yeah! O Wins!!!!')
      api.updateWinLose(updateWinLoose())
    } else {
      console.log('It is a draw')
      api.updateWinLose(updateWinLoose())
    }
  }
}

const inputImage = function (variable, square) {
  if (variable === 'X') {
    return $(`#${square}.image`).html('<img src="https://vignette.wikia.nocookie.net/house-of-cards/images/a/a5/X.png/revision/latest?cb=20161128021903">')
  } else {
    return $(`#${square}.image`).html('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Red_circle_%28thin%29.svg/200px-Red_circle_%28thin%29.svg.png">')
  }
}

const square0 = function () {
  console.log('sequence is', sequence)
  if (sequence[0] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[0] = 'X'
      inputImage('X', '0')
      api.updateGame(update(0, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[0] = 'O'
      inputImage('O', '0')
      api.updateGame(update(0, 'O'))
      return winOrNot()
    }
  } else {}
}

const square1 = function () {
  console.log('sequence is', sequence)
  if (sequence[1] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[1] = 'X'
      inputImage('X', '1')
      api.updateGame(update(1, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[1] = 'O'
      inputImage('O', '1')
      api.updateGame(update(1, 'O'))
      return winOrNot()
    }
  } else {}
}

const square2 = function () {
  console.log('sequence is', sequence)
  if (sequence[2] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[2] = 'X'
      inputImage('X', '2')
      api.updateGame(update(2, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[2] = 'O'
      inputImage('O', '2')
      api.updateGame(update(2, 'O'))
      return winOrNot()
    }
  } else {}
}

const square3 = function () {
  console.log('sequence is', sequence)
  if (sequence[3] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[3] = 'X'
      inputImage('X', '3')
      api.updateGame(update(3, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[3] = 'O'
      inputImage('O', '3')
      api.updateGame(update(3, 'O'))
      return winOrNot()
    }
  } else {}
}

const square4 = function () {
  console.log('sequence is', sequence)
  if (sequence[4] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[4] = 'X'
      inputImage('X', '4')
      api.updateGame(update(4, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[4] = 'O'
      inputImage('O', '4')
      api.updateGame(update(4, 'O'))
      return winOrNot()
    }
  } else {}
}

const square5 = function () {
  console.log('sequence is', sequence)
  if (sequence[5] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[5] = 'X'
      inputImage('X', '5')
      api.updateGame(update(5, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[5] = 'O'
      inputImage('O', '5')
      api.updateGame(update(5, 'O'))
      return winOrNot()
    }
  } else {}
}

const square6 = function () {
  console.log('sequence is', sequence)
  if (sequence[6] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[6] = 'X'
      inputImage('X', '6')
      api.updateGame(update(6, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[6] = 'O'
      inputImage('O', '6')
      api.updateGame(update(6, 'O'))
      return winOrNot()
    }
  } else {}
}

const square7 = function () {
  console.log('sequence is', sequence)
  if (sequence[7] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[7] = 'X'
      inputImage('X', '7')
      api.updateGame(update(7, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[7] = 'O'
      inputImage('O', '7')
      api.updateGame(update(7, 'O'))
      return winOrNot()
    }
  } else {}
}

const square8 = function () {
  console.log('sequence is', sequence)
  if (sequence[8] === undefined) {
    if (player1.length === player2.length) {
      player1.push('x')
      sequence[8] = 'X'
      inputImage('X', '8')
      api.updateGame(update(8, 'X'))
      return winOrNot()
    } else if (player1.length > player2.length) {
      player2.push('o')
      sequence[8] = 'O'
      inputImage('O', '8')
      api.updateGame(update(8, 'O'))
      return winOrNot()
    }
  } else {}
}

module.exports = {
  sequence,
  square0,
  square1,
  square2,
  square3,
  square5,
  square4,
  square6,
  square7,
  square8
}
