import {PALAVRAS_RUINS} from "./palavrasruins.js";

const botaoMostraPalavras = document.querySelector ('click', botaoMostraPalavras);

botaoMostraPalavras.addEventListener('click',botaoMostraPalavras);

function mostraPalavrasChave () 
const texto = document. querySelector ('#entrada-de-texto').value; 
const camporesultado = document.querySelector ('#resultado-palavra-chave');
const palavrasChave = processoTexto (texto);

campoResultado.textContent = palavrasChave.join(',');