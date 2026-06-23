const header = document.querySelector('header');

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('header-nav-links');
const links = navLinks ? navLinks.querySelectorAll('a') : [];

const langbtns = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");
const dataPath = window.location.pathname.includes('/projects/') ? '../src/data' : './src/data';

const changeLanguage = (language) => {
    fetch(`${dataPath}/${language}.json`)
        .then(res => res.json())
        .then(data => {
            textsToChange.forEach((el) =>{
                const section = el.dataset.section;
                const value = el.dataset.value;

                if(data[section] && data[section][value]){
                    el.innerHTML = data[section][value];
                }
            })
        })
};

if(menuBtn && navLinks){
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if(navLinks.classList.contains('active')){
            menuBtn.innerHTML = '×';
            menuBtn.setAttribute('aria-expanded', 'true')
        } else {
            menuBtn.innerHTML = '☰';
            menuBtn.setAttribute('aria-expanded', 'false')
        }
    });
}

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute('aria-expanded', 'false')
    })
});

langbtns.forEach((button) => {
    button.addEventListener("click", () =>{
        localStorage.setItem('portfolioLanguage', button.dataset.language);
        changeLanguage(button.dataset.language);
    })
})

changeLanguage(localStorage.getItem('portfolioLanguage') || 'es');

if(header){
    window.addEventListener("scroll",() => {
        header.classList.toggle("scrolled", window.scrollY > 0);
    });
}
