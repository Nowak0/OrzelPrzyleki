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
    $("#todayDate").datepicker();
    var availableTags = [
        "gmail.com",
        "wp.pl",
        "onet.poczta.pl",
        "interia.pl",
        "yahoo.com"
      ];
    function extractLast( userInput ) {
        if (userInput.indexOf("@")!=-1){
            var getEmail=userInput.split("@");
            return getEmail[getEmail.length-1];
        }
        return "";
    }

    $( "#email" )
        // don't navigate away from the field on tab when selecting an item
        /*
        .bind( "keydown", function( event ) {
            if ( event.keyCode === $.ui.keyCode.TAB &&
                    $( this ).data( "autocomplete" ).menu.active ) {
                event.preventDefault();
            }
        })
        */
        .autocomplete({
            source: function( request, response ) {
                        var mail = extractLast(request.term);
                        if(mail.length<1){return;}
                        var matcher = new RegExp( "^" + mail, "i" );
                        response( $.grep( availableTags, function( item ){
                            return matcher.test( item );
                        }));
                       response(availableTags);
             },
            source: function (request, response) {
                var mail = extractLast(request.term);
                if(mail.length<1) {
                    return;
                }
                response(availableTags);
            },
            focus: function() {
                // prevent value inserted on focus
                return false;
            },
            select: function( event, ui ) {
                var terms = this.value.split(", ");
                // remove the current input
                var ml=terms[terms.length-1].split("@")[0];
                terms.pop();
                // add the selected item
                terms.push( ml+"@"+ui.item.value );
                this.value = terms.join( "" );
                return false;
            }
        });
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