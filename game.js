import Quiz from './questions.js';


const question = document.getElementById("questions");
const suivant = document.getElementById("submit");
const reponse = document.getElementById("reponse")

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
    for (let item of tabRep){ 
console.log(item.reponse);

const contenu = document.getElementById("reponse")
const button = document.createElement("button");
  button.textContent = item.reponse;

contenu.appendChild(button)
}
}

afficheReponses(index)

// const contenu = document.getElementById("ul")







// function afficheReponses(index) {

    

// console.log(Quiz[0].reponses);
   
    
// }
// afficheReponses();