//promise hold the result of eventful operation
const p = new Promise((resolve,reject)=>{

    //kick off something asynchronous
    //either resolve or rejected
    setTimeout(()=>{
        // resolve(1); 
        reject(new Error('message'));
    },2000);
   //sending this to consumer of this promise


    // reject(new Error('message'));
});

p.then(result=>console.log('Result',result))
.catch(err=>console.log('error',err.message));