function adjustMap() {
            const map = document.getElementById('map');
            const ratio = 0.4;
            const width = window.innerWidth - 20;
            const height = width * ratio;
            map.style.width = `${width}px`;
            map.style.height = `${height}px`;
}

window.onload = adjustMap;
window.onresize = adjustMap;