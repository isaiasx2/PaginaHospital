
const body = document.querySelector('.body-completo');
const dark = document.querySelector(".boton");
const article = document.querySelectorAll("article");

dark.addEventListener('onclick', function() {

    body.classList.toggle("dark-mode")
    
})
