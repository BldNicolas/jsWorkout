const cookie = document.getElementById("cookie")
const count = document.getElementById("count")

let nbCookies = 0

cookie.addEventListener("click", function(event) {
    updateCookies(nbCookies++)
})

function updateCookies(nb)
{
    count.textContent = nb;
}