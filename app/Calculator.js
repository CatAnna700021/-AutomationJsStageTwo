/**
 *
 *
 * @class Calculator
 */
 class Calculator {
    /**
       *@param {number} firstNumber
       *@param {number} secondNumber
       @return {number} result of sum of firstNumber and secondNumber
       * @memberof Calculator
       */
  
    constructor() {}
  
      add(firstNumber, secondNumber) {
        if (firstNumber + secondNumber) {
          return (firstNumber + secondNumber);
        }
      }
  
      /**
       * {number} firstNumber
       * {number} secondNumber
       * @return {number} result of multiplying first and secondNumber
       * @memberof Calculator
       */
      multiply(firstNumber, secondNumber) {
        if (firstNumber * secondNumber) {
          return (firstNumber * secondNumber);
        }
      }
  }
  
  
  module.exports = Calculator;
