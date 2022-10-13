const axios = require('axios');

async function mockFunction(){
    let response = await axios.get('https://api.nationalize.io/?name=nathaniel');
    
    return response.data.country;
}

function addInArray(existingArray, newArray, index){
    if((index !== undefined || index !== null) && (!isNaN(index))){
        if(index >= existingArray.length)
            throw new Error('Index is greater then an array length')
        else if (index < 0)
            throw new Error('Index is less then an array length')
    }

    if(typeof(index) != 'number')
        throw new Error('Index must be type of number')
    
    newArray.forEach(x => {
        existingArray.splice(index, 0, x)
    });

    return existingArray;
}

function removeFromArray(existingArray, newArray){
    
    let elementsToDelete = []

    let index = -1

    newArray.forEach((x) => {
        for (let index = 0; index < existingArray.length; index++) {
            const element = existingArray[index];
            if(JSON.stringify(x) === JSON.stringify(element))
            {
                existingArray.splice(index, 1)
            }
        }
        
    })

    return existingArray;
}


module.exports = { mockFunction, addInArray, removeFromArray }