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



<<<<<<< HEAD
function afficheReponses(params) {
    // for (let item of reponse)
        const reponse = Quiz.reponses.reponse
    console.log(reponse)
}
=======
function afficheReponses(numeroQuestion) {
const reponse = Quiz[numeroQuestion].reponses
console.log(reponse)
}

afficheReponses(index)




// for (let x of cars) {
//   text += x;
// }








// function afficheReponses(index) {

    

// console.log(Quiz[0].reponses);
   
    
// }
// afficheReponses();
>>>>>>> 47b63fb9954243741989da143fd603ea7af8cd4e
