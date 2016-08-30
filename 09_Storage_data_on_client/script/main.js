var number = generateNumber(),
    result = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumber() {
    var number,
        num,
        firstNum,
        i = 0,
        numsArr = [];

    firstNum = getRandomInt(1, 9);
    numsArr.push(firstNum);

    for (i; i < 3; i++) {
        num = getRandomInt(0, 9);
        if (!_.includes(numsArr, num)) {
            numsArr.push(num);
        } else {
            i--;
        }
    }

    number = numsArr.join('');
    return number;
}

function sheepsCount(num) {
    var sheep = 0,
        i = 0;

    for (i; i < number.length; i++) {
        for (var j = 0; j < num.length; j++) {
            if (i != j && number[i] === num[j]) {
                sheep++;
            }
        }
    }
    return sheep;
}

function ramsCount(num) {
    var ram = 0,
        k = 0;

    for (k; k < number.length; k++) {
        if (number[k] === num[k]) {
            ram++;
        }
    }
    return ram;
}

function compareNumbers() {
    var inputNum = document.getElementsByTagName('input')[0].value;

    if (/[0-9]{4}/.test(inputNum)) {
        var sheeps = sheepsCount(inputNum);
        var rams = ramsCount(inputNum);

        result++;

        console.log('At this try you got ' + sheeps + ' sheeps and ' + rams + ' rams...');
        console.log('Your number of tries is ' + result);

        // Logging result for quick game
        console.log('Result is ' + number);

        console.log('------------------------------------------');
        
        if (rams === 4) {
            console.log('Congratulations!');
            writeScore();
        }
        
    } else {
        alert('Type four digits, please');
    }
}

function writeScore() {
    var nickname = prompt("If you wish to save score write your nickname below or press 'ESC' to leave");
    localStorage.setItem(nickname, result);
}

function showScores() {
    var scores = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var name = key;
        if (key == 'null') {
            name = 'Unnamed Player';
        }
        scores.push({'name': name, 'result': localStorage[key]});
    }

    var sortedScores = _.sortBy(scores, 'result');
    var ol = '<ol>';
    for (var j = 0; j < sortedScores.length; j++) {
        ol += '<li>' + sortedScores[j].name + ' ----- ' + sortedScores[j].result + '</li>';
    }
    ol += '</ol>';

    document.getElementsByClassName('scoreboard')[0].innerHTML = ol;
}
