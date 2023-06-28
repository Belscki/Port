// Cascata
const ativamenu = document.querySelector('.fa-bars');

const navmenu = document.querySelector('header .nav-primaria')


ativamenu.addEventListener('click',()=>{
    ativamenu.classList.toggle('fa-x')
    navmenu.classList.toggle('ativado')
})