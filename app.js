// Création de la fonction createSnow qui va permettre de créér de la neige
const createSnow = () => {
  // Récupération des éléments HTML5
  const snow = document.querySelector("#snow__fall");
  const span = document.createElement("span");
  span.style.left = Math.random() * innerWidth + "px";
  // Ajout dans le DOM
  snow.appendChild(span);
  // La méthode globale setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
  setTimeout(() => {
    // Retrait du DOM
    span.remove();
  }, 5000);
};
//La méthode setInterval() appelle à plusieurs reprises la fonction avec un délai fixe entre chaque appel.
setInterval(createSnow, 100);
