(function ($) {


  $(function () {
    $('.nav a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

      $('html, body').animate({
        scrollTop: targetOffset - 100
      }, 500);
    });

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



