// math.test.js
const { factorial, fibonacci } = require('./math');

describe('Función factorial', () => {
  test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Factorial de número negativo lanza error', () => {
    expect(() => factorial(-1)).toThrow('No existe factorial de números negativos');
  });
});

describe('Función fibonacci', () => {
  test('Fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('Fibonacci de 6 debe ser 8', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('Fibonacci de número negativo lanza error', () => {
    expect(() => fibonacci(-1)).toThrow('El número debe ser positivo');
  });
});