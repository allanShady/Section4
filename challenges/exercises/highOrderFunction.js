const flatteningBtn = document.querySelector('#flattening');

const flattenArray = array => {
    return array.reduce((b, c) => b.concat(c));
}

function flatten() {
    
    document.querySelector('.show').style.visibility = 'hidden';
    console.log(flattenArray([[1, 2, 3,], [4, 5, 6], [7, 8, 9, 90, 89, 'l']]));
}

flatteningBtn.addEventListener('click', flatten);