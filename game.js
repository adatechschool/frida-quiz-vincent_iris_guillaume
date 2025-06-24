import Quiz from './questions.js';

console.log(Quiz);

const xxx = document.getElementById("questions")
console.log(xxx)

function afficheReponse(questionNumber) {
    const reponses = Quiz[questionNumber].reponses
    console.log(Quiz[questionNumber])
}