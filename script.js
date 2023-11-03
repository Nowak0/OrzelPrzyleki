const disableMessage = document.getElementById('JSnotworking');
const setStandingsVisibility=document.getElementById('standings');
disableMessage.style.display = 'none';
standings.style.display='block';
var countClicks = 0;

function changeFooter() {
    countClicks+=1;
    const getFooter = document.getElementById('footer');
    const getFooterText = document.getElementById('footerText');
    if (countClicks%2==1) {
    getFooter.style.backgroundColor='darkred';
    getFooter.style.color='black';
    getFooterText.innerHTML = "Copyright &copy; 2023 - Jakub Nowak s197860";
    } 
    else {
        getFooter.style.backgroundColor='navy';
        getFooter.style.color='white';
        getFooterText.innerHTML = "Copyright &copy; 2023 - Jakub Nowak";
    }
}

function addSlider() {
    const divFetch = document.getElementById('publishFetch');
    const divSlider = document.createElement('div');
    const standings = document.getElementById('standings');
    divSlider.classList.add('slider');
    const divContent = document.createTextNode("Siemano, narazie dodam tu tylko text");
    divSlider.appendChild(divContent);
    divFetch.insertBefore(divSlider,standings);
}

addSlider();