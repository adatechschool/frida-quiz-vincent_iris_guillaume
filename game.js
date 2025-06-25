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

    const reponses = Quiz[numeroQuestion].reponses
    for (let item of reponses) {

    let btn = document.getElementById("boutons")
    let button = document.createElement("button")
    let text = document.createTextNode(item.reponse)
    button.appendChild(text);
    btn.appendChild(button)
    }
}
afficheReponses(index)
