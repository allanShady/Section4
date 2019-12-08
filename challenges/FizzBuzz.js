let chooseChar = '#';
let space = ' ';
let gridLenth = 8;

function printGrid(chooseChar, gridLenth, sperator) {
    let line = '';
    let counter = 0;
    const extendedGridLength = gridLenth * gridLenth + (gridLenth - 1);
    
    for(i = 0; i < extendedGridLength; i++) {
        if(!(i % 2)) {
            line = line + sperator; 
        }
        else if (i % 2) {
            line = line + chooseChar; 
        }

        ++counter;        

        if(counter === gridLenth) {
            line = line + '\n';
            i++;
            counter = 0;
        }

    }

    console.log(line);
}

printGrid(chooseChar, gridLenth, space);


function printNumbersFizzBuzz() {
    for (i = 1; i <= 100; i++) { 
        if (!(i % 5) && !(i % 3))
            console.log('FizzBuzz'); 
        else if (!(i % 5) && (i % 3)) 
            console.log('Buzz'); 
        else if(!(i % 3)) 
            console.log('Fizz');
        else console.log(i);
    }
}