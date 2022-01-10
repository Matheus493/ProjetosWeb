var menuHamburguer = document.getElementById('menu-hamburguer')

function NavListActived() {
    var navList = document.getElementById('nav-list')
    navList.classList.toggle('navList-actived')
    menuHamburguer.classList.toggle('menu-hamburguer-actived')
}
menuHamburguer.addEventListener('click', NavListActived)

menuHamburguer.addEventListener('onload', ()=>{
    var menu = document.getElementById('menu')
    if (window.innerWidth > 768){
        menu.style.transition = '0'
    } else {
        menu.style.transition = '1s'
    }
},1000)