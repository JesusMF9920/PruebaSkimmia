function comprobeDigits(dividendo, divisor) {
  let result = dividendo % divisor
  // console.log('El resultado es: ', result)
  return result === 0
}

function printNumbers() {
  for (let index = 1; index <= 100; index++) {
    let a = comprobeDigits(index, 5)
    let b = comprobeDigits(index, 3)
    let c = comprobeDigits(index, 15)

    if (!a && !b && !c) {
      console.log(index)
    }

    while (a && !b) {
      console.log('Music')
      a = false
    }

    while(b && !a) {
      console.log('TI')
      b = false
    }

    while (c) {
      console.log('Musical')
      c = false
    }
  }
}

printNumbers();