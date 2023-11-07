var countClicksFooter = 0;

function changeFooter(idFooter,idFooterParagraph) {
    countClicksFooter += 1;
    const getFooter = document.getElementById(idFooter);
    const getFooterText = document.getElementById(idFooterParagraph);
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