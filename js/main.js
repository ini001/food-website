//  =============show menu==========
const showMenu = (toggleId, navId) => {
    const toggle = document. getElementById(toggleId);
    nav = document.getElementById(navId);

    // validate that variables exists
    if(toggle && nav){
    // we add the show-menu class to the div tag with the nav__menu class
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show-menu')
    })
}    
}
showMenu('nav-toggle', 'nav-menu');

// ======= remove menu mobile =======
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ========= scroll sections active link=========
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);
// ====== change background header======


function scrollHeader(){
    const nav = document.getElementById('header') 
    // when the scroll is greater than 200 height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header');else 
    nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
// ====== show scroll top======


function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    // when the scroll is higher than 560 viewport, add a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');else 
    scrollTop.classList.remove('scroll-top');
}
window.addEventListener('scroll', scrollTop);


// ========================== Dark Light theme ==========================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';
// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon')
 
// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' :'bx-sun'

// we activate if the user previously chose a topic
if(selectedTheme){
  // if the validation is fulfilled, we ask what the issue was to know if we activated 
document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
themeButton.classList[selectedIcon === 'bx-moon'?'add':'remove'](iconTheme)
} 
// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme)
    // save the theme and icon the user choses
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// =============== scroll reveal animation ===============
const sr = ScrollReveal({
    origin: 'top',
    distance:'30px',
    duration:2000,
    reset:true
});

sr.reveal(`.home__data, .home__img, 
.about__data, .about__img, 
.services__content, 
.menu__content, 
.app__data, .app__img, 
.contact__data, .contact__button, 
.footer__content`, {
    interval: 200
});