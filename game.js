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


function afficheQuestion(indice) {
    question.innerText = Quiz[indice].question;
    console.log(indice); 
}

afficheQuestion(index);


function afficheReponses(numeroQuestion) {
    let tabRep = Quiz[numeroQuestion].reponses
    console.log(`affiche le tableau de boutons: ${tabBoutons}`);
    console.log(tabRep);
    let indice = 0;
    for (let item of tabRep){ 
        tabBoutons[indice].innerText = item.reponse;
        console.log(item.reponse);
        if (item.isCorrect===true){
            correctAnswer = tabBoutons[indice].id;
        }
        indice = indice + 1;
    }
}

afficheReponses(index);

function boutonSuivant (){
suivant.addEventListener("click", () => {
    index = index + 1;
   
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
    for (let item of tabBoutons) {
        console.log(item.id);
        item.addEventListener("click", () => {
            if (correctAnswer === item.id) {
                score = score +1
                console.log("Le score c'est", score)
                console.log("vincent est un BOSSS"); 
            } else {
                item.style.background = 'red'
            }
            for (let button of tabBoutons){
                button.disabled = true;
                if (button.id === correctAnswer) {
                    button.style.background = 'green'
                }
            }
        suivant.disabled = false;})

    }
}
boutonAction();

function afficherScore(){
    let baliseTexte = document.createElement("h2");
    baliseTexte.innerText = `votre score est ${score}`;
    nouvellePage.appendChild(baliseTexte);
    console.log(score)
}

function dernierePage () {
    suivant.addEventListener("click", () => {
        if (index === 4) {
            hideQuizz.style.display = "none"
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