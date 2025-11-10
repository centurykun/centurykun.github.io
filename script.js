document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        if (nome.value.trim() === '' || email.value.trim() === '' || mensagem.value.trim() === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        alert('Obrigado por entrar em contato! Responderemos em breve.');
        contactForm.reset();
    });
});
