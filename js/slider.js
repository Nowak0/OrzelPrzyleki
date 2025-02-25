let countClicksSlider = 1;
let timeout;

function startTimeout() {
    timeout=window.setTimeout(changeSlider,5000);
}


function resetAnimation() {
    const image = document.getElementById('sliderImg');
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


function changeSlider() {
    countClicksSlider+=1;
    let image = document.getElementById('sliderImg');
    let smallText = document.getElementById('smallSliderText');
    let bigText = document.getElementById('bigSliderText');
    let button = document.getElementById('sliderButton');

    clearTimeout(timeout);
    resetAnimation();
    if (countClicksSlider == 1) {
        image.setAttribute('src', 'pics/rozgrzewkaSlider.jpeg');
        image.setAttribute('alt', 'zdjecie naglowkowe 1');
        smallText.innerHTML = "Drużyna seniorów";
        bigText.innerHTML="Zawsze walczymy do końca!<br> Dołącz do nas!";
        button.innerHTML = "drużyna seniorów";
    }
    if (countClicksSlider == 2) {
        image.setAttribute('src', 'pics/juniorzySlider.jpg');
        image.setAttribute('alt', 'zdjecie naglowkowe 2');
        smallText.innerHTML = "Orzeł Academy";
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

function sliderButtonAction() {
    if (countClicksSlider == 1) {
        window.location.href="team.html";
    }
    if (countClicksSlider == 2) {
        window.location.href="academy.html";
    }
    if (countClicksSlider == 3 || countClicksSlider == 0) {
        window.location.href="contact.html";
    }
}


sliderButtonsFunctions();