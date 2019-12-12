const buildArrayOfNumbers = (start, end) => {
    let result = [];

    if(start > end) return;

    for(element = start; element <= end; element++) {
        result.push(element);
    }

    return result;
}

 const sum = numbers => {
    let sum = 0;

    if(isNullOrUndefined(numbers)) return;

    for (const element of numbers) {
        sum += element;
    }

    return sum;
}

function isNullOrUndefined(object) {
    return  (object === null || object === undefined) ? true : false;
}

function buildMathOp(operands, operator, result) { 

    if(isNullOrUndefined(operands)) return;
    return `${operands.toString().split(',').join(` ${operator.trim()} `)} = ${result}`;
}

const numbers = buildArrayOfNumbers(11, 10);
const sumOfNumber = sum(numbers);

console.log(buildMathOp(numbers, '+', sumOfNumber));
