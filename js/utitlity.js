//call this return function
function continueGame(){
    const alphabet = alphabetsFunctionRandom ();
    // console.log("this is a :", alphabet);

    const showAlphabet = document.getElementById("show-alphabet");
    showAlphabet.innerText = alphabet;

    setBackgroundKeyboard(alphabet);
    
}


//call that return function
function play (){
     hideElementById("home-screen");
     hideElementById("score");
    addedElementById("play-ground");

    setElementValueById("current-life", 5);
    setElementValueById ("current-score",  0);
    continueGame();
}

function gameOver(){
    hideElementById("play-ground");
    addedElementById("score");

    const lastScore = getElementValueById("current-score");
    setElementValueById("last-score", lastScore);
    // console.log(lastScore);
    
    const currentAlphabet = getElementTextById("show-alphabet");
    removeBackgroundKeyboard(currentAlphabet);

}