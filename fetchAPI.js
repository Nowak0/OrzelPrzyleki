const standings = document.getElementById('standings');
const source = 'test2.html';
const disableMessage = document.getElementById('JSnotworking');

async function getStandings() {
    disableMessage.style.display = 'none';
    try {
        const response = await fetch(source);
        const data = await response.text();
        if (response.status === 200) {
            standings.innerHTML = data;
        }
        else {
            standings.innerHTML = 'Server Error ' + data.error.message;
        }
    } catch (error) {
        standings.innerHTML = 'Fetch Error ' + error.message;
    }
}