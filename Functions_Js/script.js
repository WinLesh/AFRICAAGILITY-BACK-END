// CREATE A FUNCTION THAT IS ABLE TO SOLVE COMPUTATION
/**
 * i am experimenting with comments in this file nad computation function
 * Function to calculate  profit based on the buying and selling prices
 * @param {number} totalBuyingPrice - The total buyiong price
 * @param {number} totalSellingPrice - The total selliong price
 * @param {number}	-The profit
 */
function profit(totalBuyingPrice, totalSellingPrice,) {
	// Calculate profit 
	const profitAmount = totalSellingPrice - totalBuyingPrice;
	return profitAmount;
}

// Example usage example

const buyingPrice = 700;
const sellingPrice = 1000;
console.log("Profit:", profit(buyingPrice, sellingPrice)); //Output will be Profit of 300