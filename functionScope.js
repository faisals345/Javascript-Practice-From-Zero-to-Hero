let a = 5;

function addOne( a ) {
    a = a + 1;
    return a;
}
 
console.log( addOne( a ))  
console.log(a)

// The a variable inside the function is 
// valid inside the scope of the function. 
// It shadows the variable a outside the function. 
// Therefore, adding one to the internal a variable does not
//  have any effect on the external value. Therefore, changes in the
//   value of a inside the function do not change the value of the variable a outside the function.