let parteDoCorpoImg = document.querySelector('.parte-do-corpo');

const imagensPartesDoCorpo = [
    "hangman-0.svg",
    "hangman-1.svg",
    "hangman-2.svg",
    "hangman-3.svg",
    "hangman-4.svg",
    "hangman-5.svg",
    "hangman-6.svg"

];
function exibirMensagem(mensagem) {
    document.getElementById('mensagemJogo').innerText = mensagem;
}

function verTemas(event) {
    event.preventDefault(); // Impede a ação padrão do botão
    var listaTemas = document.getElementById('listaTemas');
    // Alterna a visibilidade da lista
    listaTemas.style.display = listaTemas.style.display === 'none' ? 'block' : 'none';
}

function exibirParteDoCorpo(numeroParte) {
    parteDoCorpoImg.src = imagensPartesDoCorpo[numeroParte];
}

exibirParteDoCorpo(0);


function enviarFormulario() {
    var url=window.location.href;
    window.location.href="justbotton.html";
}
let temas = {
    frutas: ["Banana", "Maca", "Laranja", "Uva","Brasil", "Peru", "Colombia", "Uruguai","Azul", "Vermelho", "Amarelo","Cadeira", "Mesa", "Copo", "Prato","Anta","Arara Azul","Preguica","Tucano","Mico Leão Dourado"],
};

var temaSelecionado = document.getElementById("temaSelecionado").value;
let palavraSecreta = "";
let palavraExibida = [];    


function iniciarJogo() {
    var temaSelecionado;
    palavraSecreta = escolherPalavraSecreta();
    palavraExibida = Array(palavraSecreta.length).fill('_');
    atualizarPalavraExibida();
    document.getElementById('tentativasRestantes').innerText = 6;
    }

function escolherPalavraSecreta() {
    var temaSelecionadoLowerCase = temaSelecionado.toLowerCase();
    let palavras = temas[temaSelecionadoLowerCase];
    return palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
}


function atualizarPalavraExibida() {
    document.getElementById('palavraSecreta').innerText = palavraExibida.join(' ');
}

function tentativa(letra) {
    letra = letra.toUpperCase();
    if (!ehLetraValida(letra) || palavraExibida.includes(letra)) {
        return;
    }

    let acertou = false;
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
            acertou = true;
            palavraExibida[i] = letra;
        }
    }

    if (!acertou) {
        let tentativasRestantes = parseInt(document.getElementById('tentativasRestantes').innerText);
        tentativasRestantes--;
        document.getElementById('tentativasRestantes').innerText = tentativasRestantes;

        if(tentativasRestantes==6){
            exibirParteDoCorpo(0)
        }

        if(tentativasRestantes==5){
            exibirParteDoCorpo(1)
        }
        if(tentativasRestantes==4){
            exibirParteDoCorpo(2)
        }
        if(tentativasRestantes==3){
            exibirParteDoCorpo(3)
        }
        if(tentativasRestantes==2){
            exibirParteDoCorpo(4)
        }
        if(tentativasRestantes==1){
            exibirParteDoCorpo(5)
        }
        if (tentativasRestantes === 0) {
            exibirParteDoCorpo(6)
            exibirMensagem("Você perdeu! A palavra secreta era: " + palavraSecreta);
            reiniciarJogo();
        }
        if(tentativasRestantes === -50){
            alert('Você burlou meu jogo...');
            var direc = window.location.href;
            window.location.href = 'enigma.html';
        }
    }

    if (palavraExibida.join('') === palavraSecreta) {
        exibirMensagem("Parabéns! Você ganhou!");
        reiniciarJogo();
    }
    
    atualizarPalavraExibida();
}

function ehLetraValida(letra) {
    return /^[A-Z]$/.test(letra);
}

iniciarJogo();