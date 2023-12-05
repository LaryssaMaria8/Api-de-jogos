//puxa os ids do html
var mensagemUm = document.querySelector("#mensagemUm");
var mensagemDois = document.querySelector("#mensagemDois");
var mensagemTres = document.querySelector("#mensagemTres");
//biblioteca geradora de números
var resultado = Math.floor(Math.random() * 30);
var quantidadeDeTentativas = 0;
//array para guardar os valores inseridos
var quantidadeDeAcertos = [];
//função chamada ao apertar o botão adivinhe
function jogar() {
    var tentativaDoUsuario = document.querySelector("#adivinhe").value;
    //não deixa o usuário inserir números fora do range
    if (tentativaDoUsuario < 1 || tentativaDoUsuario > 30) {
        alert("O número deve estar entre 1 e 30");
    } else {
        // Adiciona a tentativa à lista de acertos
        quantidadeDeAcertos.push(tentativaDoUsuario);
         // Adiciona o número de tentativas
        quantidadeDeTentativas = quantidadeDeTentativas + 1;
 // Compara a tentativa do usuário com o número random
        if (tentativaDoUsuario < resultado) {
            mensagemUm.textContent = "Dica: o número é mais alto que o digitado";
            mensagemDois.textContent = "Número de tentativas: " + quantidadeDeTentativas;
            mensagemTres.textContent = "Os números que você adivinhou são: " + quantidadeDeAcertos;
        }
        else if (tentativaDoUsuario > resultado) {
            mensagemUm.textContent = "Dica: o número é menor que o digitado";
            mensagemDois.textContent = "Número de tentativas: " + quantidadeDeTentativas;
            mensagemTres.textContent = "Os números que você adivinhou são: " + quantidadeDeAcertos;
        }
        else if (tentativaDoUsuario == resultado) {
            mensagemUm.textContent = "Está correto! Você ganhou";
            mensagemDois.textContent = "O número é: " + resultado;
            mensagemTres.textContent = "Os números que você adivinhou são: " + quantidadeDeAcertos;
        }
    }
}

// Chama o botão de reiniar o jogo
document.querySelector("#reiniciar").addEventListener("click", function () {
    NovoJogo();
    // Limpar campo de entrada
    document.querySelector("#adivinhe").value = "";
});

// Função para reiniciar o jogo
function NovoJogo() {
    resultado = Math.floor(Math.random() * 30);
    quantidadeDeTentativas = 0;
    quantidadeDeAcertos = [];

    mensagemUm.textContent = "Seu número de tentativas: 0";
    mensagemDois.textContent = "Seu número de acertos: nenhuma";
    mensagemTres.textContent = "";
}
