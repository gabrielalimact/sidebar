const body = document.querySelector('body')
const sidebar = document.querySelector('nav')
const toggle = document.querySelector(".toggle")
const searchBtn = document.querySelector(".search-box")
const modeSwitch = document.querySelector(".toggle-switch")
const modeText = document.querySelector(".mode-text")

toggle.addEventListener('click', () => {
    console.log('aqui')
    sidebar.classList.toggle('close');
})

searchBtn.addEventListener('click', () => {
    searchBtn.classList.remove('close');
})

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(body.classList.contains('dark')) {
        modeText.innerText = 'Dark Mode';
    } else {
        modeText.innerText = 'Light Mode';
    }
})
