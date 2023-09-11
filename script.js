let numeroAleatorio = Math.floor(Math.random() * 100) + 1; //numero aleatorio
const form = document.querySelector('#form'); //cria a variavel para selecionar o elemento da pagina html
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const turno = 1;
const salvaValores = [];

function eventoSubmit(evento){ //evento para prefenir osubmit da pagina
    evento.preventDefault(); 
}

form.addEventListener("submit", eventoSubmit); //execucao da funcao atraves da variavel "form"

button.onclick = () => {
    salvaValores.push(input.value);
    return console.log(salvaValores);
}

let i = numeroAleatorio;

