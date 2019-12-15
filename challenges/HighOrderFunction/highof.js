function repeat(n, action) { 
    for (i = 0; i < n; i++) { 
        action(i); 
    }
}

repeat(5, console.log);
repeat(3, i => { console.log(isNaN(i), i) });
