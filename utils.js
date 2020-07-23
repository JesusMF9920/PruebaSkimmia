function comprobeDigits(dividend, divider) {
  let result = dividend % divider
  // console.log('El resultado es: ', result)
  return result === 0
}

function validate (a, b, c, index) {
  switch (true) {
    case a && !b:
      a = false;
      return 'TI';
    case b && !a:
      b = false;
      return 'Music';
    case c :
      return 'Musical';
    default:
      return index;
  }
}

module.exports = {
  validate,
  comprobeDigits,
}