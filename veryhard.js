/*VERY HARD: You are given coins of different denominations and 
a total amount of money amount. 
Write a function to compute the fewest number of coins that you need 
to make up that amount. If that amount of money cannot be made up 
by any combination of the coins, return -1.

Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

Example 1:

Input: coins = [1, 2, 5], amount = 11

Output: 3 

Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3

Output: -1*/


//coins different denominations
// fewest # of coins to equal total
//if coins can make up the total console the number of coins
//if not return -1
//function to find min coins takes in 2 params
function findMinimumCoins(coins, value)

{

//coinLength = coins.length

if (value <= 0){
return -1;}

let total =Number.MAX_VALUE;

for(let i = 0; i < coins.length; i++)
{

if (coins[i] <= value)

{

let sub_total = minCoins(coins, value - coins[i]);

if (sub_total != Number.MAX_VALUE && sub_total + 1 < total) {
total = sub_total + 1;}

}

}

}


console.log(total);