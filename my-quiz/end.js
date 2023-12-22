const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    // console.log(username.value);
    // if there is nothing typed, save button's disabled 
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
    console.log('Clicked the Save button');
    // console-d bichsen message haragdaad l alga bolood baival preventDefault() bichne
    // prevent to post the different page
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/");
    console.log(highScores);
};

