var myGrid = {}
var gameFinished = false;

function divClick(id) {
    let playerName = document.getElementById('playerName').value;
    if (!playerName) {
        alert('Enter player name before proceeding');
    } else if (gameFinished) {
        alert('Game is already finished');
    } else if (myGrid[id]) {
        alert('You can\'t edit this');
    } else {
        myGrid[id] = {
            value: 'X'
        }
        document.getElementById(id).innerHTML = '<p>X</p>';
        checkIfGameFinished();
        if (Object.keys(myGrid).length < 8) {
            botPlay();
            checkIfGameFinished();
        }
    }
}

function botPlay() {
    var randomNm = -1;
    while (randomNm == -1) {
        randomNm = Math.ceil(Math.random()*9);
        if (myGrid[randomNm]) {
            randomNm = -1;
        } else {
            myGrid[randomNm] = {
                value: 'O'
            }
            document.getElementById(randomNm).innerHTML = '<p>O</p>';
        }

    }
}

function checkIfGameFinished () {
    //horizontal check
    if (myGrid[1] && myGrid[2] && myGrid[3] && myGrid[1].value == myGrid[2].value && myGrid[2].value== myGrid[3].value) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Won</p>';
    } else if (myGrid[4] && myGrid[5] && myGrid[6] && myGrid[4].value == myGrid[5].value && myGrid[5].value== myGrid[6].value) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Won</p>';
    } else if (myGrid[7] && myGrid[8] && myGrid[9] && myGrid[7].value == myGrid[8].value && myGrid[8].value== myGrid[9].value) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Won</p>';
    } //vertical check 
    else if (myGrid[1] && myGrid[4] && myGrid[7] && myGrid[1].value == myGrid[4].value && myGrid[4].value== myGrid[7].value) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Won</p>';
    } else if (myGrid[2] && myGrid[5] && myGrid[9] && myGrid[2].value == myGrid[5].value && myGrid[5].value== myGrid[8].value) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Won</p>';
    } else if (myGrid[3] && myGrid[6] && myGrid[9] && myGrid[3].value == myGrid[6].value && myGrid[6].value== myGrid[9].value) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Won</p>';
    } 
    //diagonal check 
    else if (myGrid[1] && myGrid[5] && myGrid[9] && myGrid[1].value == myGrid[5].value && myGrid[5].value== myGrid[9].value) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Won</p>';
    } else if (myGrid[3] && myGrid[5] && myGrid[7] && myGrid[3].value == myGrid[5].value && myGrid[5].value== myGrid[7].value) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Won</p>';
    }
    //tie check
    else if (Object.keys(myGrid).length == 9) {
        gameFinished = true;
        document.getElementById('showMessage').innerHTML = '<p>Game Tie</p>';
    }
}