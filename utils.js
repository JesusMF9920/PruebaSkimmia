function comprobeDigits(dividend, divider) {
  let result = dividend % divider
  // console.log('El resultado es: ', result)
  return result === 0
}

function validate (a, b, c, index) {

  if (!a && !b && !c) {
    return index;
  }

  while (a && !b) {
    a = false;
    return 'TI';
  }

  while(b && !a) {
    b = false;
    return 'Music';
  }

  while (c) {
    c = false;
    return 'Musical';
  }
}

module.exports = {
  validate,
  comprobeDigits,
}