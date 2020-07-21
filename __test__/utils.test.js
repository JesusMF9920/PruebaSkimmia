const { comprobeDigits, validate} = require('./../utils');

describe('Utils functions', () => {
  describe('ComprobeDigits function ', () => {
    describe('3', () => {
      test('comprobeDigits going to be true', () => {
        expect(comprobeDigits(33, 3)).toBe(true);
      })
  
      test('comprobe going to be a false', () => {
        expect(comprobeDigits(1, 3)).toBe(false);
      })
      
    })
  
    describe('5', () => {
      test('should to be true', () => {
        expect(comprobeDigits(55, 5)).toBe(true);
      })
      
      test('should to be false', () => {
        expect(comprobeDigits(3, 5)).toBe(false);
      })
    })
    
    describe('3 & 5', () => {
      test('should true', () => {
        expect(comprobeDigits(45, 15)).toBe(true);
      })
  
      test('should false', () => {
        expect(comprobeDigits(33, 15)).toBe(false);
      })
    })
  })

  describe('Validate functions', () => {
    test('should to be 2', () => {
      expect(validate(false, false, false, 2)).toBe(2);
    })

    test('sould Music x2', () => {
      expect(validate(true, false, false, 3)).toBe('TI');
    })

    test('should to be a TI', () => {
      expect(validate(false, true, false, 5)).toBe('Music');
    })

    test('should Musical', () => {
      expect(validate(true, true, true, 15)).toBe('Musical');
    })   
  })  
})
