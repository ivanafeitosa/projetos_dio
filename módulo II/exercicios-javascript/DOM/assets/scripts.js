
function changeMode() {    
    changeClass();
    changeText();   
}

function changeClass() {
    btn.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText () {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) {
        h1.innerHTML = darkMode + " ON";
        btn.innerHTML = lightMode;
        return;
    }

    h1.innerHTML = lightMode + " ON";
    btn.innerHTML = darkMode;
}

const darkModeClass = 'dark-mode';
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementById('page-title');
const btn = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];

btn.addEventListener('click', changeMode);
