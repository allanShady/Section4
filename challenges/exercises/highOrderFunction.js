const flatteningBtn = document.querySelector('#flattening');
const ownloopBtn = document.querySelector('#ownloop');

const flattenArray = array => {
    return array.reduce((b, c) => b.concat(c));
}

function flatten() {
    hideHint('#flatteninghint');
    console.log(flattenArray([[1, 2, 3,], [4, 5, 6], [7, 8, 9, 90, 89, 'l']]));
}

function hideHint(selector) {
    document.querySelector(selector).style.visibility = 'hidden';
}

const loopfunc = (value, test, update, body) => {
    
    let currentValue;

    for (i = 0; i < value.length; i++) {
        if(!test(value[i])) {
            currentValue = value[i];
            break;
        }
    }
    
    body(currentValue);
    update(currentValue);

    hideHint('#ownloophint');
}

flatteningBtn.addEventListener('click', flatten);
ownloopBtn.addEventListener('click', loopfunc);