$(document).ready(function() {
    var countClicks=0;
    $("input").focus(function() {
        $(this).css("background-color", "navy");
        $(this).css("color", "white");
    });
    $("input").blur(function() {
        $(this).css("background-color", "whitesmoke");
        $(this).css("color", "black");
    });
    var availableTags = [
        "@gmail.com",
        "@wp.pl",
        "@onet.poczta.pl"
      ];
    $("#email").on("click", function() {
        var input = $(this).val();
        if(input=="@") {
            $( "#email" ).autocomplete({
                source: availableTags
            });
        }
    })
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