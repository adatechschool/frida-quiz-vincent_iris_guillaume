import Quiz from './questions.js';


const question = document.getElementById("questions");
const suivant = document.getElementById("submit");
const reponse = document.getElementById("reponse");
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

let tabBoutons = [btn1, btn2, btn3, btn4]

let index = 0;
let score = 0;

//  question.innerText = Quiz[0].question;
// response1.innerText = Quiz[0].reponses[0].reponse;


function afficheQuestion(indice) {
    question.innerText = Quiz[indice].question;
    console.log(indice);
    
}
afficheQuestion(index);


function afficheReponses(numeroQuestion) {
    let tabRep = Quiz[numeroQuestion].reponses
    console.log(tabBoutons +1)
    for (let item of tabRep){

console.log(item.reponse);

let boutonRep = document.createElement("button");
boutonRep.innerText =item.reponse;
reponse.appendChild(boutonRep);

}}

afficheReponses(index);

function boutonSuivant (){
suivant.addEventListener("click", => {
        index = index + 1;
        afficheQuestion(index);
        afficheReponses(index);

    })
}







// function afficheReponses(index) {

    

// console.log(Quiz[0].reponses);
   
    
// }
// afficheReponses();