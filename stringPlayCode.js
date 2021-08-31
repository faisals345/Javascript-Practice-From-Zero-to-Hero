let digits="5676786";
console.log(digits);

let tru = digits.replace(/6/g,'4');  // global replacement g used here and in between forward slash
console.log(tru);
console.log(digits.split('6'));
console.log(digits.split('6').join('9'));