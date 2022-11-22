let avatarEls = document.querySelectorAll("img");

for (let i = 0; i < avatarEls.length; i++) {
    avatarEls[i].innerHTML = i.toString();
    avatarEls[i].style.height = "200px";
    avatarEls[i].title = "infobulle";
    avatarEls[i].alt = "je suis un alt";
}













