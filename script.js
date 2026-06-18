const botoes =
document.querySelectorAll(".like");

botoes.forEach(botao=>{

let curtidas=0;

botao.addEventListener(
"click",
()=>{

curtidas++;

botao.nextElementSibling
.textContent=
`${curtidas} curtidas`;

botao.innerHTML="💖 Curtido";

});

});


const pesquisa=
document.getElementById(
"pesquisa"
);

pesquisa.addEventListener(
"input",
()=>{

const valor=
pesquisa.value
.toLowerCase();

document
.querySelectorAll(".card")

.forEach(card=>{

const nome=
card.querySelector("h2")
.textContent
.toLowerCase();

card.style.display=
nome.includes(valor)
? "block"
: "none";

});

});
