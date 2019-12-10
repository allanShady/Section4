const min = (value1, value2) => value1 > value2 ? value2 : value1;

const isEven = (number) => {
    if(number < 0) return;    
    if(number === 1) return true;         
    if (number === 0) return false;

    return isEven(number - 2);
}

const countBS = (text) => {   
    return countChar(text, 'B');
}

const countChar = (text, charToCount) => {
    let charOcurrence = 0;

    for(i = 0; i < text.length; i++) {
        if(text[i] === charToCount)
            charOcurrence++;
    }
    
    return charOcurrence;
}

const str = 'Best fied for ever bff BBB'
console.log(`The char B apper in ${str} ${countBS(str)}`);
//Is even
console.log(`is even? [${isEven(7)}]`);
//Determine min value
console.log(`The min value is: ${min(1,5)}`);