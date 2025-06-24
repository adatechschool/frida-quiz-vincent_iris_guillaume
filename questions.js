import { createElement } from "react";

const Quiz = [
    {
        question: "Lequel de ces oiseaux est capable de dormir en volant ?",
        reponses: [
            { reponse: "Le moineau", isCorrect: false },
            { reponse: "Le canari", isCorrect: false },
            { reponse: "Le martinet", isCorrect: true },
            { reponse: "Le corbeau", isCorrect: false }
        ]
    },
    {
        question: "Quel oiseau a une danse de séduction qui ressemble à un moonwalk version forêt tropicale ?",
        reponses: [
            { reponse: "Le héron Jackson", isCorrect: false },
            { reponse: "Le colibri disco", isCorrect: false },
            { reponse: "Le paradisier superbe", isCorrect: true },
            { reponse: "Le flamant rose funky", isCorrect: false }
        ]
    },
    {
        question: "Quel oiseau construit des “maisons de l'amour” super décorées pour impressionner sa dulcinée ?",
        reponses: [
            { reponse: "Le pigeon romantique", isCorrect: false },
            { reponse: "Le corbeau styliste", isCorrect: false },
            { reponse: "Le jardinier satin", isCorrect: true },
            { reponse: "Le perroquet architecte", isCorrect: false }
        ]
    },
    {
        question: "Lequel de ces oiseaux peut dormir debout... sur une seule patte ?",
        reponses: [
            { reponse: "Le canari yogi", isCorrect: false },
            { reponse: "La Perruche équilibriste", isCorrect: false },
            { reponse: "Le flamant rose", isCorrect: true },
            { reponse: "Le pingouin ninja", isCorrect: false }
        ]
    }
];


export default Quiz;