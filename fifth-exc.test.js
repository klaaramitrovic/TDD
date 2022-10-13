const axios = require('axios');
jest.mock('axios')
const mockFunction = require('./fifth-exc')


describe('Mocking', () => {
    test('basic functionality', async() => {
        const response = {
            "data": {
                "country": [
                    {
                        "country_id": "GH",
                        "probability": 0.224
                    },
                    {
                        "country_id": "PH",
                        "probability": 0.084
                    },
                    {
                        "country_id": "NG",
                        "probability": 0.073
                    },
                    {
                        "country_id": "US",
                        "probability": 0.061
                    },
                    {
                        "country_id": "NE",
                        "probability": 0.034
                    }
                ],
                "name": "nathaniel"
            }
        }

        axios.get.mockResolvedValueOnce(response); 
        const result = await mockFunction.mockFunction();
        expect(axios.get).toHaveBeenCalledWith('https://api.nationalize.io/?name=nathaniel');  
        expect(result).toEqual(response.data.country);
        expect(mockFunction.addInArray([{
            "country_id": "SRB",
            "probability": 0.0656
        },
        {
            "country_id": "TR",
            "probability": 0.032
        }], result, 1)).toEqual(expect.arrayContaining(result));

        expect(mockFunction.removeFromArray([
            { country_id: 'SRB', probability: 0.0656 },
            { country_id: 'NE', probability: 0.034 },
            { country_id: 'US', probability: 0.061 },
            { country_id: 'NG', probability: 0.073 },
            { country_id: 'PH', probability: 0.084 },
            { country_id: 'GH', probability: 0.224 },
            { country_id: 'TR', probability: 0.032 }
          ], 
          result)).toEqual(expect.not.arrayContaining(result));
    });   
})
