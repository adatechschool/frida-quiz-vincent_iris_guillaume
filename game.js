import Quiz from './questions.js';


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

suivant.innerText ="suivant";
suivant.disabled = true;


function nouvelleBalise(type, texte, id){
        let element = document.createElement(`${type}`);
        element.innerText = texte;
        return id.appendChild(element);
}



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
    boutons.removeChild(boutons.lastChild)
    index = index + 1;

    // 🐦 Relancer l'animation de l'oiseau à chaque clic sur "suivant"
const bird = document.getElementById("bird");
bird.style.animation = "none";       // Supprime l'animation
void bird.offsetWidth;               // Force reflow
bird.style.animation = "flyWave 5s linear"; // Relance l’animation

// 🔁 Revenir à la position de départ après le vol
setTimeout(() => {
    bird.style.animation = "none";
    bird.style.left = "-200px";
    bird.style.top = "100px";
}, 5000); // doit correspondre à la durée de l'animation
   
    afficheQuestion(index);
    afficheReponses(index);
    for (let button of tabBoutons) {
        button.disabled = false
        suivant.disabled = true;
        button.style.backgroundColor = "";
        button.style.color = ""; 
    }   
})
}

boutonSuivant();

function boutonAction () {
    let idx = 0;
    for (let item of tabBoutons) {
        console.log(`tabBoutons a l'indice ${idx} = ` ,item.id);
        idx++
        item.addEventListener("click", () => {
            if (correctAnswer === item.id) {
                score = score +1;
                nouvelleBalise("h1", "Bravo ! 👍", boutons);
                console.log("Le score est =", score);
                console.log("vincent est un BOSSS"); 
            } else {
                item.style.background = 'red'
                nouvelleBalise("h1", "Dommage 👎", boutons);
            }
            for (let button of tabBoutons){
                button.disabled = true;
                if (button.id === correctAnswer) {
                    button.style.background = 'green'
                }
            }
            suivant.disabled = false;
            
            })
    }
}
boutonAction();

function afficherScore(){
    let commentScore = document.createElement("h3")
    let baliseTexte = document.createElement("h2");
    baliseTexte.innerText = `votre score est ${score}`;
    if (score === 1) {
        commentScore.innerText = "t'es nul"
    } else if (score === 2) {
        commentScore.innerText = "t'es moins nul"
    } else if (score === 3) {
        commentScore.innerText = "t'y etais presque"
    } else if (score === 4) {
        commentScore.innerText = "Parfait !"
    } else {
        commentScore.innerText = "t'es tres nul ..."
    }
    nouvellePage.appendChild(baliseTexte);
    nouvellePage.appendChild(commentScore);
    nouvellePage.appendChild(rejouer)
    console.log(score)
}

function dernierePage () {
    suivant.addEventListener("click", () => {
        if (index === 4) {
            hideQuizz.style.display = "none"
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

let timerInverval;
let timeLeft = 30;
let timerDisplay = document.getElementById("timer")

function startTimer() {
    clearInterval(timerInverval)
        timeLeft = 30
        timerDisplay.innerText = `temps : ${timeLeft}`
        timerInverval = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = `temps : ${timeLeft}`

            if (timeLeft <= 0) {
                clearInterval(timerInverval)
                lockAnswers()
            }
        }, 1000);
}

function lockAnswers() {
    for (let button of tabBoutons)
        button.disabled = true;
        if (button.id === correctAnswer) {
            button.style.background = "green"
        } else {
            suivant.disabled = false
        }
}
