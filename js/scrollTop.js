window.onscroll = function() {
    let goToTop = document.querySelectorAll('.goToTop');
    goToTop.forEach((button) => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            button.style.display = 'block';
        }
        else {
            if(goToTop) {
                button.style.display = 'none';
            }
        }

        button.style.color = 'white';
    });
}

// $(document).ready(function(){
//     $("a").on('click', function() {
//         if(this.hash!=='') {
//             $('html, body').animate({
//                 scrollTop: 0
//             }, 0);
//         }
//     });
//   });

