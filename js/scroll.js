window.addEventListener('scroll',() =>{
    // pegando o menu no HTML e passando par ao JS
    const header = document.querySelector('.header-top');
    // No header vamos adicionar uma classe CSS quando o scroll for maior que 80, o JS retira esta classe quando o scroll for <= 80
    header.classList.toggle('scroll-active', window.scrollY > 80);
});