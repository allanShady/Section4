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

const numbers = buildArrayOfNumbers(1, 10, 2);
const sumOfNumber = sum(numbers);

console.log(buildMathOp(numbers, '+', sumOfNumber));
