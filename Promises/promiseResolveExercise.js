//how to use callbacks
console.log('before');

const p = getUser(1);
p.then(user=>getRepositories(user.gitUserName))
.then(repos=>console.log(repos)).catch(err=>console.log(err.message));


console.log('after');

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('reading user database');
            resolve({id:id,gitUserName:'salman'});
        },2000);
    });
}

function getRepositories(userName,callback){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('reading user repos');
            resolve(['repos1','repo2','repo3']);
        },2000);
    });

    
}

