console.log('before');
 const user=getUser(1);
 console.log(user);

console.log('after');

function getUser(id){
    setTimeout(()=>{
        console.log("reading database");
        return {id:id,gitUserName:'mosh'};
    },2000);
}

// in the console we are getting undefined for user object because this 
// is not the way async function return object 
// there are basically 3 methods
//1> callbacks,2>promises,3>async await