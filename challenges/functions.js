const min = (value1, value2) => value1 > value2 ? value2 : value1;

const isEven = (number) => {
    if(number < 0) return;    
    if(number === 1) return true;         
    if (number === 0) return false;

    return isEven(number - 2);
}

//Is even
console.log(`is even? [${isEven(7)}]`);
//Determine min value
console.log(`The min value is: ${min(1,5)}`);