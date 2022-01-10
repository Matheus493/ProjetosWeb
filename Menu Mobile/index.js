// var menuHamburguer = document.getElementById('menu-hamburguer')

// function MenuHamburguerAnimate (){
//     menuHamburguer.classList.toggle('menu-hamburguer-animated')
// }

// menuHamburguer.addEventListener('click', MenuHamburguerAnimate)

// function NavListActived (){
//     var navList = document.getElementById('nav-list')
//     navList.classList.toggle('nav-list-active')
// }

// menuHamburguer.addEventListener('click', NavListActived)

class MenuMobile{
    constructor (menuHamburguer, navList, header){
        this.menuHamburguer = document.getElementById(menuHamburguer)
        this.navList = document.getElementById(navList)
        this.header = document.getElementById(header)
    }

    MenuHamburguerAnimate (){
        this.menuHamburguer.addEventListener('click', ()=>{
            this.menuHamburguer.classList.toggle('menu-hamburguer-animated')
        })
    }

    NavListActived (){
        this.menuHamburguer.addEventListener('click', ()=>{
            this.navList.classList.toggle('nav-list-active')
        })
    }
}

var menuMobile = new MenuMobile(
    'menu-hamburguer',
    'nav-list',
    'header'
)

menuMobile.MenuHamburguerAnimate()
menuMobile.NavListActived()