import { checkNumber } from './checkNumber.js'

describe('test for checkNumber function', () => {
    it('should check for an even number', () => {
       expect(checkNumber(7)).toBe('Число 7 нечетное!');
    });

    it('should check for an odd number', () => {
       expect(checkNumber(8)).toBe('Число 8 четное!');
    });

    it('should check for an invalid number', () => {
       expect(checkNumber(1001)).toBe('Данные неправильные');
    });
 })

 describe('test for checkNumber function', () => {
   it('should check for an even or odd or invalid number', () => {
      expect(checkNumber(9)).toBe('Число 9 нечетное!'); 
      expect(checkNumber(8)).toBe('Число 8 четное!'); 
      expect(checkNumber(1001)).toBe('Данные неправильные');
   });
})