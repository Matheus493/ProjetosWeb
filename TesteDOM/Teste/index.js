class MobileMenu{
    constructor(menuHamburguer, menu, navLinks, active){
        this.menuHamburguer = document.querySelector(menuHamburguer)
        this.menu = document.querySelector(menu)
        this.navLinks = document.querySelectorAll(navLinks)
        this.active = active
    }

    AnimateLinks(){
        this.navLinks.forEach((value, index)=>{
            if(value.style.animation){
                value.style.animation = ''
            } else {
                value.style.animation = `AnimateLinks ${index / 3.5 + .8}s`
            }
        })
    }

    ActiveClass(){
        this.menuHamburguer.classList.toggle(this.active)
        this.menu.classList.toggle(this.active)
        this.AnimateLinks()
    }

    addClickEvent(){
        this.menuHamburguer.addEventListener('click', ()=>{this.ActiveClass()})
    }

    init(){
        if(this.menuHamburguer){
            this.addClickEvent()
        }
    }
}

const mobileMenu = new MobileMenu(
    '#menu-hamburguer',
    '#menu',
    '#menu li',
    'active'
)

mobileMenu.init()