function dica(){
exibirMensagem("Aplique o adjetivo apenas na primeira estrofe e busque uma ordem vertical");
}
function exibirMensagem(mensagem) {
    document.getElementById('mensagem').innerText = mensagem;
}
function coletar(){
    var senhaInserida = document.getElementById('nome').value;

    if(senhaInserida === "ooaa"){
        window.location.href = 'enigma_two.html';
    } else {
        exibirMensagem("Errou");
    }
}