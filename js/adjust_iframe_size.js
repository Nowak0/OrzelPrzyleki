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
        stripes.forEach((stripe, index) => {
            try {
                const iframeDocument = stripe.contentDocument || stripe.contentWindow.document;
                if (iframeDocument) {
                    stripe.style.height = iframeDocument.body.scrollHeight + additionalHeight + 'px';
                }
            } catch (error) {
                console.error('Error accessing iframe content:', error);
            }
            if (stripe.complete) {
                stripe.dispatchEvent(new Event('load'));
            }
        });
    }
}

function runFunctions() {
    adjustSponsors();
    adjustMap();
}

window.onload = runFunctions;
window.addEventListener('resize', adjustMap);