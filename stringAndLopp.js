let digits = '0123456789';
let sum1 = "";
for ( let i = 0; i < digits.length; ++i ) {
    sum1 += digits[i];
}

let sum2 = "";
for ( let i in digits ) {
    sum2 += digits[i];
}

let sum3 = "";
for ( let digit of digits ) {
    sum3 += digit;
}

console.log(sum1);
console.log(sum2);
console.log(sum3);