const machine = require('./six-exc')

describe('Vending machine', () => {
    test('Basic functionality', () => {
        expect(machine.getChangeVendingMachine(202, 400)).toEqual(expect.arrayContaining([100, 50, 20, 20, 5, 2, 1]));
    });

     test('Parameter is typeof string', () => {
        expect(() => {machine.getChangeVendingMachine("202", 400)}).toThrow("Both arguments must be type of number")
    });

    test('Parameter is null', () => {
        expect(() => {machine.getChangeVendingMachine(null, 400)}).toThrow("Both arguments must be type of number")
    });

    test('Parameter is undefined', () => {
        expect(() => {machine.getChangeVendingMachine(undefined, 400)}).toThrow("Both arguments must be type of number")
    });

    test('Parameter is infinity', () => {
        expect(() => {machine.getChangeVendingMachine(Infinity, 400)}).toThrow("Both parameters must be filled in, not inifnity and must be a number")
    });

    test('Paid amount is not enough', () => {
        expect(() => {machine.getChangeVendingMachine(200, 100)}).toThrow("You have to give more money to buy product")
    });
})