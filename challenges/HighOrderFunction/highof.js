function repeat(n, action) { 
    for (i = 0; i < n; i++) { 
        action(i); 
    }
}

function unless(test, then) { 
    if (!test) then(); 
}

console.log(`Repeat console.log`)
repeat(5, console.log);
console.log('Call: repeat(3, i => { console.log(isNaN(i), i) })');
repeat(3, i => { console.log(isNaN(i), i) });
console.log(`Call: repeat(3, n => { unless(n % 2 == 1, () => { console.log(n, 'is even'); }); })`);
repeat(3, n => { unless(n % 2 == 1, () => { console.log(n, 'is even'); }); });
