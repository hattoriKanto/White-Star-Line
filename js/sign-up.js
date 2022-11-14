"use strict";

const chooseCountry = document.querySelector("#choose-country"),
    choiceCountry = document.querySelector("#choice-country"),
    optionCountry =document.querySelectorAll(".option__country");

    chooseCountry.addEventListener("click", () =>{
        choiceCountry.classList.toggle("show-option");
        chooseCountry.classList.toggle("open");
    })

    optionCountry.forEach(elem =>{
        elem.addEventListener('click', () =>{
            chooseCountry.innerHTML = elem.querySelector(".option__label-country").innerHTML;
            choiceCountry.classList.remove("show-option");
            chooseCountry.classList.remove("open");
            body.classList.remove("noscroll");
        })
    })
    