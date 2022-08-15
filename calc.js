//const numeral = 'MMMDCCXXIV';
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