function minhaFuncao(){
    document.getElementById('frase1').innerHTML = "Alterei o código";
}
document.getElementById('frase1').onclick = minhaFuncao;

function alteratCorDeFundo(){
    document.querySelector('body').style.backgroundColor='rgb(45,60,89)';
}
document.querySelector('button').onclick = alteratCorDeFundo;

document.querySelector('h1').innerHTML = "Meu projeto em java script - Teste";