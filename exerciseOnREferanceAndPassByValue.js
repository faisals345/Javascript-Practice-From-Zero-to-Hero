var people = [
    { name: 'John Hill', age: 22 },
    { name: 'Jack Chill', age: 27 }
];
 
var getInitials = function( name ) {
    // Reusing the name argument makes little sense in general.
    // We are making this assignment here for demonstrating
    // the difference between value types and reference types.
    name = name.split( ' ' ).map( function( word ) {
        return word.charAt( 0 );
    } ).join( '' );
 
    console.log( name );
 
    return name;
}
 
var increaseAge = function( person ) {
    person.age += 1;
}
 
var addPerson = function( people, name, age ) {
    people.push( { name: name, age: age } );
    
}
 
// Part 1: getInitials
console.log( getInitials( people[0].name ) );     // jh
console.log( people[0].name );                    //jh
 
// Part 2: increaseAge
increaseAge( people[1] );
console.log( people[1].age );
 
// Part 3: addPerson
addPerson( people, 'Jim Gordon', 32 );
console.log( people );

/*
In the first part, the initials of a name are constructed by the getInitials function. 
The string value passed to the function is copied. 
This copy is accessed and modified inside the function.
 These modifications have nothing to do with the original value people[0].name.
The increaseAge function accepts an object. 
As objects are reference types, only the reference to the passed person is copied. 
When members of the referenced object are changed, the changes are kept even after executing the function. 
These changes are accessible via each reference.
Arrays are also reference types. Adding an element to an array is a permanent change.


*/