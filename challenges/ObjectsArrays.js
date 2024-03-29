const buildArrayOfNumbers = (start, end, step) => {
    let result = [];

    if(isNullOrUndefined(step)) step = 1;

    for(element = start; continueBuilding(element, end, step); element += step)
        result.push(element);

    return result;
}

function continueBuilding(element, end, step) {
    if(step > 0) return element <= end; else return element >= end;
}

 const sum = numbers => {
    let sum = 0;

    if(isNullOrUndefined(numbers)) return;

    for (const element of numbers)
        sum += element;

    return sum;
}

function isNullOrUndefined(object) {
    return  (object === null || object === undefined) ? true : false;
}

function buildMathOp(operands, operator, result) { 

    if(isNullOrUndefined(operands)) return;
    return `${operands.toString().split(',').join(` ${operator.trim()} `)} = ${result}`;
}

const reverseArray = array => array.reverse();
const reverseArrayInPlace = array => { console.log(`resevrsed Array: ${array.reverse()}`); };

const arrayToList = numbers => {
    let listItem = null;
   
    numbers.reverse();

    for (let i = 0; i < numbers.length; i++) {
        listItem = {
            value: numbers[i],
            rest: listItem
        };     
    }
    return listItem;
}

const listToArray = list => {
    let array = [];

    if (list) 
        do
            array.push(list.value);
        while(list = list.rest);

    return array;
}

const prepand = (list, element) => {
    
    if(isNullOrUndefined(list))
        return element;

    getLastElement(list).rest = element;
    return list;
}

const getLastElement = list => {
    
    if(!list.rest)
        return list;

    return getLastElement(list.rest);
}

function nth(list, position) {
    
    position = Math.abs(position);

    if(position === 0 && !isNullOrUndefined(list))
        return {value: list.value, rest: null}
        
    //When the position is not given or not found element;
    if(isNullOrUndefined(list))
        return undefined;

    return nth(list.rest, position - 1);
}

function deepEqual(value1, value2) {
    let isEqual = false;

    if(typeof value1 === 'object' && typeof value2 === 'object') {
        
        let loopObj;
        let compObj

        if(Object.keys(value1).length > Object.keys(value2).length) {
            loopObj = value1;   compObj = value2;
        }
        else {
            loopObj = value2;   compObj = value1; 
        }
        for (const key in loopObj)
            if (loopObj.hasOwnProperty(key))
                if(!(loopObj[key] === compObj[key]))
                    return isEqual;
        
        isEqual = true;
    }
    else
        isEqual = (value1 === value2)

    return isEqual;
}


const numbers = buildArrayOfNumbers(1, 10, 2);
const sumOfNumber = sum(numbers);
const listFromArray = arrayToList(numbers);
const arrayFromList = listToArray(listFromArray);

console.log(`Added 10`);
//console.log(prepand(null, {value: 10, rest: null}));
console.log(listFromArray);
console.log(`The element into position ${2} is`, nth(listFromArray, 5));
//console.log(buildMathOp(numbers, '+', sumOfNumber));
//console.log(`List:`, arrayToList(numbers));
//console.log(listFromArray);
//console.log(arrayFromList);
//console.log(`Numbers ${numbers} Reversed numbers: ${reverseArray(numbers)}`);
//reverseArrayInPlace(numbers);