const arrayFunctions = require('./fourth-exc')

describe('Analyze an array', () => {
    test('One argument is string', () => {
        expect(() => {arrayFunctions.analyzeArray(1, 2, "3", "4")}).toThrow('Element must not be string value');
    });

    test('One argument is undefined', () => {
        expect(() => {arrayFunctions.analyzeArray(1, 2, undefined, 5)}).toThrow('Element must not me undefined');
    });

    test('Array is null', () => {
        expect(() => {arrayFunctions.analyzeArray(null)}).toThrow('Element must not be null');
    });

    test('Parameter does not exist', () => {
        expect(() => {arrayFunctions.analyzeArray()}).toThrow('Array must not be empty');
    });

    test("Basic functionality", ()=>{
        expect(arrayFunctions.analyzeArray(1,2,3,4,5)).toEqual(JSON.stringify({size: 5, averageValue: 3, maxValue: 5, minValue: 1}))
    });
})