"use strict";

const chooseCountry = document.querySelector("#choose-country"),
    chooseTextCountry =document.querySelector(".choose__text-country"),
    choiceCountry = document.querySelector("#choice-country"),
    optionCountry =document.querySelectorAll(".option__country");

    chooseCountry.addEventListener("click", () =>{
        choiceCountry.classList.toggle("show-option");
        chooseTextCountry.classList.toggle("open");
    })

    optionCountry.forEach(elem =>{
        elem.addEventListener('click', () =>{
            chooseTextCountry.innerHTML = elem.querySelector(".option__label-country").innerHTML;
            choiceCountry.classList.remove("show-option");
            chooseTextCountry.classList.remove("open");
            body.classList.remove("noscroll");
        })
    })
    