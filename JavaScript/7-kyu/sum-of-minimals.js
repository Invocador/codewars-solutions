/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/


const sumOfMinimums = arr => {
  let sum = 0;
  arr.forEach((n, i) => {
  let min = Math.min(...arr[i]);
      sum += min;
  });
  return sum;
};


// Using For loop
/*
const sumOfMinimums = arr => {

  let size = arr.length
  ,   sum = 0;

  for(let i = 0; i < size; i++) {
    let num = Math.min(...arr[i]);
    sum+=num;
  };

  return sum;
}
*/