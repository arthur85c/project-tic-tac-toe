const store = require('./store.js')
const consolidation = require('./consolidations.js')
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

module.exports = {
  decide: decide
}
