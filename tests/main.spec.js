const expect = require('chai').expect;
const calc = require('../src/main');

describe('Calc', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sum`', () => {
      expect(calc).to.have.property('sum');
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(calc).to.have.property('sub');
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(calc).to.have.property('mult');
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(calc).to.have.property('div');
      expect(calc.sum).to.be.a('function');
    });
  });
});
