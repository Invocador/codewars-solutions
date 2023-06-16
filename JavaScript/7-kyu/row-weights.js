/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
*/

// Solved using For Loop

const rowWeights = ppl => {

  let i = 0
  ,   size = ppl.length
  ,   first = 0
  ,   second = 0;


  for(i; i < size; i++) {
    let m = i % 2 === 0
    ,   w = ppl[i];

    if(m) first+=w;
    else  second +=w;
  };

  return [first, second];

};