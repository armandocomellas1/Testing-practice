module.exports = class Calculator {
  constructor(valOne, valTwo) {
    this.a = valOne;
    this.b = valTwo;
  }
    add() {
      if(this.b >= 0 && this.a >= 0) {
        return this.a + this.b;
      } else {
        throw 'not result with cero input';
      }
    }
    substract() {
      if(this.b >= this.a) {
        return this.b - this.a;
      } else {
        throw 'B is less than a, non negative numbers';
      }
    }
    divide() {
      if(this.b > 0) {
        return this.b / this.a;
      } else {
        throw 'There is not division by cero';
      }
    }
    multiply() {
      return this.a * this.b;
    }
};
