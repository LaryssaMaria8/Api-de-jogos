function dica(){
    exibirMensagem("A oitava, volte quatro");
    }
    function exibirMensagem(mensagem) {
        document.getElementById('mensagem').innerText = mensagem;
    }
    function coletar(){
        var senhaInserida = document.getElementById('nome').value;
    
        if(senhaInserida === "Idiota"){
            window.location.href = 'https://youtu.be/keyRM3h_7tk';
        } else {
            exibirMensagem("Errou");
        }
    }