const messiJ = document.createElement("div");
messiJ.classList.add("eleccion");

const valoyesJ = document.createElement("div");
valoyesJ.classList.add("eleccion");

const boton = document.getElementById("button");
const contenedor = document.querySelector(".jugadores");

contenedor.insertBefore(messiJ, contenedor.children[1]);
contenedor.appendChild(valoyesJ);

boton.addEventListener("click", jugada);

function jugada() {
  let tiradita = Math.floor(Math.random() * 3) + 1;
  let messis;

  if (tiradita == 1) {
    messis = "✊";
  } else if (tiradita == 2) {
    messis = "✋";
  } else {
    messis = "✌️";
  }

  messiJ.innerHTML = `<h2>${messis}</h2>`;

  const elexion = document.getElementById("ppt");
  let igual;

  if (elexion.value == "piedra") {
    igual = "✊";
  } else if (elexion.value == "papel") {
    igual = "✋";
  } else if (elexion.value == "tijera") {
    igual = "✌️";
  } else {
    alert("Elegí una opción primero");
    return;
  }

  valoyesJ.innerHTML = `<h2>${igual}</h2>`;

  ganador(messis, igual);
}

function ganador(messis, igual) {
  if (messis == igual) {
    alert("Empate");
  } else if (
    (messis == "✊" && igual == "✌️") ||
    (messis == "✋" && igual == "✊") ||
    (messis == "✌️" && igual == "✋")
  ) {
    alert("Ganó Messi");
  } else {
    alert("Ganaste vos Diego Valoyes");
  }
}
