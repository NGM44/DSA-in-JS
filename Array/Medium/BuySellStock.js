// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4908201/solution-ngm/

// kadane algorithm

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(const num of prices){
        minPrice = Math.min(minPrice,num);
        maxProfit = Math.max(maxProfit, num - minPrice);
    }
    return maxProfit;
};

function maxProfitBruteForce(prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}