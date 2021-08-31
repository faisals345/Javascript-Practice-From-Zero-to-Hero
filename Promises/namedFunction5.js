// to get rid of call back hell
//to replace anonymous with named function

//how to use callbacks
console.log('before');

getUser(1,displayUser);
 

console.log('after');

function displayUser(user){
    getRepositories(user.gitUserName,displayRepos);
}

function displayRepos(repos){
    console.log(repos);
}

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

