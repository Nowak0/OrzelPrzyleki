const disableMessage = document.getElementById('JSnotworking');
const setStandingsVisibility = document.getElementById('standings');
disableMessage.style.display = 'none';
setStandingsVisibility.style.display = 'block';
var countClicksSlider = 1;

function addSlider() {
    const divFetch = document.getElementById('publishFetch');
    const divMain = document.getElementById('main');
    const divSlider = document.createElement('div');
    const image = document.createElement('img');
    const createText = document.createElement('p');
    const addText=document.createTextNode('Dzień Dobry');
    const goRight = document.createElement('button');
    const goLeft = document.createElement('button');
    goLeft.textContent = '&#10094;'
    goRight.textContent='wprawo';
    goLeft.classList.add('goLeft');
    goRight.classList.add('goRight');
    divSlider.classList.add('slider');
    createText.classList.add('sliderText');
    goLeft.setAttribute('id','goLeft');
    goRight.setAttribute('id','goRight');
    image.setAttribute('id','sliderImg')
    image.setAttribute('src', 'pics/rozgrzewka.jpeg');
    image.setAttribute('alt', 'zdjecie naglowkowe 1');
    goLeft.addEventListener('click',changeSlider,false);
    goRight.addEventListener('click',changeSlider,false);
    createText.appendChild(addText);
    divSlider.appendChild(image);
    divSlider.appendChild(createText);
    divSlider.appendChild(goLeft);
    divSlider.appendChild(goRight);
    divMain.insertBefore(divSlider, divFetch);
}

addSlider();

function changeSlider() {
    countClicksSlider += 1;
    const image = document.getElementById('sliderImg');
    if (countClicksSlider == 1) {
        image.setAttribute('src', 'pics/rozgrzewka.jpeg');
        image.setAttribute('alt', 'zdjecie naglowkowe 1');
    }
    if (countClicksSlider == 2) {
        image.setAttribute('src', 'pics/objecia_po_meczu.jpeg');
        image.setAttribute('alt', 'zdjecie naglowkowe 2');
        countClicksSlider = 0;
    }
}