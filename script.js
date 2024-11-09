const MenuIcon = document.querySelector('.bx-menu');
const closeIcon = document.querySelector('.fa-xmark')
const MenuBar = document.querySelector('.menu-bar');

MenuIcon.addEventListener("click", ()=> {

setTimeout(() => MenuBar.classList.add('active'), 10);
MenuIcon.style.display = 'none';
closeIcon.style.display = 'inline-block';

});

closeIcon.addEventListener("click", ()=> {

setTimeout(() => MenuBar.classList.remove('active'), 300);
MenuIcon.style.display = 'inline-block';
closeIcon.style.display = 'none';

});


const NavBar = document.querySelector('.top-bar');

function ChangeBar () {
    const ScrollValue = window.scrollY;
    
    if(ScrollValue > 70) {
        NavBar.classList.add('tb-h')
    } else {
        NavBar.classList.remove('tb-h')
    }
};
window.addEventListener("scroll", ChangeBar);