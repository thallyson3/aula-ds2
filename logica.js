listaPerguntas = [
  {
    pergunta: "Qual o maior ser vivo do mundo?",
    opcoes: [
      "Baleia Azul",
      "Cogumelo de mel",
      "Elefante",
      "Girafa"
    ],
    correta : 1
  },
  
  {
    pergunta: "Qual a primeira capital do Brasil?",
    opcoes: [
      "Taquara",
      "Salvador",
      "Brasilia",
      "Rio de Janeiro"
    ],
    correta : 1
  },

  {
    pergunta: "Em que ano o Brasil se tornou independente?",
    opcoes: [
      "1980",
      "1500",
      "1237",
      "1822"
    ],
    correta : 3
  },

  {
    pergunta:"Que ano o Flamengo foi campeão mundial?",
    opcoes: [
      "2002",
      "2019",
      "1981",
      "2025"
    ],
    correta : 2
  },
]
  
objPergunta = null

telaInical = document.querySelector(".tela-inicial")
telaPergunta = document.querySelector(".tela-pergunta")
telaAcertou = document.querySelector(".tela-acertou")
telaErrou = document.querySelector(".tela-errou")

btnIniciar = document .querySelector(".Iniciar")

btnIniciar.addEventListener("click" , Iniciarjogo)

divPergunta = document.querySelector(".pergunta");

botao0 = document.querySelector(".opcao0")
botao1 = document.querySelector(".opcao1")
botao2 = document.querySelector(".opcao2")
botao3 = document.querySelector(".opcao3")

perguntaAtual = 0

telaAcertou.addEventListener("click", () => {
  telaAcertou.style.display = "none"
  Iniciarjogo()
  
})
telaErrou.addEventListener("click", () => {
  telaErrou.style.display = "none"
  telaInical.style.display = "block"
  perguntaAtual = 0
})


botao0.addEventListener("click", () => {
  if (objPergunta.correta == 0) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }
})

 botao1.addEventListener("click", () => {
  if (objPergunta.correta == 1) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }
})

 botao2.addEventListener("click", () => {
  if (objPergunta.correta == 2) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }
})

 botao3.addEventListener("click", () => {
  if (objPergunta.correta == 3) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }
})


function Iniciarjogo() {
  telaInical.style.display = "none"
  telaPergunta.style.display = "block"
  
  mostrarPergunta()
}

function mostrarPergunta() {
  objPergunta = listaPerguntas[perguntaAtual];

  textoPergunta = document.createTextNode(objPergunta.pergunta);
  divPergunta.innerHTML = ""
    divPergunta.appendChild(textoPergunta);

  txtopcao1 = document.createTextNode(objPergunta.opcoes[0]);
  botao0.innerHTML = " "
  botao0.appendChild(txtopcao1);

  txtopcao2 = document.createTextNode(objPergunta.opcoes[1]);
  botao1.innerHTML = " "
  botao1.appendChild(txtopcao2);

  txtopcao3 = document.createTextNode(objPergunta.opcoes[2]);
  botao2.innerHTML = " "
  botao2.appendChild(txtopcao3);

  txtopcao4 = document.createTextNode(objPergunta.opcoes[3]);
  botao3.innerHTML = " "
  botao3.appendChild(txtopcao4);


  objPergunta.opcoes[0]
  console.log(pergunta)
}
function mostrarAcertou(){
  telaPergunta.style.display = "none"
  telaAcertou.style.display = "block"
  perguntaAtual++
}

function mostrarErrou(){
  telaPergunta.style.display = "none"
  telaErrou.style.display = "block"
  perguntaAtual--
}