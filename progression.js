import Quiz from './questions.js';

    function nouvelleBalise(type, texte, id){
            let element = document.createElement(`${type}`);
            element.innerText = texte;
            return id.appendChild(element);
    }

    function entierPourcent(indiceQuestion) {
        let indicePourcent = indiceQuestion*100/Quiz.length;
        return indicePourcent;
    }


function progressionBarre(number) {
    let balise = nouvelleBalise("div", "0", styleQuizz);
    console.log(balise)
    balise.id = "rectangle";
     console.log(balise)
    rectangle.style.width = `${number}%`;
    return balise
    };


export {progressionBarre, entierPourcent, nouvelleBalise};
