function adjustMap() {
    const map = document.getElementById('map');
    if (map) {
        const ratio = 0.4;
        const width = window.innerWidth - 20;
        const height = width * ratio;
        map.style.width = `${width}px`;
        map.style.height = `${height}px`;
    }
}

function setAdditionalHeight() {
    console.log("jest");
    if (window.innerWidth > 1000) {
        return 0.1 * window.innerWidth;
    }
    else {
        return 0.2 * window.innerWidth
    }
}

function adjustSponsors() {
    const stripes = document.querySelectorAll('.adjustable'); 

    if (stripes) {
        const additionalHeight = setAdditionalHeight();
        console.log(additionalHeight)
        stripes.forEach((stripe, index) => {
            const iframeDocument = stripe.contentDocument || stripe.contentWindow.document;
            stripe.style.height = iframeDocument.body.scrollHeight + additionalHeight + 'px';
        });
        console.log("haha");
    }
}

function runFunctions() {
    adjustSponsors();
    adjustMap();
}

window.onload = runFunctions;
window.addEventListener('resize', adjustMap);