const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#caixaDeTexto")

const respostas = [
  'Com certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

function fazerPergunta() {
  if(caixaDeTexto.value == "") {
  alert("Digite sua pergunta")
  return
}
 
 const totalRespostas = respostas.length
 
 const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
 
 elementoResposta.innerHTML = respostas[numeroAleatorio]
  
  elementoResposta.style.opacity = 10;
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  }, 3000)

}