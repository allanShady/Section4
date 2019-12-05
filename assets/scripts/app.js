const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MOSTER_DEMAGE_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let enteredMaxLife = prompt('Enter the life for you and the monster', '100');
let choosenMaxLife = parseInt(enteredMaxLife);
let battleLogs = [];

if(isNaN(choosenMaxLife) || choosenMaxLife <= 0)
    choosenMaxLife = 100;

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife; 
let hasBonusLife = true; 

adjustHealthBars(choosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry;

    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
        battleLogs.push(logEntry);
    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
        battleLogs.push(logEntry);
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
        battleLogs.push(logEntry);
    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
        battleLogs.push(logEntry);
    } else if (event === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: event,
            value: value,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
        battleLogs.push(logEntry);
    }

}

function reset() {
    currentMonsterHealth = choosenMaxLife;
    currentPlayerHealth = choosenMaxLife;
    resetGame(choosenMaxLife); 
}

function endRoud() {
    let initPlayerHealth = currentPlayerHealth;
    const playerDemage = dealPlayerDamage(MOSTER_DEMAGE_VALUE);
    currentPlayerHealth -= playerDemage;

    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDemage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        currentPlayerHealth = initPlayerHealth;
        removeBonusLife();
        hasBonusLife = false;
        setPlayerHealth(initPlayerHealth);
        alert(`You would'nt die the bonus life save you!`);
    }

    if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');

        writeToLog(
            LOG_EVENT_GAME_OVER,
            'Monster won',
            currentMonsterHealth,
            currentPlayerHealth
        );
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'Player won',
            currentMonsterHealth,
            currentPlayerHealth
        );
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You have to draw.');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'A draw',
            currentMonsterHealth,
            currentPlayerHealth
        );
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0)
        reset();strongAttackHandler
}

function attackMonster(mode) {
    const maxDemageValue = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

    const demage = dealMonsterDamage(maxDemageValue);
    currentMonsterHealth -= demage;

    writeToLog(
        logEvent,
        maxDemageValue,
        currentMonsterHealth,
        currentPlayerHealth
    );

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

    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );

    endRoud();
}

function printLogEntries() {
    console.log(battleLogs);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogEntries);