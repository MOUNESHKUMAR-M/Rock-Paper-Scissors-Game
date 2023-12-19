let Score = JSON.parse(localStorage.getItem('Score'));
        
if (Score === null) {
    Score = {
        Wins : 0,
        Loses: 0,
        Ties: 0
    };
}

updateScore();

function playGame(playMove){
    const computerMove = pickcomputerMove();

    let result = '';
    
    if (playMove === 'Rock'){
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose';
        } else if (computerMove === 'Scissors') {
            result = 'You Win';
        }

    } else if (playMove === 'Paper'){
        if (computerMove === 'Rock') {
            result = 'You Win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You Lose';
        }
    } else if (playMove === 'Scissors'){
        if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Win';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You Win'){
        Score.Wins += 1;
    } else if (result === 'You Lose'){
        Score.Loses += 1;
    } else if (result === 'Tie'){
        Score.Ties += 1;
    }

    localStorage.setItem('Score' , JSON.stringify(Score));
    
    updateScore(); 

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = ` you
    <img src="image/${playMove}-emoji.png" class="move-icon">
    <img src="image/${computerMove}-emoji.png" class="move-icon">
    Computer`;

}

function updateScore(){
    document.querySelector('.js-score').innerHTML = ` Wins:${Score.Wins}. Loses:${Score.Loses}. Ties:${Score.Ties}`;

}

function pickcomputerMove(){

    const randomNum = Math.random();
    let computerMove = '';

    if (randomNum >= 0 && randomNum < 1/3) {
        computerMove = 'Rock';
    } else if (randomNum >= 1/3 && randomNum < 2/3) {
        computerMove = 'Paper';
    } else if (randomNum >= 2/3 && randomNum <= 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}
