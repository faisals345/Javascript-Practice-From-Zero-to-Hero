let fruit={
    color:"red",
    size:"3",
    weight:"120"
}


for(const prop of Object.entries(fruit)){
    const val = fruit[prop];
    console.log(prop,val);
}