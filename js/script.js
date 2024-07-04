window.onscroll = function() {
    scrollFunction();
    if($(window).scrollTop() > 50) {
        $("header").addClass("activeScroll");
        $(".subnavHeader").addClass("activeScroll");
    } else {
       $("header").removeClass("activeScroll");
       $(".subnavHeader").removeClass("activeScroll");
    }
}


function scrollFunction() {
    let goToTop = document.getElementById('goToTop');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goToTop.style.display = 'block';
    }
    else {
        if(goToTop) {
            goToTop.style.display = 'none';
        }
    }
}


$(document).ready(function(){
    $("a").on('click', function() {
        if(this.hash!=='') {
            $('html, body').animate({
                scrollTop: 0
            }, 0);
        }
    });
  });

