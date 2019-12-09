let chooseChar = '#';
let space = ' ';
let gridLenth = 3;

function printGrid(chooseChar, gridLenth, sperator) {
    let grid = '';
    let counter = 0;
    const extendedGridLength = gridLenth * gridLenth + (gridLenth - 1);
    
    for(i = 0; i < extendedGridLength; i++) {

        if(!(i % 2))
            grid = grid + sperator; 
        else if (i % 2)
            grid = grid + chooseChar;

        ++counter; 

        if(counter === gridLenth) {
            grid = grid + '\n';
            i++;                      
            counter = 0;

            //rearange chars if the grid length is not a pair number
            if(gridLenth % 2) {
                const aux = sperator;
                sperator = chooseChar;
                chooseChar = aux;
            }
        }
    }
    console.log(grid);
}

/*function exchangeValues(value1, value2) {
    const auxValueHandler = value1;
    value1 = value2;
    value2 = auxValueHandler;    
}*/

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