// var people = [
//     { name: {first:"faisal",last:'salman'}, age: 22 },
//     { name: 'Jack Chill', age: 27 }
// ];

// function replacePerson( person, name, last,age ) {
//     person.name = { first: name, last: last };
//     person.age=age;
// }
 
// replacePerson( people[1], 'Jack','Newton',25 );
// console.log( people );

var people = [
    { name: 'John Hill', age: 22 },
    { name: 'Jack Chill', age: 27 }
];

function replacePerson( person, name, age ) {
    person.age=age;
    person.name=name;
}
 
replacePerson( people[1], 'Jack Newtown', 35 );
console.log( people );