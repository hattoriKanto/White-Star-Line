"use strict";
    const menuChild = document.querySelector(".menu").cloneNode(1),
    signInChild = document.querySelector("#sign-in").cloneNode(1),
    closeBtn = document.querySelector("#close"),
    signIn = document.querySelector("#sign-in"),
    searchBtn = document.querySelector("#search"),
    searchField = document.querySelector(".search-field"),
    popup = document.querySelector(".popup"),
    popupContent = document.querySelector(".popup__content"),
    hamburger = document.querySelector(".hamburger"),
    overlay = document.querySelector("#overlay"),
    overlayBg = document.querySelector("#overlay-bg"),
    body = document.querySelector("body");

hamburger.addEventListener("click", showPopUp);
searchBtn.addEventListener("click", showSearchBar);
signIn.addEventListener("click", showOverlay);
closeBtn.addEventListener("click", hideOverlay);
overlayBg.addEventListener("click", hideOverlay);
signInChild.addEventListener("click", showOverlay);

function showOverlay(e){
    e.preventDefault();
    overlay.classList.add("show");
    if(popup.classList.contains("show")){
        popup.classList.remove("show");
        body.classList.remove("noscroll");
    }
    if(searchField.classList.contains("show")){
        searchField.classList.remove("show");
        body.classList.remove("noscroll");
    }
    if(hamburger.classList.contains("active")){
        hamburger.classList.remove("active");
    }
    body.classList.add("noscroll");
}

function hideOverlay(e){
    e.preventDefault();
    overlay.classList.remove("show");
    body.classList.remove("noscroll");
}

// SLIDER

const sliderBtnNext = document.querySelector("#slider-btn-next"),
    sliderBtnNPrev = document.querySelector("#slider-btn-prev"),
    slider = document.querySelector(".carousel__slider"),
    sliderItem = document.querySelectorAll(".carousel-item"),
    siderI = document.querySelector(".carousel-item");
let counter = 0;
    
    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnNPrev.addEventListener('click', prevSlide);
    console.log(counter);

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
        console.log(counter);
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
    body.classList.toggle("noscroll");
}