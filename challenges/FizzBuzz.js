let chooseChar = '#';
let space = ' ';

const enteredValue = prompt('Please enter the grid size', '8');
const gridSize = parseInt(enteredValue);

function printGrid(chooseChar, gridSize, sperator) {

    if(isNaN(gridSize)){
        alert('Invalid entered grid size. Please try another one');
        console.log('Invalid entered grid size. Please try another one');
        return;
    }

    let grid = '';
    let newLineCounter = 0;
    const extendedGridSize = gridSize * gridSize + (gridSize - 1);
    
    for(i = 0; i < extendedGridSize; i++) {

        if(!(i % 2))
            grid = grid + sperator; 
        else if (i % 2)
            grid = grid + chooseChar;

        ++newLineCounter; 

        if(newLineCounter === gridSize) {
            grid = grid + '\n';
            i++;                      
            newLineCounter = 0;

            //rearange chars if the grid Size is not a pair number
            if(gridSize % 2) {
                const auxValueHandler = sperator;
                sperator = chooseChar;
                chooseChar = auxValueHandler;
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

printGrid(chooseChar, gridSize, space);


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