document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Exibe o primeiro slide
    showSlide(currentSlide);

    // Troca automaticamente a cada 4 segundos
    setInterval(nextSlide, 4000);

    // Se quiser botões de navegação, adicione eventos aqui
    // Exemplo:
    // document.querySelector('.btn-next').addEventListener('click', nextSlide);
    // document.querySelector('.btn-prev').addEventListener('click', prevSlide);
});

const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharForm() {
    form.style.left = "-300%"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}