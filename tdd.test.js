test('Jest is working', () => {
    expect(1).toBe(1);
 });

 describe('First group of tests', () => {
    test('Jest is working', () => {
       expect(1).toBe(1);
    });
 });
 
 describe('Second group of tests', () => {
    test('Second test is working also', () => {
       expect(1).toBe(1);
    });
 });

 const addCalculator = require("./calculator");

 test("addition of 2 and 3 to equal 5", () => {
  expect(addCalculator(2, 3)).toBe(5);
});