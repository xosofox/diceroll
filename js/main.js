var DEFAULT_MIN = 1;
var DEFAULT_MAX = 6;
var rolls = 1;

function rollMain() {
    var die = document.getElementById('mainDie');
    die.classList.add('rolling');
    var rolling = true;
    setTimeout(function() {
        console.log('Roll false');
        rolling = false;
        die.classList.remove('rolling');
    }, 500);
    var interval = setInterval(function() {
        render(die, roll());

        if (rolling === false) {
            clearInterval(interval);
        }
    }, 50);
}

function roll(min, max) {
    min = min || DEFAULT_MIN;
    max = max || DEFAULT_MAX;
    var res = getRandomInt(min, max);
    return res;
}

//http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render(div, num) {
    var pips = pipSetup[num];
    for (var pip = 1; pip <= 7; pip++) {
        var p = document.getElementsByClassName('pip' + pip)[0];
        if (pips.indexOf(pip) >= 0) {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    }
}

// 1 2
// 345
// 6 7
var pipSetup = [0,
    [4],
    [1, 7],
    [1, 4, 7],
    [1, 2, 6, 7],
    [1, 2, 4, 6, 7],
    [1, 2, 3, 5, 6, 7]
];
