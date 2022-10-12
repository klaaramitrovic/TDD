function subCalculator(a, b) {
    checkCalcParameters(a, b)
    return a - b;
  }

function multiplicationCalculator(a, b) {
    checkCalcParameters(a, b)
    return a * b;
}

function divideCalculator(a, b) {
    checkCalcParameters(a, b)
    if(b === 0)
        throw new Error ('You cannot divide by 0')
    return a / b;
}

function addCalculator(...args) {
    if(args == undefined || args == null || args.length == 0)
        throw new Error('You have to give function parameters')
    args.forEach(x => checkCalcParameter(x))
    return args.reduce((prevValue, currValue) => prevValue + currValue)
}

function checkCalcParameters(a, b){
    if(typeof(a) == 'string' | typeof(b) == 'string')
        throw new Error('You cannot send string data parameters')
    
    if(a === null | b === null)
        throw new Error('Parameters cannot be null')

    if(a === undefined | b === undefined)
        throw new Error('Parameters cannot be undefined')

    if(isNaN(a) | isNaN(b))
        throw new Error('Parameters must not be NaN')
    
    if(!isFinite(a) | !isFinite(b))
        throw new Error('Parameters must not be infinity')

    if(typeof(a) != 'number' | typeof(b) != 'number')
        throw new Error('Parameters must be type of numbers')
    
}

function checkCalcParameter(a){
    if(typeof(a) == 'string')
        throw new Error('You cannot send string data parameter')
    
    if(a === null)
        throw new Error('Parameter cannot be null')

    if(a === undefined)
        throw new Error('Parameter cannot be undefined')

    if(isNaN(a))
        throw new Error('Parameter must not be NaN')
    
    if(!isFinite(a))
        throw new Error('Parameter must not be infinity')

    if(typeof(a) != 'number')
        throw new Error('Parameter must be type of number')
    
}
  
module.exports = {subCalculator, multiplicationCalculator, divideCalculator, addCalculator};