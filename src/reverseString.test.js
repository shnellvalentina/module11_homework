import { reverseString } from './reverseString'

describe('test for reverseString function', () => {
    it('should return revers string', () => {
       expect(reverseString('Hello')).toBe('olleH'); 
       expect(reverseString('12345')).toBe('54321'); 
    });
})