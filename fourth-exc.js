function analyzeArray(...array){

    if(array.length == 0)
        throw new Error('Array must not be empty')

    array.forEach(x => {
        if(typeof(x) == 'string')
            throw new Error('Element must not be string value')
        
        if(x === undefined)
            throw new Error('Element must not me undefined')

        if(isNaN(x))
            throw new Error('Element must not be NaN')
        
        if(x === null)
            throw new Error('Element must not be null')
    })

    let size = array.length;

    let avg = 0;

    let maxValue;

    let minValue;

    array.reduce((prevValue, curr)=>{

        if(maxValue === undefined || curr > maxValue) 
            maxValue = curr;

        if(minValue === undefined || curr < minValue) 
            minValue = curr;

        avg += curr;

    }, 0);

    avg = Number((avg / size).toFixed(2));

    return JSON.stringify({size: size, averageValue: avg, maxValue: maxValue, minValue: minValue});
}

module.exports = { analyzeArray }