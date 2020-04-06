/*
  Say you have an array for which the ith element is the price of a given stock on day i.
  Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
  Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/
/**
 * @param {number[]} prices
 * @return {number}
 */

//buy = value
//sell = value
// transaction 1 = sell - buy
// max profit = largest transation value
const prices = [7,1,5,3,6,4]
// output 7;
/* 
  1) iterate
*/
var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 0 ; i < prices.length; i ++) {
    let k = i+1;
    if (prices[k] > prices[i]) {
      maxProfit += prices[k] - prices[i]
    }
  
  }
  return maxProfit;
};
maxProfit(prices) //?