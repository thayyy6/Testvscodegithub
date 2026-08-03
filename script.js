// Actions sur la page master.html

const master = document.getElementById("master");
const titres = document.querySelectorAll("h1, h2, h3, h4, h5");

// 1. Message de bienvenue dans le titre principal
master.innerHTML = "Bonjour JavaScript";

// 2. Clique sur un titre : il change de couleur au hasard
const couleurs = ["red", "brown", "green", "blue", "purple", "orange", "teal"];

titres.forEach((titre) => {
  titre.style.cursor = "pointer";
  titre.addEventListener("click", () => {
    const couleur = couleurs[Math.floor(Math.random() * couleurs.length)];
    titre.style.color = couleur;
  });
});

// 3. Un bouton qui compte les clics
const bouton = document.createElement("button");
bouton.textContent = "Clique-moi";
document.body.appendChild(bouton);

let clics = 0;
bouton.addEventListener("click", () => {
  clics++;
  master.innerHTML = `Tu as cliqué ${clics} fois`;
});

// 4. Un bouton qui remet tout à zéro
const reset = document.createElement("button");
reset.textContent = "Recommencer";
document.body.appendChild(reset);

reset.addEventListener("click", () => {
  clics = 0;
  master.innerHTML = "Bonjour JavaScript";
  titres.forEach((titre) => (titre.style.color = ""));
});

// 5. L'heure actuelle, mise à jour chaque seconde
const horloge = document.createElement("p");
horloge.id = "horloge";
document.body.appendChild(horloge);

setInterval(() => {
  horloge.textContent = new Date().toLocaleTimeString("fr-FR");
}, 1000);
