const disableMessage = document.getElementById('JSnotworking');
const setStandingsVisibility = document.getElementById('standings');
disableMessage.style.display = 'none';
standings.style.display = 'block';
var countClicksFooter = 0;
var countClicksSlider = 1;

function changeFooter() {
    countClicksFooter += 1;
    const getFooter = document.getElementById('footer');
    const getFooterText = document.getElementById('footerText');
    if (countClicksFooter % 2 == 1) {
        getFooter.style.backgroundColor = 'darkred';
        getFooter.style.color = 'black';
        getFooterText.innerHTML = "Copyright &copy; 2023 - Jakub Nowak s197860";
    }
    else {
        getFooter.style.backgroundColor = 'navy';
        getFooter.style.color = 'white';
        getFooterText.innerHTML = "Copyright &copy; 2023 - Jakub Nowak";
    }
}

function addSlider() {
    const divFetch = document.getElementById('publishFetch');
    const divMain = document.getElementById('main');
    const divSlider = document.createElement('div');
    const image = document.createElement('img');
    const createText = document.createElement('p');
    const addText=document.createTextNode('Joel Embiid MVP');
    const goRight = document.createElement('button');
    const goLeft = document.createElement('button');
    goLeft.setAttribute('id','goLeft');
    goRight.setAttribute('id','goRight');
    goLeft.textContent = '&#10094;'
    goRight.textContent='wprawo';
    goLeft.classList.add('goLeft');
    goRight.classList.add('goRight');
    divSlider.classList.add('slider');
    createText.classList.add('sliderText');
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