let pics = ['imgpaper.png', 'imgrock.png', 'imgsicssor.png'];
let pick = "";

function shuffle(pics) {
    for (let i = pics.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pics[i], pics[j]] = [pics[j], pics[i]];
    }
    return pics;
}

function displayImg(pics) {
    document.getElementById("pic1").style.backgroundImage = `url(${pics[0]})`;
    document.getElementById("pic2").style.backgroundImage = `url(${pics[1]})`;
    document.getElementById("pic3").style.backgroundImage = `url(${pics[2]})`;
}

window.onload = function() {
    const shuffledPics = shuffle(pics);
    displayImg(shuffledPics);

    document.getElementById("pic1").addEventListener('click', () => handlePick(pics[0]));
    document.getElementById("pic2").addEventListener('click', () => handlePick(pics[1]));
    document.getElementById("pic3").addEventListener('click', () => handlePick(pics[2]));
};

function handlePick(img) {
    if (img === 'imgpaper.png') {
        pick = 'paper';
    } else if (img === 'imgrock.png') {
        pick = 'rock';
    } else if (img === 'imgsicssor.png') {
        pick = 'scissors';
    }
    console.log(pick);
    playGame(pick);
}

function play() {
    const randomNum = Math.random();
    if (randomNum < 1 / 3) {
        return 'rock';
    } else if (randomNum < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playGame(playerChoice) {
    const computerChoice = play();
    const result = determineWinner(playerChoice, computerChoice);
 document.getElementById('result').innerHTML = 
    `<center><h1>You chose ${playerChoice}. Computer choose ${computerChoice}. ${result}</h1></center>`;
}
