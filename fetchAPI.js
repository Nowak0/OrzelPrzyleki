const standings = document.getElementById('standings');
const source = 'standings.html';

async function getStandings() {
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