// Fonction createSnow
const createSnow = () => {
  let snow = document.querySelector("#snow__fall");
  let span = document.createElement("span");
  span.style.left = Math.random() * innerWidth + "px";
  snow.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 5000);
};

setInterval(createSnow, 100);
