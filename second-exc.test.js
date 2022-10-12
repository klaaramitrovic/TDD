const calculator = require("./second-exc");

describe('Subtracting two numbers', () => {
    test('Basic functionality', () => {
       expect(calculator.subCalculator(2, 3)).toBe(-1);
    });

    test('String parameters', () => {
        expect(() => {
            calculator.subCalculator("2", 3)}
        ).toThrow('You cannot send string data parameters');
     });

    test('Null parameters', () => {
        expect(() => {
            calculator.subCalculator(null, 3)}
        ).toThrow('Parameters cannot be null');
    });

    test('Undefined parameters', () => {
        expect(() => {
            calculator.subCalculator(undefined, 3)}
        ).toThrow('Parameters cannot be undefined');
    });

    test('Parameters are not numbers', () => {
        expect(() => {
            calculator.subCalculator(true, 3)}
        ).toThrow('Parameters must be type of numbers');
    });

    test('Parameters are NaN', () => {
        expect(() => {
            calculator.subCalculator(NaN, 3)}
        ).toThrow('Parameters must not be NaN');
    });

    test('Parameters are infinity', () => {
        expect(() => {
            calculator.subCalculator(5/0, 3)}
        ).toThrow('Parameters must not be infinity');
    });

    test('Arguments are not passed', () => {
        expect(() => {calculator.subCalculator()}).toThrow('Parameters cannot be undefined');
    });
});

describe('Multiplication two numbers', () => {
    test('Basic functionality', () => {
       expect(calculator.multiplicationCalculator(2, 3)).toBe(6);
    });

    test('String parameters', () => {
        expect(() => {
            calculator.multiplicationCalculator("2", 3)}
        ).toThrow('You cannot send string data parameters');
     });

    test('Null parameters', () => {
        expect(() => {
            calculator.multiplicationCalculator(null, 3)}
        ).toThrow('Parameters cannot be null');
    });

    test('Undefined parameters', () => {
        expect(() => {
            calculator.multiplicationCalculator(undefined, 3)}
        ).toThrow('Parameters cannot be undefined');
    });

    test('Parameters are not numbers', () => {
        expect(() => {
            calculator.multiplicationCalculator(true, 3)}
        ).toThrow('Parameters must be type of numbers');
    });

    test('Parameters are NaN', () => {
        expect(() => {
            calculator.multiplicationCalculator(NaN, 3)}
        ).toThrow('Parameters must not be NaN');
    });

    test('Parameters are infinity', () => {
        expect(() => {
            calculator.multiplicationCalculator(5/0, 3)}
        ).toThrow('Parameters must not be infinity');
    });

    test('Arguments are not passed', () => {
        expect(() => {calculator.multiplicationCalculator()}).toThrow('Parameters cannot be undefined');
    });
});

describe('Dividing two numbers', () => {
    test('Basic functionality', () => {
       expect(calculator.divideCalculator(6, 3)).toBe(2);
    });

    test('Divide by 0', () => {
        expect(() => {
            calculator.divideCalculator(5, 0)}
        ).toThrow('You cannot divide by 0');
    });

    test('String parameters', () => {
        expect(() => {
            calculator.divideCalculator("2", 3)}
        ).toThrow('You cannot send string data parameters');
     });

    test('Null parameters', () => {
        expect(() => {
            calculator.divideCalculator(null, 3)}
        ).toThrow('Parameters cannot be null');
    });

    test('Undefined parameters', () => {
        expect(() => {
            calculator.divideCalculator(undefined, 3)}
        ).toThrow('Parameters cannot be undefined');
    });

    test('Parameters are not numbers', () => {
        expect(() => {
            calculator.divideCalculator(true, 3)}
        ).toThrow('Parameters must be type of numbers');
    });

    test('Parameters are NaN', () => {
        expect(() => {
            calculator.divideCalculator(NaN, 3)}
        ).toThrow('Parameters must not be NaN');
    });

    test('Parameters are infinity', () => {
        expect(() => {
            calculator.divideCalculator(5/0, 3)}
        ).toThrow('Parameters must not be infinity');
    });

    test('Arguments are not passed', () => {
        expect(() => {calculator.divideCalculator()}).toThrow('Parameters cannot be undefined');
    });
});


describe('Adding few numbers', () => {
    test('Arguments are not passed', () => {
        expect(() => {calculator.addCalculator()}).toThrow('You have to give function parameters');
    });

    test('Basic functionality', () => {
       expect(calculator.addCalculator(6, 3, 2)).toBe(11);
    });

    test('String parameters', () => {
        expect(() => {
            calculator.addCalculator("2", 3, "4")}
        ).toThrow('You cannot send string data parameter');
     });

    test('Null parameters', () => {
        expect(() => {
            calculator.addCalculator(null, 3)}
        ).toThrow('Parameter cannot be null');
    });

    test('Undefined parameters', () => {
        expect(() => {
            calculator.addCalculator(undefined, 3)}
        ).toThrow('Parameter cannot be undefined');
    });

    test('Parameters are not numbers', () => {
        expect(() => {
            calculator.addCalculator(true, 3)}
        ).toThrow('Parameter must be type of number');
    });

    test('Parameters are NaN', () => {
        expect(() => {
            calculator.addCalculator(NaN, 3)}
        ).toThrow('Parameter must not be NaN');
    });

    test('Parameters are infinity', () => {
        expect(() => {
            calculator.addCalculator(5/0, 3)}
        ).toThrow('Parameter must not be infinity');
    });
});