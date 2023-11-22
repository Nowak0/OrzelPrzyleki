const x = document.getElementById("getLocation");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    showError(x);
  } 
  else {
    x.innerHTML = "Geolocation is not supported by this browser.";
    document.getElementById("getLocation").style.display="none";
  }
} 

function showPosition(position) {
  x.innerHTML = "Twoja szerokość geograficzna: " + position.coords.latitude +
  "<br>Twoja długość geograficzna: " + position.coords.longitude +"<br>";
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "Polecenie o otrzymanie lokalizacji zostało odrzucone."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Informacja o lokalizacji niedostępna."
        break;
      case error.TIMEOUT:
        x.innerHTML = "Polecenie przestało być ważne."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "Wystąpił nieznany problem."
        break;
      default:
        break;
    }
}