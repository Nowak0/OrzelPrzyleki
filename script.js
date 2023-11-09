const disableMessage = document.getElementById('JSnotworking');
const setStandingsVisibility = document.getElementById('standings');
const goToTop = document.getElementById('goToTop');
disableMessage.style.display = 'none';
setStandingsVisibility.style.display = 'block';
var countClicksSlider = 1;
var timeout;

function startTimeout() {
    timeout=window.setTimeout(changeSlider,5000);
}

function addSlider() {
    const divFetch = document.getElementById('publishFetch');
    const divMain = document.getElementById('main');
    const divSlider = document.createElement('div');
    const image = document.createElement('img');
    const createText = document.createElement('p');
    const addText=document.createTextNode('DZIEŃ DOBRY');
    const goRight = document.createElement('button');
    const goLeft = document.createElement('button');
    goLeft.innerHTML='&#129028;';
    goRight.innerHTML='&#129030;';
    //goLeft.textContent = '<i class="&#129028;"></i>'
    //goRight.textContent='wprawo';
    //goLeft.classList.add('goLeft');
    //goRight.classList.add('goRight');
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

    createText.appendChild(addText);
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
    const goLeft = document.getElementById('goLeft');
    const goRight = document.getElementById('goRight');
    clearTimeout(timeout);
    resetAnimation();
    if (countClicksSlider == 1) {
        image.setAttribute('src', 'pics/rozgrzewkaSlider.jpeg');
        image.setAttribute('alt', 'zdjecie naglowkowe 1');
    }
    if (countClicksSlider == 2) {
        image.setAttribute('src', 'pics/juniorzySlider.jpg');
        image.setAttribute('alt', 'zdjecie naglowkowe 2');
    }
    if (countClicksSlider == 3) {
        image.setAttribute('src','pics/wsparcie_slider.jpg');
        image.setAttribute('alt','zdjecie naglowkowe 3');
        countClicksSlider = 0;
    }
    startTimeout();
}

function resetAnimation() {
    const image=document.getElementById('sliderImg');
    image.style.animation='none';
    image.offsetHeight;
    image.style.animation=null;
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