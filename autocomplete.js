$(document).ready(function() {
    var availableTags = [
        "gmail.com",
        "wp.pl",
        "onet.poczta.pl",
        "interia.pl",
        "yahoo.com"
      ];
      function extractLast( val ) {
        if (val.indexOf("@")!=-1){
            var tmp=val.split("@");
            console.log(tmp[tmp.length-1]);
            return tmp[tmp.length-1];
        }
        console.log("returning empty");
        return "";
    }

    $( "#email" )
        // don't navigate away from the field on tab when selecting an item
        .bind( "keydown", function( event ) {
            if ( event.keyCode === $.ui.keyCode.TAB &&
                    $( this ).data( "autocomplete" ).menu.active ) {
                event.preventDefault();
            }
        })
        .autocomplete({
            minLength: 1,
            source: function( request, response ) {
                        var mail = extractLast(request.term);
                        if(mail.length<1){return;}
                        var matcher = new RegExp( "^" + mail, "i" );
                        response( $.grep( availableTags, function( item ){
                            return matcher.test( item );
                        }));
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
                // add placeholder to get the comma-and-space at the end
                terms.push( "" );
                this.value = terms.join( "" );
                return false;
            }
        });
});

/*
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#goToTop").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      var action=this.hash
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      if (action !== "") {
        // Prevent default anchor click behavior
        //event.preventDefault();
  
        // Store hash
        //var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       
      } // End if
    });
  });
  //scrollTop: $(action).offset().top

  */