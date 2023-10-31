const disableMessage = document.getElementById('JSnotworking');
const setStandingsVisibility=document.getElementById('standings');
disableMessage.style.display = 'none';
standings.style.display='block';
var countClicks = 0;

function changeFooter() {
    countClicks+=1;
    const getFooter = document.getElementById('footer');
    const getFooterText = document.getElementById('footerText')
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
};