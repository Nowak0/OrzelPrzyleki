function adjustMap() {
    const map = document.getElementById('map');
    const ratio = 0.4;
    const width = window.innerWidth - 20;
    const height = width * ratio;
    map.style.width = `${width}px`;
    map.style.height = `${height}px`;
}

function adjustSponsors() {
    const stripes = document.querySelectorAll('.adjustable'); 
    stripes.forEach((stripe, index) => {
        const iframeDocument = stripe.contentDocument || stripe.contentWindow.document;
        stripe.style.height = iframeDocument.body.scrollHeight + 200 + 'px';
    });
}

window.onload = adjustMap;
window.onresize = adjustMap;
window.onload = adjustSponsors;
window.onresize = adjustSponsors;