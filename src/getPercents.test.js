import { getPercents } from './getPercents'
describe("getPercents", () => {
    it("should calculate the correct percentage", () => {
      expect(getPercents(30, 200)).toBe(60);
      expect(getPercents(50, 100)).toBe(50);
      expect(getPercents(75, 80)).toBe(60);
    });
  
    it("should throw an error if either argument is not a number", () => {
      expect(() => getPercents("30", 200)).toThrow();
      expect(() => getPercents(30, "200")).toThrow();
      expect(() => getPercents("30", "200")).toThrow();
      expect(() => getPercents(null, 200)).toThrow();
      expect(() => getPercents(30, undefined)).toThrow();
      expect(() => getPercents(NaN, 200)).toThrow();
      expect(() => getPercents(30, NaN)).toThrow();
    });
  
    it("should throw an error if percent value is not between 0 and 100", () => {
      expect(() => getPercents(-1, 200)).toThrow();
      expect(() => getPercents(101, 200)).toThrow();
      expect(() => getPercents(200, 200)).toThrow();
      expect(() => getPercents(-50, 100)).toThrow();
      expect(() => getPercents(150, 100)).toThrow();
    });
  });