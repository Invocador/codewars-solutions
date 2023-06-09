/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/


const expandedForm = n => {

  const result = [];

  let num = n.toString().split('')
  ,   size = num.length;


  for(let i = 0; i < size; i++) {
     let number = num[i]
     ,   exp = size - i;

    if(num[i] !== '0') {
      result.push(number.padEnd(exp, '0'));
    }
  };

 return result.join(' + ');
};