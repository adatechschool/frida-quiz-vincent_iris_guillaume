import Quiz from './questions.js';


const question = document.getElementById("questions");
const suivant = document.getElementById("submit");
const reponse = document.getElementById("reponse");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let tabBoutons = [btn1, btn2, btn3, btn4];

let index = 0;
let score = 0;

suivant.innerText ="suivant"

//exemple   question.innerText = Quiz[0].question;
//exemple   response1.innerText = Quiz[0].reponses[0].reponse;


function afficheQuestion(indice) {
    question.innerText = Quiz[indice].question;
    console.log(indice); 
}
afficheQuestion(index);


function afficheReponses(numeroQuestion) {
    let tabRep = Quiz[numeroQuestion].reponses
    console.log(tabBoutons);
    console.log(tabRep);
    let indice = 0;
    for (let item of tabRep){ 
        tabBoutons[indice].innerText = item.reponse;
        indice = indice + 1;
console.log(item.reponse);
}}

afficheReponses(index);

function boutonSuivant (){
suivant.addEventListener("click", () => {
    index = index + 1;
    afficheQuestion(index);
    afficheReponses(index);
})
}

boutonSuivant();

