/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generarCarta();
  const boton = document.querySelector("button");
  boton.addEventListener("click", generarCarta);
};

function generarCarta() {
  const cartas = document.querySelectorAll(".card");
  for (const carta of cartas) {
    const palos = carta.querySelectorAll(".palo");
    let elementoPalo = generarPalo();
    for (let palo of palos) {
      palo.innerHTML = elementoPalo;
      if (elementoPalo == "♦" || elementoPalo == "♥") {
        palo.style.color = "red";
      } else {
        palo.style.color = "black";
      }
    }

    const valores = carta.querySelectorAll(".valor");
    let elementoValor = generarValor();
    for (let valor of valores) {
      valor.innerHTML = elementoValor;
    }
  }
}

function generarPalo() {
  let palosCarta = ["♦", "♥", "♠", "♣"];
  let paloAleatorio = Math.floor(Math.random() * palosCarta.length);
  return palosCarta[paloAleatorio];
}

function generarValor() {
  let valoresCarta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let valorAleatorio = Math.floor(Math.random() * valoresCarta.length);
  return valoresCarta[valorAleatorio];
}
