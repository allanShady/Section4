const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MOSTER_DEMAGE_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

let enteredMaxLife = prompt('Enter the life for you and the monster', '100');

let choosenMaxLife = parseInt(enteredMaxLife);

if(isNaN(choosenMaxLife) || choosenMaxLife <= 0)
    choosenMaxLife = 100;

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife; 
let hasBonusLife = true; 

adjustHealthBars(choosenMaxLife);

function reset() {
    currentMonsterHealth = choosenMaxLife;
    currentPlayerHealth = choosenMaxLife;
    resetGame(choosenMaxLife); 
}

function endRoud() {
    let initPlayerHealth = currentPlayerHealth;
    const playerDemage = dealPlayerDamage(MOSTER_DEMAGE_VALUE);
    currentPlayerHealth -= playerDemage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        currentPlayerHealth = initPlayerHealth;
        removeBonusLife();
        hasBonusLife = false;
        setPlayerHealth(initPlayerHealth);
        alert(`You would'nt die the bonus life save you!`);
    }

    if (currentPlayerHealth <= 0 && currentMonsterHealth > 0)
        alert('You lost!');
    else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0)
        alert('You won!');
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0)
        alert('You have to draw.');

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0)
        reset();strongAttackHandler
}

function attackMonster(mode) {
    let maxDemageValue;

    if(mode === MODE_ATTACK) {
        maxDemageValue = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDemageValue = STRONG_ATTACK_VALUE;
    }

    const demage = dealMonsterDamage(maxDemageValue);
    currentMonsterHealth -= demage;

    endRoud();
}


function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;

    if (currentPlayerHealth >= choosenMaxLife - HEAL_VALUE) {
        alert(`You can't heal more than your initial value.`);
        healValue = choosenMaxLife - currentMonsterHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRoud();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);