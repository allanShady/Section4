function repeat(n, action) { 
    for (i = 0; i < n; i++) { 
        action(i); 
    }
}

function unless(test, then) { 
    if (!test) then(); 
}

function reduce(array, combination, start) {
    let current = start;

    for (const element of array) {
        current = combination(current, element);
    }
    return current;
}

//Compositions
function average(array) {
    return reduce((a, b) => a + b) / array.length;
}

//Strings and character codes
const roseDragon = "🌹🐉";
for (const char of roseDragon) {
    console.log(char, `char code`, roseDragon.codePointAt(0) );
}

function countBy(items, groupName) {
    let counts = [];

    for (const item of items) {
        const name = groupName(item);
        const  known = counts.findIndex(c => c.name == name);

        if(known == -1)
            counts.push({name, count: 1 });
        else
            counts[known].count++;
    }

    return  counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

console.log(reduce([1, 2, 3, 4], (x, y) => x + y, 0));

console.log(`Repeat console.log`)
repeat(5, console.log);
console.log('Call: repeat(3, i => { console.log(isNaN(i), i) })');
repeat(3, i => { console.log(isNaN(i), i) });
console.log(`Call: repeat(3, n => { unless(n % 2 == 1, () => { console.log(n, 'is even'); }); })`);
repeat(3, n => { unless(n % 2 == 1, () => { console.log(n, 'is even'); }); });
