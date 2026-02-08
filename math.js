// math.js para calcular el factorial de un número (ej: 5! = 120)
function factorial(n) {
    if (n < 0) {
        throw new Error("No existe factorial de números negativos");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Función para calcular el n-ésimo número en la serie de Fibonacci (ej: fib(6) = 8)
function fibonacci(n) {
    if (n < 0) {
        throw new Error("El número debe ser positivo");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    factorial,
    fibonacci
};