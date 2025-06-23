document.addEventListener('DOMContentLoaded', function() {

    const botao = document.getElementById('botaoMensagem');

    const areaMensagem = document.getElementById('areaMensagem');

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
