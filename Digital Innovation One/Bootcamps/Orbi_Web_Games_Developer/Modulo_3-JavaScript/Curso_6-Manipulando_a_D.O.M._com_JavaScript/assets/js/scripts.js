function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Apaga a luz, tá muito claro!";
    const darkMode = "Acende a luz, tá muito escuro!";

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = "Acender a luz";
        h1.innerHTML = darkMode;
        return;
    }

    button.innerHTML = "Apagar a luz";
        h1.innerHTML = lightMode;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)