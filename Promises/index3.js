//how to use callbacks
console.log('before');
getUser(1,user=>{
    console.log('user',user);
});
 

console.log('after');

function getUser(id,callback){
    setTimeout(()=>{
        console.log("reading database");
        callback({id:id,gitUserName:'mosh'});
        
    },2000);
}

// This is how the callbacks looks like
//  we can use arrow function in line 3

// getUser(1,user=>console.log(user));