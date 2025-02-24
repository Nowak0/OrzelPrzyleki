function mobileResponsiveMenu() {
    var navElements = document.querySelectorAll(".topnav");

    navElements.forEach(function(this_nav) {
      this_nav.classList.toggle("mobileResponsiveMenu");
      if(this_nav.classList.contains("mobileResponsiveMenu")) {
        this_nav.style.paddingBottom = "50px";
      } else {
        this_nav.style.paddingBottom = "0px";
      }
    });
  }
  