const api = require('./api.js')
const store = require('./store.js')
const ui = require('./ui.js')

const update = function (index, values) {
  const data = {
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
  const data = {
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
  if (store.player1.length + store.player2.length < 9) {
    if (store.newGame.cells[0] === 'X' && store.newGame.cells[1] === 'X' && store.newGame.cells[2] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[3] === 'X' && store.newGame.cells[4] === 'X' && store.newGame.cells[5] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[6] === 'X' && store.newGame.cells[7] === 'X' && store.newGame.cells[8] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[0] === 'X' && store.newGame.cells[3] === 'X' && store.newGame.cells[6] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[1] === 'X' && store.newGame.cells[4] === 'X' && store.newGame.cells[7] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[2] === 'X' && store.newGame.cells[5] === 'X' && store.newGame.cells[8] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[2] === 'X' && store.newGame.cells[4] === 'X' && store.newGame.cells[6] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[0] === 'X' && store.newGame.cells[4] === 'X' && store.newGame.cells[8] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[0] === 'O' && store.newGame.cells[1] === 'O' && store.newGame.cells[2] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[3] === 'O' && store.newGame.cells[4] === 'O' && store.newGame.cells[5] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[6] === 'O' && store.newGame.cells[7] === 'O' && store.newGame.cells[8] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[0] === 'O' && store.newGame.cells[3] === 'O' && store.newGame.cells[6] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[1] === 'O' && store.newGame.cells[4] === 'O' && store.newGame.cells[7] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[2] === 'O' && store.newGame.cells[5] === 'O' && store.newGame.cells[8] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[2] === 'O' && store.newGame.cells[4] === 'O' && store.newGame.cells[6] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[0] === 'O' && store.newGame.cells[4] === 'O' && store.newGame.cells[8] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    }
  } else if (store.player1.length + store.player2.length === 9) {
    if (store.newGame.cells[0] === 'X' && store.newGame.cells[1] === 'X' && store.newGame.cells[2] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
    } else if (store.newGame.cells[3] === 'X' && store.newGame.cells[4] === 'X' && store.newGame.cells[5] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[6] === 'X' && store.newGame.cells[7] === 'X' && store.newGame.cells[8] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[0] === 'X' && store.newGame.cells[3] === 'X' && store.newGame.cells[6] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[1] === 'X' && store.newGame.cells[4] === 'X' && store.newGame.cells[7] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[2] === 'X' && store.newGame.cells[5] === 'X' && store.newGame.cells[8] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[2] === 'X' && store.newGame.cells[4] === 'X' && store.newGame.cells[6] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[0] === 'X' && store.newGame.cells[4] === 'X' && store.newGame.cells[8] === 'X') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('X')
    } else if (store.newGame.cells[0] === 'O' && store.newGame.cells[1] === 'O' && store.newGame.cells[2] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[3] === 'O' && store.newGame.cells[4] === 'O' && store.newGame.cells[5] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[6] === 'O' && store.newGame.cells[7] === 'O' && store.newGame.cells[8] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[0] === 'O' && store.newGame.cells[3] === 'O' && store.newGame.cells[6] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[1] === 'O' && store.newGame.cells[4] === 'O' && store.newGame.cells[7] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[2] === 'O' && store.newGame.cells[5] === 'O' && store.newGame.cells[8] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[2] === 'O' && store.newGame.cells[4] === 'O' && store.newGame.cells[6] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else if (store.newGame.cells[0] === 'O' && store.newGame.cells[4] === 'O' && store.newGame.cells[8] === 'O') {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.win('O')
    } else {
      api.updateWinLose(updateWinLoose())
      store.newGame.over = true
      ui.tie()
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
  if (store.newGame.over === false) {
    if (store.newGame.cells[0] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[0] = 'X'
        inputImage('X', '0')
        api.updateGame(update(0, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[0] = 'O'
        inputImage('O', '0')
        api.updateGame(update(0, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

const square1 = function () {
  if (store.newGame.over === false) {
    if (store.newGame.cells[1] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[1] = 'X'
        inputImage('X', '1')
        api.updateGame(update(1, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[1] = 'O'
        inputImage('O', '1')
        api.updateGame(update(1, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

const square2 = function () {
  if (store.newGame.over === false) {
    if (store.newGame.cells[2] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[2] = 'X'
        inputImage('X', '2')
        api.updateGame(update(2, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[2] = 'O'
        inputImage('O', '2')
        api.updateGame(update(2, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

const square3 = function () {
  if (store.newGame.over === false) {
    if (store.newGame.cells[3] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[3] = 'X'
        inputImage('X', '3')
        api.updateGame(update(3, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[3] = 'O'
        inputImage('O', '3')
        api.updateGame(update(3, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

const square4 = function () {
  if (store.newGame.over === false) {
    if (store.newGame.cells[4] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[4] = 'X'
        inputImage('X', '4')
        api.updateGame(update(4, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[4] = 'O'
        inputImage('O', '4')
        api.updateGame(update(4, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

const square5 = function () {
  if (store.newGame.over === false) {
    if (store.newGame.cells[5] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[5] = 'X'
        inputImage('X', '5')
        api.updateGame(update(5, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[5] = 'O'
        inputImage('O', '5')
        api.updateGame(update(5, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

const square6 = function () {
  if (store.newGame.over === false) {
    if (store.newGame.cells[6] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[6] = 'X'
        inputImage('X', '6')
        api.updateGame(update(6, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[6] = 'O'
        inputImage('O', '6')
        api.updateGame(update(6, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

const square7 = function () {
  if (store.newGame.over === false) {
    if (store.newGame.cells[7] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[7] = 'X'
        inputImage('X', '7')
        api.updateGame(update(7, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[7] = 'O'
        inputImage('O', '7')
        api.updateGame(update(7, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

const square8 = function () {
  if (store.newGame.over === false) {
    if (store.newGame.cells[8] === '') {
      if (store.player1.length === store.player2.length) {
        store.player1.push('x')
        store.newGame.cells[8] = 'X'
        inputImage('X', '8')
        api.updateGame(update(8, 'X'))
        return winOrNot()
      } else if (store.player1.length > store.player2.length) {
        store.player2.push('o')
        store.newGame.cells[8] = 'O'
        inputImage('O', '8')
        api.updateGame(update(8, 'O'))
        return winOrNot()
      }
    } else {}
  } else {}
}

module.exports = {
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
