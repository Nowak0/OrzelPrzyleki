const locationButton = document.getElementById('getLocation');
const locationText=document.getElementById('infoStadium');
locationButton.style.display='inline';
locationText.style.display='block';
$(document).ready(function() {
    var countClicks=0;
    $("input").focus(function() {
        $(this).css("background-color", "lightskyblue");
        $(this).css("color", "white");
    });
    $("input").blur(function() {
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    });
    $("#todayDate").datepicker();
    $("#infoStadium").dialog({
        autoOpen: false,
        modal: true,
        show: {
            effect: "fade",
            duration: 1000
        },
        hide: {
            effect: "blind",
            duration: 500
        }
    });
    $("#stadium").mouseenter(function(){
        countClicks+=1;
        if(countClicks<=1) {
        $("#infoStadium").dialog("open");
        }
    });
});