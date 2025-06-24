import { createElement } from "react";

const Quiz = [
    {
        question: "Lequel de ces oiseaux est capable de dormir en volant ?",
        answers: [
            { answer: "Le moineau", isCorrect: false },
            { answer: "Le canari", isCorrect: false },
            { answer: "Le martinet", isCorrect: true },
            { answer: "Le corbeau", isCorrect: false }
        ]
    },
    {
        question: "Quel oiseau a une danse de séduction qui ressemble à un moonwalk version forêt tropicale ?",
        answers: [
            { answer: "Le héron Jackson", isCorrect: false },
            { answer: "Le colibri disco", isCorrect: false },
            { answer: "Le paradisier superbe", isCorrect: true },
            { answer: "Le flamant rose funky", isCorrect: false }
        ]
    },
    {
        question: "Quel oiseau construit des “maisons de l'amour” super décorées pour impressionner sa dulcinée ?",
        answers: [
            { answer: "Le pigeon romantique", isCorrect: false },
            { answer: "Le corbeau styliste", isCorrect: false },
            { answer: "Le jardinier satin", isCorrect: true },
            { answer: "Le perroquet architecte", isCorrect: false }
        ]
    },
    {
        question: "Lequel de ces oiseaux peut dormir debout... sur une seule patte ?",
        answers: [
            { answer: "Le canari yogi", isCorrect: false },
            { answer: "La Perruche équilibriste", isCorrect: false },
            { answer: "Le flamant rose", isCorrect: true },
            { answer: "Le pingouin ninja", isCorrect: false }
        ]
    }
];

export default Quiz;
