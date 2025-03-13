// Seta para Subir
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Ícone de Bate-papo
const chatIcon = document.getElementById('chat-icon');

chatIcon.addEventListener('click', () => {
    // Abre o chat do Tidio
    if (window.tidioChatApi) {
        window.tidioChatApi.open();
    } else {
        alert("O bate-papo não está disponível no momento. Tente novamente mais tarde.");
    }
});

// Bolinha de Perfil
const profileIcon = document.getElementById('profile-icon');
const profileDropdown = document.getElementById('profile-dropdown');

profileIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique se propague para o documento
    profileDropdown.classList.toggle('show');
});

// Fechar o dropdown ao clicar fora
document.addEventListener('click', (event) => {
    if (!event.target.matches('#profile-icon') && !event.target.matches('#profile-dropdown a')) {
        profileDropdown.classList.remove('show');
    }
});

// Lightbox para Galeria
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galeriaItems = document.querySelectorAll('.galeria-item');

galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = item.src;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Efeito de clique no botão
const buttons = document.querySelectorAll('.btn-effect');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 500);
    });
});

// Abrir/Fechar o Teclado de Piano
const pianoMenu = document.getElementById('piano-menu');
const pianoToggle = document.getElementById('piano-toggle');

pianoToggle.addEventListener('click', () => {
    pianoMenu.classList.toggle('open');
});

// Navegação pelas teclas do piano
const pianoKeys = document.querySelectorAll('.piano-key');

pianoKeys.forEach(key => {
    key.addEventListener('click', () => {
        const target = key.getAttribute('data-target');
        if (target) {
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        }
        pianoMenu.classList.remove('open'); // Fecha o menu após clicar
    });
});
//quiz
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.quiz-question');
    const resultSection = document.getElementById('quiz-result');
    const resultInstrument = document.getElementById('result-instrument');
    let totalPoints = 0;

    questions.forEach(question => {
        question.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                totalPoints += parseInt(button.getAttribute('data-points'));
                question.style.display = 'none';
                if (document.querySelectorAll('.quiz-question:not([style*="display: none"])').length === 0) {
                    showResult();
                }
            });
        });
    });

    function showResult() {
        let instrument;
        if (totalPoints <= 10) {
            instrument = 'Violão';
        } else if (totalPoints <= 20) {
            instrument = 'Piano';
        } else if (totalPoints <= 30) {
            instrument = 'Canto';
        } else if (totalPoints <= 40) {
            instrument = 'Bateria';
        } else {
            instrument = 'Violino';
        }
        resultInstrument.textContent = instrument;
        resultSection.classList.remove('hidden');
    }
});

// Abrir e fechar pop-ups
const contactPopup = document.getElementById('contact-popup');
const loginPopup = document.getElementById('login-popup');
const signupPopup = document.getElementById('signup-popup');
const closeButtons = document.querySelectorAll('.close-popup');

// Abrir pop-up de contato
document.getElementById('open-contact-popup').addEventListener('click', (e) => {
    e.preventDefault();
    contactPopup.classList.add('show');
});

// Abrir pop-up de login
document.getElementById('open-login-popup').addEventListener('click', (e) => {
    e.preventDefault();
    loginPopup.classList.add('show');
});

// Abrir pop-up de cadastro
document.getElementById('open-signup-popup').addEventListener('click', (e) => {
    e.preventDefault();
    signupPopup.classList.add('show');
});

// Fechar pop-ups
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        contactPopup.classList.remove('show');
        loginPopup.classList.remove('show');
        signupPopup.classList.remove('show');
    });
});

// Fechar pop-ups ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.classList.remove('show');
    }
    if (e.target === loginPopup) {
        loginPopup.classList.remove('show');
    }
    if (e.target === signupPopup) {
        signupPopup.classList.remove('show');
    }
});

// Envio do formulário de contato
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: new URLSearchParams(formData),
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
            e.target.reset();
            contactPopup.classList.remove('show');
        } else {
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
    } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro de conexão. Verifique sua internet e tente novamente.");
    }
});

// Envio do formulário de login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Login realizado com sucesso!");
    e.target.reset();
    loginPopup.classList.remove('show');
});

// Envio do formulário de cadastro
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    e.target.reset();
    signupPopup.classList.remove('show');
});
