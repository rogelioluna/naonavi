(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".header-body").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > $('.slider-container').height()) {
                $('.header-body').fadeIn();
            } else {
                $('.header-body').fadeOut();
            }
        });
    });

});
  }(jQuery));