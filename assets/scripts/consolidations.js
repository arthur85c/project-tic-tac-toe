const sequence = [,,,,,,,,,]

const square1 = function () {
  if (sequence.includes(1)) {
  } else {
    sequence.push(1)
  }
}

const square2 = function () {
  if (sequence.includes(2)) {
  } else {
    sequence.push(2)
  }
}

const square3 = function () {
  if (sequence.includes(3)) {
  } else {
    sequence.push(3)
  }
}

const square4 = function () {
  if (sequence.includes(4)) {
  } else {
    sequence.push(4)
  }
}

const square5 = function () {
  if (sequence.includes(5)) {
  } else {
    sequence.push(5)
  }
}

const square6 = function () {
  if (sequence.includes(6)) {
  } else {
    sequence.push(6)
  }
}

const square7 = function () {
  if (sequence.includes(7)) {
  } else {
    sequence.push(7)
  }
}

const square8 = function () {
  if (sequence.includes(8)) {
  } else {
    sequence.push(8)
  }
}

const square9 = function () {
  if (sequence.includes(9)) {
  } else {
    sequence.push(9)
  }
}

const player1 = function () {
  let even = []
  for (let i = 0; i <= sequence.length; i++) {
    if (i % 2 === 0) {
      even.push(sequence[i])
    }
  } return even
}

const player2 = function () {
  let odd = []
  for (let i = 0; i < sequence.length; i++) {
    if (i % 2 === 1) {
      odd.push(sequence[i])
    }
  } return odd
}

const win = function () {
  let player1Move = player1().sort(function(a, b){return a-b})
  let player2Move = player2().sort(function(a, b){return a-b})

    if (player1Move.includes(1)) {
      alpha
  } else if (player1Move.includes(2)) {
    alpha
  } else if (player1Move.includes(3)) {
    alpha
  } else if (player1Move.includes(4)) {}
}

module.exports = {
  sequence,
  square1,
  square2,
  square3,
  square5,
  square4,
  square6,
  square7,
  square8,
  square9
}
