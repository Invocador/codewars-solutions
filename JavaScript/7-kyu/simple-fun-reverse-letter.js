/*
 Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string
*/


const reverseLetter = str => Array.from(str).reverse().filter(l => (/[a-zA-Z]/).test(l)).join('');