let countClicksSlider = 1;
let timeout;

function startTimeout() {
    timeout=window.setTimeout(changeSlider,5000);
}


function resetAnimation() {
    const image=document.getElementById('sliderImg');
    const text = document.getElementById('sliderItems');
    image.style.animation='none';
    image.offsetHeight;
    image.style.animation=null;
    text.style.animation='none';
    text.offsetHeight;
    text.style.animation=null;
}


function sliderButtonsFunctions() {
    const goRight = document.getElementById('goRight');
    const goLeft = document.getElementById('goLeft');
    goLeft.onclick = function() {
        if(countClicksSlider>=2) {countClicksSlider-=2;}
        else if(countClicksSlider>3) {countClicksSlider=0;}
        else {countClicksSlider+=1;}
        changeSlider();
    }
    goRight.onclick = function() {
        changeSlider();
    }
    startTimeout();
}


function addSlider() {
    const divFetch = document.getElementById('publishFetch');
    const divMain = document.getElementById('main');
    const divSlider = document.createElement('div');
    const image = document.createElement('img');
    const createText = document.createElement('p');
    createText.innerHTML="Zawsze walczymy do końca!<br> Dołącz do nas!"
    const goRight = document.createElement('button');
    const goLeft = document.createElement('button');
    goLeft.innerHTML='&#129028;';
    goRight.innerHTML='&#129030;';
    divSlider.classList.add('slider');
    createText.classList.add('sliderText');
    image.classList.add('sliderImg');
    createText.setAttribute('id','sliderText');
    goLeft.setAttribute('id','goLeft');
    goRight.setAttribute('id','goRight');
    image.setAttribute('id','sliderImg')
    image.setAttribute('src', 'pics/rozgrzewkaSlider.jpeg');
    image.setAttribute('alt', 'zdjecie naglowkowe 1');
    goLeft.onclick = function() {
        if(countClicksSlider>=2) {countClicksSlider-=2;}
        else if(countClicksSlider>3) {countClicksSlider=0;}
        else {countClicksSlider+=1;}
        changeSlider();
    }
    goRight.onclick = function() {
        changeSlider();
    }
    divSlider.appendChild(image);
    divSlider.appendChild(createText);
    divSlider.appendChild(goLeft);
    divSlider.appendChild(goRight);
    divMain.insertBefore(divSlider, divFetch);
    startTimeout();
}


//addSlider();


function changeSlider() {
    countClicksSlider+=1;
    const image = document.getElementById('sliderImg');
    const smallText = document.getElementById('smallSliderText');
    const bigText = document.getElementById('bigSliderText');
    const button = document.getElementById('sliderButton');

    clearTimeout(timeout);
    resetAnimation();
    if (countClicksSlider == 1) {
        image.setAttribute('src', 'pics/rozgrzewkaSlider.jpeg');
        image.setAttribute('alt', 'zdjecie naglowkowe 1');
        smallText.innerHTML = "Drużyna seniorów";
        bigText.innerHTML="Zawsze walczymy do końca!<br> Dołącz do nas!";
        button.innerHTML = "terminarz";
    }
    if (countClicksSlider == 2) {
        image.setAttribute('src', 'pics/juniorzySlider.jpg');
        image.setAttribute('alt', 'zdjecie naglowkowe 2');
        smallText.innerHTML = "Drużyna juniorów";
        bigText.innerHTML="Szkolimy małe Orlęta";
        button.innerHTML = "dowiedz się więcej";
    }
    if (countClicksSlider == 3) {
        image.setAttribute('src','pics/wsparcie_slider.jpg');
        image.setAttribute('alt','zdjecie naglowkowe 3');
        smallText.innerHTML = "Współpraca";
        bigText.innerHTML="Skontaktuj się z nami";
        button.innerHTML = "dowiedz się więcej";
        countClicksSlider = 0;
    }
    startTimeout();
}


window.onscroll = function() {
    scrollFunction();
}


function scrollFunction() {
    const goToTop = document.getElementById('goToTop');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goToTop.style.display = 'block';
    }
    else {
        goToTop.style.display = 'none';
    }
}


function sliderButtonAction() {
    if (countClicksSlider == 1) {
        window.location.href="";
    }
    if (countClicksSlider == 2) {
        window.location.href="";
    }
    if (countClicksSlider == 3) {
        window.location.href="";
    }
}


$(document).ready(function(){
    $("a").on('click', function() {
        if(this.hash!=='') {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
    });
  });


sliderButtonsFunctions();