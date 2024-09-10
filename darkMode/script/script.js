const headers = document.querySelectorAll('header')
const body = document.querySelector('body')
const toggleDarkModeBtn = document.getElementById('toggleDarkMode')

toggleDarkModeBtn.addEventListener('click', function(event) {
    headers.forEach(header => {
        header.classList.toggle('dark-header')
    });
    body.classList.toggle('dark')
    Array.from(toggleDarkModeBtn.children).forEach(child => {
        child.classList.toggle('hidden')
    })
})