// Aguarda o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o botão pelo seu ID
    const botao = document.getElementById('botaoMensagem');

    // Seleciona o parágrafo onde a mensagem será exibida
    const areaMensagem = document.getElementById('areaMensagem');

    // Adiciona um "ouvinte de evento" para o clique no botão
    isContentVisible = false
    botao.addEventListener('click', function() {
        if (!isContentVisible) {
            areaMensagem.textContent = "Você não precisa salvar o mundo para encontrar sentido na vida. Às vezes, tudo que você precisa é de algo simples, como alguém para cuidar.";
            isContentVisible = true;
        } else {
            areaMensagem.textContent = '';
            isContentVisible = false;
        }
    }
)});