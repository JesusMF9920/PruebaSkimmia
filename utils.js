function comprobeDigits(dividend, divider) {
  let result = dividend % divider
  // console.log('El resultado es: ', result)
  return result === 0
}

function validate (a, b, c, index) {

  if (!a && !b && !c) {
    // console.log(index)
    return index
  }

  while (a && !b) {
    // console.log('Music')
    a = false
    return 'TI'
  }

  while(b && !a) {
    // console.log('TI')
    b = false
    return 'Music'
  }

  while (c) {
    // console.log('Musical')
    c = false
    return 'Musical'
  }
}

module.exports = {
  validate,
  comprobeDigits,
}