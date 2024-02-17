function hideElementById(elementById) {
    const homeElements = document.getElementById(elementById);
    homeElements.classList.add("hidden")

}
function addedElementById(elementById) {
    const playGroundElement = document.getElementById(elementById);
    playGroundElement.classList.remove("hidden");
}

function setBackgroundKeyboard(elementById) {
    const setBackground = document.getElementById(elementById);
    setBackground.classList.add("bg-orange-400");
}
function removeBackgroundKeyboard(elementById) {
    const removeBackground = document.getElementById(elementById);
    removeBackground.classList.remove("bg-orange-400")
}

function getElementValueById(elementById) {
    const element = document.getElementById(elementById);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setElementValueById(elementById, value){
    const element = document.getElementById(elementById);
    element.innerText = value;
}

 function getElementTextById(elementById){
    const element = document.getElementById(elementById);
    const text = element.innerText;
    return text;
 }




function alphabetsFunctionRandom() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabets.split("");
    // console.log(alphabet);

    const randomCollected = Math.random() * 25;
    const index = Math.round(randomCollected);

    const alphabetUpdate = alphabet[index];
    return alphabetUpdate
}


function handlerKeyUpEvent(event) {
    const pressLetter = event.key;
    if(pressLetter === "Escape"){
        gameOver()
    }
    console.log(pressLetter);
    const expectableAlphabets = document.getElementById("show-alphabet");
    const expectableText = expectableAlphabets.innerText;
    const expectableLatter = expectableText.toLocaleLowerCase();

    // console.log(pressLetter, expectableLatter);

    if (pressLetter === expectableLatter) {

        //score
        const currentScore =  getElementValueById("current-score");
        const updateScore = currentScore + 1;
        setElementValueById ("current-score", updateScore);
        //-------------------------------------------------------
        // const currentScoreElement = document.getElementById("current-score");
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;  

        removeBackgroundKeyboard(expectableLatter);
        continueGame();


    }
    else {

        //life
        const element = getElementValueById("current-life");
        const updateLife = element - 1;
        setElementValueById ("current-life", updateLife);

        //---------------------------------------------------------
        // const currentLifeElement = document.getElementById("current-life");
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;


        if (updateLife === 0) {
            gameOver()

        }

    }


}

document.addEventListener("keyup", handlerKeyUpEvent);




