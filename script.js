
document.getElementById('roll-button').addEventListener('click', rollDice);

function rollDice() {
    const dice1 = rollSingleDice();
    const dice2 = rollSingleDice();
    const dice3 = rollSingleDice();
    
    const scores = [dice1, dice2, dice3];
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);

    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;
    document.getElementById('dice3').textContent = dice3;

    document.getElementById('dice1').className = 'dice';
    document.getElementById('dice2').className = 'dice';
    document.getElementById('dice3').className = 'dice';

    if (dice1 === dice2 && dice2 === dice3) {
        document.getElementById('dice1').classList.add('blue');
        document.getElementById('dice2').classList.add('blue');
        document.getElementById('dice3').classList.add('blue');
        document.getElementById('winner').textContent = 'It\'s a draw!';
    } else {
        let winner = '';
        if (dice1 === maxScore) {
            document.getElementById('dice1').classList.add('green');
            winner = 'Member A';
        }
        if (dice2 === maxScore) {
            document.getElementById('dice2').classList.add('green');
            winner = 'Member B';
        }
        if (dice3 === maxScore) {
            document.getElementById('dice3').classList.add('green');
            winner = 'Member C';
        }

        if (dice1 === minScore) {
            document.getElementById('dice1').classList.add('red');
        }
        if (dice2 === minScore) {
            document.getElementById('dice2').classList.add('red');
        }
        if (dice3 === minScore) {
            document.getElementById('dice3').classList.add('red');
        }

        if (winner) {
            document.getElementById('winner').textContent = winner + ' wins!';
        } else {
            document.getElementById('winner').textContent = 'It\'s a draw!';
        }
    }

    if (dice1 !== maxScore && dice1 !== minScore) {
        document.getElementById('dice1').classList.add('yellow');
    }
    if (dice2 !== maxScore && dice2 !== minScore) {
        document.getElementById('dice2').classList.add('yellow');
    }
    if (dice3 !== maxScore && dice3 !== minScore) {
        document.getElementById('dice3').classList.add('yellow');
    }
}

function rollSingleDice() {
    return Math.floor(Math.random() * 6) + 1;
}
