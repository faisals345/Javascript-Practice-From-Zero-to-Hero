console.log('before');
console.log('after');
// synchronous or blocking

//now lets learn about asyncronous 
console.log('before');
setTimeout(()=>{
    console.log('Reading user from a database');
},2000)
console.log('after');
//----->o/p  before
//           after
//           reading ......
// Its non blocking in nature 

