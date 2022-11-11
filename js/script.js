"use strict";
    const menuChild = document.querySelector(".menu").cloneNode(1),
    signInChild = document.querySelector("#sign-in").cloneNode(1),
    searchBtn = document.querySelector("#search"),
    searchField = document.querySelector(".search-field"),
    popup = document.querySelector(".popup"),
    popupContent = document.querySelector(".popup__content"),
    hamburger = document.querySelector(".hamburger"),
    overlay = document.querySelector("#overlay"),
    body = document.querySelector("body");

hamburger.addEventListener("click", showPopUp);
searchBtn.addEventListener("click", showSearchBar);

function hideOverlay(e){
    e.preventDefault();
    overlay.classList.remove("show");
    body.classList.remove("noscroll");
}

// SLIDER

const sliderBtnNext = document.querySelector("#slider-btn-next"),
    sliderBtnNPrev = document.querySelector("#slider-btn-prev"),
    slider = document.querySelector(".carousel__slider"),
    sliderItem = document.querySelectorAll(".carousel-item");
let counter = 0;
    
    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnNPrev.addEventListener('click', prevSlide);

    if(counter == 0){
        sliderBtnNPrev.classList.add("hide");
    }
    
    function nextSlide(){
        alignTextCenter();
        counter++;
        slider.style.transform = 'translate(' + (-100 * counter) + '%)';
        if(counter >= sliderItem.length-1){
            sliderBtnNext.classList.add("hide");
            sliderBtnNPrev.classList.remove("hide");
        }else if(counter > 0 && sliderBtnNPrev.classList.contains("hide")){
            sliderBtnNPrev.classList.remove("hide");
        }
    }
    function alignTextCenter(){
        const text = document.querySelectorAll(".carousel-item .text"),
            desc = document.querySelectorAll(".carousel-item .text .desc");
        let counter = 1,
            countOfItems = text.length;
        for(;counter < countOfItems; counter++){
            text[counter].style.alignItems = 'center';
            desc[counter].style.textAlign = 'center';
        }
    }
    function prevSlide(){
        counter--;
        //slider.style.transform = 'translate(' + `${-stepSize * counter}px)`;
        slider.style.transform = 'translate(' + (-100 * counter) + '%)';
        if(counter <= 0){
            sliderBtnNPrev.classList.add("hide");
            sliderBtnNext.classList.remove("hide");
        }else if(counter < sliderItem.length && sliderBtnNext.classList.contains("hide")){
            sliderBtnNext.classList.remove("hide");
        }
    }
// FUNCTIONS

function showPopUp(e){
    e.preventDefault(e);
    if(searchField.classList.contains("show")){
        searchField.classList.remove("show");
        body.classList.remove("noscroll");
        searchBtn.classList.remove("transform-search");
    }
    hamburger.classList.toggle("active");
    popup.classList.toggle("show");
    body.classList.toggle("noscroll");
    popupAddContent();
}

function popupAddContent(){
    popupContent.appendChild(menuChild);
    popupContent.appendChild(signInChild);
    signInStyle();
}

function signInStyle(){
    const signInPopup = document.querySelector(".popup #sign-in");
    signInPopup.classList.add("button_orange");
}

function showSearchBar(e){
    e.preventDefault(e);
    if(popup.classList.contains("show")){
        popup.classList.remove("show");
        body.classList.remove("noscroll");
        hamburger.classList.remove("active");
    }
    searchField.classList.toggle("show");
    searchBtn.classList.toggle("transform-search");
    body.classList.toggle("noscroll-default"); 
}

//CRUISE FORM

const choiceDeparture = document.querySelector("#choice-departure"),
    choiceDestination = document.querySelector("#choice-destination"),
    chooseDeparture = document.querySelector("#choose-departure"),
    chooseDestination = document.querySelector("#choose-destination"),
    chooseDate = document.querySelector("#choose-date"),
    choiceDate = document.querySelector("#choice-date"),
    optionDate = document.querySelectorAll(".date__option"),
    optionDeparture = document.querySelectorAll(".option__departure"),
    optionDestination = document.querySelectorAll(".option__destination");

chooseDeparture.addEventListener('click', () => {
    choiceDeparture.classList.toggle("show-option");
    chooseDeparture.classList.toggle("open");
    body.classList.toggle("noscroll");
    if((choiceDestination.classList.contains("show-option") || chooseDestination.classList.contains("open")) || (choiceDate.classList.contains("show-option") || chooseDate.classList.contains("open"))){
        choiceDestination.classList.remove("show-option");
        chooseDestination.classList.remove("open");
        choiceDate.classList.remove("show-option");
        chooseDate.classList.remove("open");
    }
})

chooseDestination.addEventListener('click', () => {
    choiceDestination.classList.toggle("show-option");
    chooseDestination.classList.toggle("open");
    body.classList.toggle("noscroll");
    if((choiceDeparture.classList.contains("show-option") || chooseDeparture.classList.contains("open")) || (choiceDate.classList.contains("show-option") || chooseDate.classList.contains("open"))){
        choiceDeparture.classList.remove("show-option");
        chooseDeparture.classList.remove("open");
        choiceDate.classList.remove("show-option");
        chooseDate.classList.remove("open");
    }
})

chooseDate.addEventListener('click', () => {
    choiceDate.classList.toggle("show-option");
    chooseDate.classList.toggle("open");
    body.classList.toggle("noscroll");
    if((choiceDeparture.classList.contains("show-option") || chooseDeparture.classList.contains("open")) || (choiceDestination.classList.contains("show-option") || chooseDestination.classList.contains("open")) ){
        choiceDeparture.classList.remove("show-option");
        chooseDeparture.classList.remove("open");
        choiceDestination.classList.remove("show-option");
        chooseDestination.classList.remove("open");
    }
})

optionDestination.forEach(elem =>{
    elem.addEventListener('click', () =>{
        chooseDestination.innerHTML = elem.querySelector(".option__label-destination").innerHTML;
        choiceDestination.classList.remove("show-option");
        chooseDestination.classList.remove("open");
        body.classList.remove("noscroll");
    })
})

optionDeparture.forEach(elem =>{
    elem.addEventListener('click', () =>{
        chooseDeparture.innerHTML = elem.querySelector(".option__label-departure").innerHTML;
        choiceDeparture.classList.remove("show-option");
        chooseDeparture.classList.remove("open");
        body.classList.remove("noscroll");
    })
})

optionDate.forEach(elem =>{
    elem.addEventListener('click', () =>{
        const dateColumn = elem.closest(".date__column");
        const dateTitle = dateColumn.querySelector(".date__title");
        chooseDate.innerHTML = elem.querySelector(".option__label-date").innerHTML + ' ' +  dateTitle.innerHTML;
        choiceDate.classList.remove("show-option");
        chooseDate.classList.remove("open");
        body.classList.remove("noscroll");
    })
})