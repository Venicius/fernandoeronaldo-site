(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
  //pega a largura da resolução da tela
  var width = screen.width;
  //pega a altura da resolução da tela
  var height = screen.height;
  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $(document).ready(function () {
      });
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $(document).ready(function () {
      });
    }

    if (width <= 800 || height <= 600) {
      $('#imageoption').attr('src', 'img/brand-logo-branco.png');
    } else {
      if ($("#mainNav").offset().top > 100) {
        $(document).ready(function () {
          $('#imageoption').attr('src', 'img/brand-logo-branco.png');
        });
      } else {
        $(document).ready(function () {
          $('#imageoption').attr('src', 'img/brand-logo-branco.png');
        });
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
