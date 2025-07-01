## 🌍 1. **Style global du `body`**

(A coller dans Notion pour un meilleur aperçu)


css

body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica rounded';
  background: url("images/imageFond.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

```

### ➤ Explication :

- **`margin: 0` & `padding: 0`** : retire les marges/paddings par défaut pour partir d'une base "propre".
- **`font-family`** : applique une police ronde, sympathique et accessible.
- **`background`** : applique une image en fond d’écran qui **remplit tout l’espace** (`cover`) sans se répéter.
- **`min-height: 100vh`** : garantit que le fond couvre **toute la hauteur de l’écran**.
- **`display: flex`** + `justify-content` + `align-items` : centre le contenu à la fois **verticalement et horizontalement**.
- **`flex-direction: column`** : empile les éléments **du haut vers le bas**.

🎯 Objectif : créer une interface **pleine page**, élégante, avec un fond visuel et une structure bien centrée.

---

## 🐦 2. **L'oiseau animé (`#bird`)**

```css
css

#bird {
  position: absolute;
  left: -200px;
  top: 100px;
  width: 177px;
  height: 160px;
  transform: scaleX(-1);
  animation: none;
  transition: none;
  z-index: 10;
}

```

### ➤ Explication :

- **`position: absolute`** : permet de **placer précisément** l’image de l’oiseau.
- **`left: -200px`** : commence **hors de l'écran à gauche** (pour voler vers la droite).
- **`transform: scaleX(-1)`** : **inversion horizontale** pour faire face à droite.
- **`z-index: 10`** : l’oiseau sera au-dessus des autres éléments (comme un personnage principal !).

### ➤ Animation définie séparément :

```css
css

@keyframes flyWave {
  0%   { left: -200px; top: 100px; }
  25%  { top: 60px; }
  50%  { top: 100px; }
  75%  { top: 140px; }
  100% { left: 100vw; top: 100px; }
}

```

- Animation qui **fait voler l’oiseau de gauche à droite**, avec une trajectoire en **vagues (haut-bas)**.
- Le déplacement utilise les **unités vw** (1vw = 1% de la largeur de la fenêtre).

🎯 Objectif : ajouter un **élément ludique et vivant** à l'interface (mascotte animée ?).

---

## 📦 3. **Bloc principal du quiz (`#styleQuizz`)**

```css
css

#styleQuizz {
  background-color: #fffdf5;
  border: 3px solid #6b4226;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  width: 90%;
  margin-top: 2rem;
  animation: fadeInUp 0.6s ease forwards;
}

```

### ➤ Explication :

- Apparence **cartonnée/boîte blanche** avec coins arrondis et une bordure marron douce.
- **Ombre** discrète pour l’effet de profondeur.
- **Responsive** : largeur max à 600px mais adaptable jusqu'à 90% de la largeur de l'écran.
- **Animation** d'apparition fluide vers le haut.

```css
css

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

```

- L’effet **fadeInUp** fait apparaître le bloc en **glissant du bas** avec un effet de fade (opacité).

🎯 Objectif : styliser un **contenu centralisé et lisible**, agréable visuellement.

---

## ✍️ 4. **Textes et titres**

```css
css

#styleQuizz h1, #nouvellePage h1 {
  font-size: 2rem;
  color: #6a994e;
  text-align: center;
  margin-bottom: 1.5rem;
}

```

- Un **grand titre vert** centré, utilisé à la fois pour le quiz et la page de résultat.

```css
css

#questions {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
}

```

- Le texte de la question est **lisible et centré**.

🎯 Objectif : hiérarchiser les contenus par importance.

---

## ✅ 5. **Réponses possibles (`#reponse`)**

```css
css
#reponse {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

```

- Pas de puces de liste, format **vertical** et espacé.

```css
css

.bouton {
  background-color: #a9d6e5;
  border: none;
  border-radius: 25px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
}
.bouton:hover {
  background-color: #6a994e;
  color: white;
}

```

- Boutons **ronds**, doux au clic, qui changent de couleur au survol.
- **Tout l’espace disponible** est utilisé (responsive).

---

## 📤 6. **Bouton "Submit"**

```css
css

#submit {
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: #6a994e;
  color: white;
  border-radius: 20px;
}
#submit:hover {
  background-color: #588157;
}

```

- Bouton principal pour valider, avec un **style distinct et bien visible**.

---

## 🔁 7. **Page de résultats (`#nouvellePage`)**

```css
css

#nouvellePage {
  display: none;
  ...
}

```

- Cachée par défaut, cette section **s’affiche après le quiz**.
- Même esthétique que le quiz, pour la cohérence.

### Bouton rejouer :

```css
css

#rejouer {
  background-color: #f2c57c;
  ...
}
#rejouer:hover {
  background-color: #f29e4c;
}

```

- Ton jaune/orangé qui attire l’œil et indique une **action secondaire mais importante**.

---
