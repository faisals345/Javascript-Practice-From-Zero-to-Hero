//shopTransaction for chewing gum  
var shopTransaction = {
    items: [ { name: 'Astro Mint Chewing Gum' } ],   
    price: 1,
    amountPaid: 1000
}
 
var cashier = {
    units:    [500, 200, 100, 50, 20, 10, 5, 2, 1],
    quantity: [0, 0, 5, 4, 5, 10, 10, 20, 9]
}
 
function canChange( shopTransaction, cashier ) 
{    //amount that has to be paid 
    var amount = shopTransaction.amountPaid - shopTransaction.price;
  //checking if the amount can be paid after using 
  //every quantity of a unit  
  for( var i = 0; i < cashier.units.length; ++i ) 
    {
        var unit = cashier.units[i];
        while ( amount >= unit && cashier.quantity[i] > 0 ) 
        {
            amount -= unit;
            cashier.quantity[i] -= 1;
        }
    }
 
    return amount == 0;
}
 
console.log( canChange( shopTransaction, cashier ) );
console.log( cashier.quantity );