const utils = require('./utils')

const { comprobeDigits, validate } = utils



function printNumbers() {
  console.log('New Version')
  for (let index = 1; index <= 100; index++) {
    let a = comprobeDigits(index, 5)
    let b = comprobeDigits(index, 3)
    let c = comprobeDigits(index, 15)

    console.log(validate(a, b, c, index))

  }
}

printNumbers();