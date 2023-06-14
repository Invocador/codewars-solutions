/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/



const multipleOfIndex = a => {

  const r = [];

  let i = 0
  ,   size = a.length;

  for(i; i < size; i++) {
    let n = a[i];
    if(n === 0) r.push(0);
    else if(n % i === 0) r.push(n);
  };

  return r;

};

// JavaScript Methods Alternative

const multiple = arr => arr.filter((element, index) => element % index === 0 || element === 0);