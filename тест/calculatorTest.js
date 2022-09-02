const Calculator = require('../pageObject/calculator');
const { expect } = require('chai');

describe('add positive scenarios', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`should return sum of firstNumber and secondNumber`, () => {
    expect(calculator.add(2, 3)).to.be.equal(5);
  });
});