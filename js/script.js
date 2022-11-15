"use strict";

const menuChild = document.querySelector(".menu").cloneNode(1),
    signInChild = document.querySelector("#sign-in").cloneNode(1),
    searchBtn = document.querySelector("#search"),
    searchField = document.querySelector(".search-field"),
    popup = document.querySelector(".popup"),
    popupContent = document.querySelector(".popup__content"),
    hamburger = document.querySelector(".hamburger"),
    body = document.querySelector("body");

hamburger.addEventListener("click", () =>{
    if(searchField.classList.contains("show")){
        searchField.classList.remove("show");
        body.classList.remove("noscroll-default");
        searchBtn.classList.remove("transform-search");
    } else if(choiceDestination.classList.contains("show-option") || choiceDeparture.classList.contains("show-option") || choiceDate.classList.contains("show-option")){
        choiceDestination.classList.remove("show-option");
        choiceDeparture.classList.remove("show-option");
        choiceDate.classList.remove("show-option");
        chooseDestination.classList.remove("open");
        chooseDeparture.classList.remove("open");
        chooseDate.classList.remove("open");
        body.classList.remove("noscroll");
    }
    hamburger.classList.toggle("active");
    body.classList.toggle("noscroll");
    popup.classList.toggle("show");
    popupAddContent();
}); 

// SEARCH BAR

searchBtn.addEventListener("click", () =>{
    if(popup.classList.contains("show")){
        popup.classList.remove("show");
        body.classList.remove("noscroll");
        hamburger.classList.remove("active");
    } else if(choiceDestination.classList.contains("show-option") || choiceDeparture.classList.contains("show-option") || choiceDate.classList.contains("show-option")){
        choiceDestination.classList.remove("show-option");
        choiceDeparture.classList.remove("show-option");
        choiceDate.classList.remove("show-option");
        chooseDestination.classList.remove("open");
        chooseDeparture.classList.remove("open");
        chooseDate.classList.remove("open");
        body.classList.remove("noscroll");
    }
    searchField.classList.toggle("show");
    searchBtn.classList.toggle("transform-search");
    body.classList.toggle("noscroll-default"); 
});

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

function popupAddContent(){
    popupContent.appendChild(menuChild);
    popupContent.appendChild(signInChild);
    signInStyle();
}

function signInStyle(){
    const signInPopup = document.querySelector(".popup #sign-in");
    signInPopup.classList.add("button_orange");
}
// CRUISE FORM

const choiceDeparture = document.querySelector("#choice-departure"),
    choiceDestination = document.querySelector("#choice-destination"),
    chooseDeparture = document.querySelector("#choose-departure"),
    chooseDestination = document.querySelector("#choose-destination"),
    chooseDate = document.querySelector("#choose-date"),
    choiceDate = document.querySelector("#choice-date"),
    optionDate = document.querySelectorAll(".date__option"),
    optionDeparture = document.querySelectorAll(".option__departure"),
    optionDestination = document.querySelectorAll(".option__destination");

chooseDeparture.addEventListener('click', () =>{
    choiceDeparture.classList.toggle("show-option");
    chooseDeparture.classList.toggle("open");
    body.classList.toggle("noscroll");
    if((choiceDestination.classList.contains("show-option") || chooseDestination.classList.contains("open")) || (choiceDate.classList.contains("show-option") || chooseDate.classList.contains("open"))){
        choiceDestination.classList.remove("show-option");
        chooseDestination.classList.remove("open");
        choiceDate.classList.remove("show-option");
        chooseDate.classList.remove("open");
        body.classList.remove("noscroll");
    }
    document.addEventListener('click', (e) =>{
        if(choiceDeparture.classList.contains("show-option") & !chooseDeparture.contains(e.target)){
            chooseDeparture.classList.remove("open");
            choiceDeparture.classList.remove("show-option");
            body.classList.toggle("noscroll");
        }
    })
});
chooseDestination.addEventListener('click', () =>{
    choiceDestination.classList.toggle("show-option");
    chooseDestination.classList.toggle("open");
    body.classList.toggle("noscroll");
    if((choiceDeparture.classList.contains("show-option") || chooseDeparture.classList.contains("open")) || (choiceDate.classList.contains("show-option") || chooseDate.classList.contains("open"))){
        choiceDeparture.classList.remove("show-option");
        chooseDeparture.classList.remove("open");
        choiceDate.classList.remove("show-option");
        chooseDate.classList.remove("open");
        body.classList.remove("noscroll");
    }
    document.addEventListener('click', (e) =>{
        if(choiceDestination.classList.contains("show-option") & !chooseDestination.contains(e.target)){
            chooseDestination.classList.remove("open");
            choiceDestination.classList.remove("show-option");
            body.classList.toggle("noscroll");
        }
    })
});

chooseDate.addEventListener('click', () => {
    choiceDate.classList.toggle("show-option");
    chooseDate.classList.toggle("open");
    body.classList.toggle("noscroll");
    if((choiceDeparture.classList.contains("show-option") || chooseDeparture.classList.contains("open")) || (choiceDestination.classList.contains("show-option") || chooseDestination.classList.contains("open")) ){
        choiceDeparture.classList.remove("show-option");
        chooseDeparture.classList.remove("open");
        choiceDestination.classList.remove("show-option");
        chooseDestination.classList.remove("open");
        body.classList.remove("noscroll");
    }
    document.addEventListener('click', (e) =>{
        if(choiceDate.classList.contains("show-option") & !chooseDate.contains(e.target)){
            chooseDate.classList.remove("open");
            choiceDate.classList.remove("show-option");
            body.classList.toggle("noscroll");
        }
    })
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