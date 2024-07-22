function adjustMap() {
            const map = document.getElementById('map');
            const ratio = 0.2;
            const width = window.innerWidth;
            const height = width * ratio;
            map.style.width = `${width}px`;
            map.style.height = `${height}px`;
}

window.onload = adjustMap;
window.onresize = adjustMap;