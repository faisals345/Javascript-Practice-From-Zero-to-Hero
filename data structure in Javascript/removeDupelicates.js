function removeDupes(str) {
    const characters = {};
    const uniqueCharacters = [];
    
    for(let i = 0; i < str.length; i++) {
        const thisChar = str[i];

        if(characters[thisChar]===undefined) {
            characters[thisChar] = true;
            uniqueCharacters.push(thisChar);
        }
    }
    
    return uniqueCharacters.join('');
}

// console.log(removeDupes("abhvfsdvcxaa"));

//better approach using set 

function removedup2(str){
    const arr = new Set(str);
    let ans = Array.from(arr).join('');
    console.log(ans);
}

removedup2("aaabbd");