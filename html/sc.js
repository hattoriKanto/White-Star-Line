const choice = document.querySelector(".form__choice"),
    img = document.querySelector(".form__img"),
    option = document.querySelectorAll(".option"),
    choose = document.querySelector(".form__choose");

choose.addEventListener('click', showChoiceSection);

function showChoiceSection(e){
    e.preventDefault(e);
    choice.classList.toggle("show");
    img.classList.toggle("open");
}

const container = document.querySelector(".container");
const formItem = document.querySelector(".form__item");

console.log(formItem.closest('.form__title'));