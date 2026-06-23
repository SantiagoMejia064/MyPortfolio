const header = document.querySelector('header');

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('header-nav-links');
const links = navLinks.querySelectorAll('a');

const langbtns = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");


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


langbtns.forEach((button) => {
    button.addEventListener("click", () =>{
        fetch(`../src/data/${button.dataset.language}.json`)
            .then(res => res.json())
            .then(data => {
                textsToChange.forEach((el) =>{
                    const section = el.dataset.section;
                    const value = el.dataset.value;

                    el.innerHTML = data[section][value];
                })
            })
    })
})


window.addEventListener("scroll",() => {

    header.classList.toggle("scrolled", window.scrollY > 0);
});

