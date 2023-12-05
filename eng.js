function sabemos(){
exibirMensagem("ok");
}
function exibirMensagem(mensagem) {
    document.getElementById('mensagem').innerText = mensagem;
}
function naoSabemos(){
    var url=window.location.href;
    window.location.href='part_one.html'
}
function botaoProsseguir(){
    const link=window.location.href;
    window.location.href='enigma_one.html'
}