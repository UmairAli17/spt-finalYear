var speed = 1000;

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, speed);
        return false;
      }
    }
  });
});

/**    
      Smooth Scroll
      Author: CHRIS COYIER
      Date: JANUARY 31, 2016
      Code Snippet: https://css-tricks.com/snippets/jquery/smooth-scrolling

**/