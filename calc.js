/**
 * @param {string} s
 * @return {number}
 */

console.clear();

const numeral = 'MMMDCCXXIV';

const romanToInt = (str) => {
   
  const values = {
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900,
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  } 

  return Object.entries(values).reduce(({str, sum}, [key, value]) => {
    while(str.includes(key)){
      sum = sum + value;
      str = str.replace(key, '');    
    }
    return {str, sum}}, {str, sum: 0})
}
 

const kek = romanToInt(numeral);
console.log(kek)
 //console.log(romanToInt('MMMDCCXXIV'))

// const isBadVersion = (num) => {
//   if(num > 3) {return true}
//   return false
// }

// const kek = (isBadVersion, n) => [...Array(n+1).keys()].filter(ver => (!isBadVersion(ver))).pop() + 1;


// const badVersion = kek(isBadVersion, 7)
// console.log(badVersion)