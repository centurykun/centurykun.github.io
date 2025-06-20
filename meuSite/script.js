// Aguarda o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o botão pelo seu ID
    const botao = document.getElementById('botaoMensagem');

    // Seleciona o parágrafo onde a mensagem será exibida
    const areaMensagem = document.getElementById('areaMensagem');

    // Adiciona um "ouvinte de evento" para o clique no botão
    botao.addEventListener('click', function() {
        // Quando o botão for clicado, esta função será executada

        // Define o texto que aparecerá no parágrafo 'areaMensagem'
        // Você pode trocar esta mensagem por qualquer outra que preferir!
        areaMensagem.textContent = "Seja bem-vindo(a) à minha página! O sucesso é a soma de pequenos esforços repetidos dia após dia.";
    });

});