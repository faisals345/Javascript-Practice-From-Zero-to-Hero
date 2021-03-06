// recusrive approach to this problem in javascript

function flatten(nestedArray) {
    const newArray = [];
  
    for(let i = 0; i < nestedArray.length; i++) {
        const thisItem = nestedArray[i];
      
         if(Array.isArray(thisItem)) {
             const flatItem = flatten(thisItem);
           
             for(let j = 0; j < flatItem.length; j++) {
                 newArray.push(flatItem[j]);
             }
         } else {
             newArray.push(thisItem);
         }
    }
    
    return newArray;
}