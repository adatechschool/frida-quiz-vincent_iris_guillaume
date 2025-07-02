import Quiz from './questions.js';
import {playVrai, playFaux} from './sons.js';
import { progressionBarre, entierPourcent, nouvelleBalise } from './progression.js';

const question = document.getElementById("questions");
const suivant = document.getElementById("submit");
const reponse = document.getElementById("reponse");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let hideQuizz = document.getElementById("styleQuizz");
let nouvellePage = document.getElementById("nouvellePage");
let rejouer = document.getElementById("rejouer");

nouvellePage.style.display = "none";
let tabBoutons = [btn1, btn2, btn3, btn4];
let correctAnswer;



let index = 0;
let score = 0;

progressionBarre(entierPourcent(1));

suivant.innerText ="suivant";
suivant.disabled = true;
suivant.style.background = 'grey'


function afficheQuestion(indice) {
    question.innerText = Quiz[indice].question;
    console.log (`la question est a l'indice ${indice}`); 
}

afficheQuestion(index);


function afficheReponses(numeroQuestion) {
    let tabRep = Quiz[numeroQuestion].reponses
    console.log(`tableau de reponses :`, tabRep);
    let indice = 0;
    for (let item of tabRep){ 
        tabBoutons[indice].innerText = item.reponse;
        console.log(`reponses.reponse à l'indice ${indice} =`, item.reponse);
        if (item.isCorrect===true){
            correctAnswer = tabBoutons[indice].id;
        }
        indice = indice + 1;
    }
}

afficheReponses(index);



function boutonSuivant (){
suivant.addEventListener("click", () => {
    styleQuizz.removeChild(styleQuizz.lastChild)
    boutons.removeChild(boutons.lastChild)
    index = index + 1;
    progressionBarre(entierPourcent(index+1));
    afficheQuestion(index);
    afficheReponses(index);

        relancerAnimationOiseau();

            //relance un nouveau timer à chaque fois qu’on clique sur "Suivant"
            clearInterval(timerId);
            timer = 30;
            timerDisplay.innerText = `il ne reste plus que ${timer}`;
            timerId = setInterval(updateTimer, 1000);                         

    for (let button of tabBoutons) {
        button.disabled = false
        suivant.disabled = true;
        suivant.style.background = 'grey'
        button.style.backgroundColor = "";
        button.style.color = ""; 
    }   
})
}

boutonSuivant();



function relancerAnimationOiseau() {
  const bird = document.getElementById("bird");
  bird.style.animation = "none";
  bird.offsetHeight; //
  bird.style.animation = "flyWave 5s linear";

  setTimeout(() => {
    bird.style.animation = "none";
    bird.style.left = "-200px";
    bird.style.top = "100px";
  }, 5000);
}


function boutonAction () {
    let idx = 0;
    for (let item of tabBoutons) {
        console.log(`tabBoutons a l'indice ${idx} = ` ,item.id);
        idx++
        item.addEventListener("click", () => {
            if (correctAnswer === item.id) {
                score = score +1;
                nouvelleBalise("h4", "Bravo ! 👍", boutons);
                console.log("Le score est =", score);
                console.log("vincent est un BOSSS");
                playVrai()
            } else {
                item.style.background = 'red'
                nouvelleBalise("h4", "Dommage 👎", boutons);
                playFaux()
            }
            for (let button of tabBoutons){
                button.disabled = true;
                if (button.id === correctAnswer) {
                    button.style.backgroundColor = 'green'
                }
            }
        
            suivant.disabled = false;
            suivant.style.background = 'green'
            })
    }
}
boutonAction();

function afficherScore(){
    let commentScore = document.createElement("h3")
    let baliseTexte = document.createElement("h2");
    score = entierPourcent(score);
    baliseTexte.innerText = `${score}% de reussite`;
    if (score <= 25) {
        commentScore.innerText = "T'es nul.le"
    } else if (score <= 50) {
        commentScore.innerText = "T'es pas si nul.le"
    } else if (score <= 75) {
        commentScore.innerText = "T'y etais presque"
    } else if (score <= 100) {
        commentScore.innerText = "Parfait !"
    } else {
        commentScore.innerText = "T'es tres nul ..."
    }
    nouvellePage.appendChild(baliseTexte);
    nouvellePage.appendChild(commentScore);
    nouvellePage.appendChild(rejouer)
    console.log(score)
}



function dernierePage () {
    
    suivant.addEventListener("click", () => {
        if (index === Quiz.length) {
        hideQuizz.style.display = "none";
        document.getElementById("bird").style.display = "none";
        nouvellePage.style.display = "block"
         console.log("index  = ", index);
         afficherScore()

        }
    })

}
dernierePage()



function refresh () {
    rejouer.addEventListener("click", () => {
        location.reload()
    })
}
console.log(location)

refresh()



let timerId = setInterval(updateTimer, 1000); //param  : fnct, param 2 repete la fnct tout les 1000milisec
let timerDisplay = document.getElementById("timer")
let timer = 30;

function updateTimer() {
    timer--;
    timerDisplay.innerText = `il ne reste plus que ${timer} secondes`
     
    if (timer <= 0) {
    for (let btn of tabBoutons) {
    btn.disabled = true;
    }
    suivant.disabled = false; // Permet de passer à la question suivante
    clearInterval(timerId); // Stoppe le timer une fois terminé
    suivant.style.background = 'green'
}
}

