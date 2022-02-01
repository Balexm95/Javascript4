/*EASY: Write a function that takes in an array of numbers
// and outputs the average of all the numbers. 

Example 1:

Input: [1 , 4 , 7]  Output: 4

Input: [10, 5]  Output: 7.5

Input: [1.5, 3, 2.5, 1]  Output: 2*/

//function to find average
//function take in parameters array for the array and nums for the number of numbers in the array
const avgNumber = (array,nums) => {
    //sum is set equal to 0  so that number in the array can be added together
    let sum = 0;
    for (var i = 0; i < nums; i++) sum += array[i]; {
        //returns average sum divded by the number of numbers in the array
        return (sum / nums);
}

}
const array = [3,6,12,9,40];
const nums = array.length;

console.log(avgNumber(array, nums));

