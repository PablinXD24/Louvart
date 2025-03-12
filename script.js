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
