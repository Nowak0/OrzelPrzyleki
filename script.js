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
    goLeft.innerHTML='&#129028;';
    goRight.innerHTML='&#129030;';
    //goLeft.textContent = '<i class="&#129028;"></i>'
    //goRight.textContent='wprawo';
    //goLeft.classList.add('goLeft');
    //goRight.classList.add('goRight');
    divSlider.classList.add('slider');
    createText.classList.add('sliderText');
    createText.setAttribute('id','sliderText');
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
//'<i class="fa fa-trash-o" aria-hidden="true"></i>'
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

const goToTopButton = document.getElementById('goToTop');
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goToTopButton.style.display = 'block';
    }
    else {
        goToTopButton.style.display = 'none';
    }
}

function goToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#goToTop").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      var action=this.hash

      if (action !== "") {
        // Prevent default anchor click behavior
        //event.preventDefault();
  
        // Store hash
        //var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(action).offset().top
        }, 800);
      } // End if
    });
  });