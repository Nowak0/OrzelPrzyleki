const disableMessage = document.getElementById('JSnotworking');
const setStandingsVisibility = document.getElementById('standings');
const goToTop = document.getElementById('goToTop');
disableMessage.style.display = 'none';
setStandingsVisibility.style.display = 'block';
let countClicksSlider = 1;
let timeout;

function startTimeout() {
    timeout=window.setTimeout(changeSlider,5000);

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

addSlider();

function changeSlider() {
    countClicksSlider+=1;
    const image = document.getElementById('sliderImg');
    const text = document.getElementById('sliderText');
    clearTimeout(timeout);
    resetAnimation();
    if (countClicksSlider == 1) {
        image.setAttribute('src', 'pics/rozgrzewkaSlider.jpeg');
        image.setAttribute('alt', 'zdjecie naglowkowe 1');
        text.innerHTML="Zawsze walczymy do końca!<br> Dołącz do nas!"
    }
    if (countClicksSlider == 2) {
        image.setAttribute('src', 'pics/juniorzySlider.jpg');
        image.setAttribute('alt', 'zdjecie naglowkowe 2');
        text.innerHTML="Szkolimy małe Orlęta";
    }
    if (countClicksSlider == 3) {
        image.setAttribute('src','pics/wsparcie_slider.jpg');
        image.setAttribute('alt','zdjecie naglowkowe 3');
        text.innerHTML="Skontaktuj się z nami"
        countClicksSlider = 0;
    }
    startTimeout();
}

function resetAnimation() {
    const image=document.getElementById('sliderImg');
    const text = document.getElementById('sliderText');
    image.style.animation='none';
    image.offsetHeight;
    image.style.animation=null;
    text.style.animation='none';
    text.offsetHeight;
    text.style.animation=null;
}

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goToTop.style.display = 'block';
    }
    else {
        goToTop.style.display = 'none';
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