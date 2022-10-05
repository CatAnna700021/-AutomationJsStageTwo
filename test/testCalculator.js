const Calculator = require('../app/Calculator');
const { expect } = require('chai');
let calculator = new Calculator();

describe('add positive scenarios', () => {
    it('should return sum of firstNumber and secondNumber', () => {
      expect(calculator.add(2, 3)).to.be.equal(5);});
  });

  describe('add negative scenarios', () => {
    it('should throw exception if one of arguments is not a number', () => {
      expect(() => calculator.add(2, 'hello')).to.throw(Error,'You should use numbers for adding.');});
  });

  describe('add positive scenarios', () => {
    it('should return result of multiplying firtNumber to secondNumber', () => {
      expect(calculator.multiply(2, 3)).to.be.equal(6);});
  });

  describe('add negative scenarios', () => {
    it('should throw exception if one of arguments is not a number', () => {
      expect(() => calculator.multiply(2, 'hello')).to.throw(Error,'You should use numbers for multiplying');});
  });
