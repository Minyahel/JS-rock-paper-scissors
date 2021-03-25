
let hum_rock = document.getElementById("hum_rock");;
let hum_pap = document.getElementById("hum_pap");
let hum_sci = document.getElementById("hum_sci");

let com_rock = document.getElementById("com_rock");
let com_pap = document.getElementById("com_pap");
let com_sci = document.getElementById("com_sci");

let hum_score = document.getElementById("hum_score");
let com_score = document.getElementById("com_score");

let x = 0;
let gameOver = false;
let userPlay = "";
let comPlay = "";
let userScore = 0;
let comScore = 0;
let scoreLimit = 10;

function checkWinner(inp1, inp2) {
    if (inp1  == inp2) {
        return 2;
    }

    else if ((inp1 == "rock" && inp2 == "paper") || (inp1 == "scissors" && inp2 == "rock") || (inp1 == "paper" && inp2 == "scissors")) {
        return 1;
    }

    else 
        return 0;
} 

function gameRun(val) {
    if (gameOver) 
        return
    let selection = getRandom();

    switch (selection) {
        case 1:
            comPlay = "rock";
            
            com_rock.parentElement.style.backgroundColor = "red";
            setTimeout(()=> {

            }, 2000);
            console.log("rock");
            com_rock.parentElement.style.backgroundColor = "blue";

            break;
        case 2:
            comPlay = "paper";
            break;
        case 3:
            comPlay = "scissors";
            break;
    }

    if (checkWinner(val, comPlay) == 0) {
        userScore += 1;
        hum_score.innerHTML = userScore;
    }

    else if (checkWinner(val, comPlay) == 1) {
        comScore += 1;
        com_score.innerHTML = comScore;
    }

    else {
    }
}

function getRandom() {
    return Math.floor(Math.random() * 3) + 1;
}

hum_rock.onclick = () => {
    gameRun("rock");
};

hum_pap.onclick = () => {
    gameRun("paper");
};

hum_sci.onclick = () => {
    gameRun("scissors");
};



