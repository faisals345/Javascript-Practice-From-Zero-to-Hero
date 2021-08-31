//how to use callbacks
console.log('before');
getUser(1,user=>{
    console.log('user',user);

    //get the repositories
    getRepositories(user.gitUserName,repos=>{
        console.log('repos',repos);
    })
});
 

console.log('after');

function getUser(id,callback){
    setTimeout(()=>{
        console.log("reading database");
        callback({id:id,gitUserName:'mosh'});
        
    },2000);
}

function getRepositories(userName,callback){

    setTimeout(()=>{
        console.log("reading database");
        callback(['repo1','repo2']);
        
    },2000);


    
}

