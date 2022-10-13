
function getChangeVendingMachine(totalPrice, paidAmount){

    if(typeof(totalPrice) != 'number' || typeof(paidAmount) != 'number')
        throw new Error("Both arguments must be type of number")

    if(!isFinite(paidAmount) || !isFinite(totalPrice))
        throw new Error("Both parameters must be filled in, not inifnity and must be a number")

    if(paidAmount < totalPrice) 
        throw new Error("You have to give more money to buy product")

    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    coins.sort(function(a, b){return b-a});

    var sendCoins = [];

    let difference = paidAmount - totalPrice;

    for (const x of coins){
        let num = Math.trunc(difference / x)
        if( num >= 1)
        {
            for (let i = 0; i < num; i++) {
                sendCoins.push(x)
            }

            difference = difference % x;
        }
    }

    return sendCoins;
}

module.exports = {getChangeVendingMachine}