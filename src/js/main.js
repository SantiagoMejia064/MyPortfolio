const header = document.querySelector('header');

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('header-nav-links');
const links = navLinks.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if(navLinks.classList.contains('active')){
        menuBtn.innerHTML = '✖';
        menuBtn.setAttribute('aria-expanded', 'true')
    } else {
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute('aria-expanded', 'false')
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute('aria-expanded', 'false')
    })
});

window.addEventListener("scroll",() => {

    header.classList.toggle("scrolled", window.scrollY > 0);
});

