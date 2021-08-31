//
//following are the things of javascript I learned today
//1> like var , function declartion are also hoisted that means they can be
//called | invoked before its declartions

//2>function declation vs function expression
//2> when passing strings as an argument , it must be in quotes
//3> also learnt about string templates with help of back ticks ``

//4> when returning an object it must be in parenthesis ({name,lastname});
// explicit return is compulsory for function declaration and expression both







function printName(firstName,lastName){
    console.log(typeof(lastName));      //function declaration in Javascript
     `${firstName}`;
}

console.log(printName("faisal","salman"));

// function declaration and returning an object

//if we use curly braces, then we need an explicit "return"

function printNameObj(firstName,lastName){
        
    return {firstName,lastName};
}

console.log(printNameObj("faisal","salman"));

let nameObj = printNameObj("faisal",2.005);
console.log(nameObj.lastName);