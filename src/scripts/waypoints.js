//First Waypoint
var $firstAnimate = $('.leftBox');
var $secondAnimate = $('.rightBox');

$(document).ready(function() {
    //Animate First Box Coming From Left
    $firstAnimate.css('opacity', 0);
    $(".img-right").css('opacity', 0);
	  $firstAnimate.waypoint(function(direction) {
      if (direction === 'down') {
         $(this.element).addClass('fadeInLeft');
          $(".img-right").addClass('fadeIn');
      }
    }, {
      offset: '35%'
    });
    
    
    //Animate Second Box coming from right
    $secondAnimate.css('opacity', 0);
     $(".img-left").css('opacity', 0);
  	$secondAnimate.waypoint(function(direction) {
      if (direction === 'down') {
         $(this.element).addClass('fadeInRight');
        $(".img-left").addClass('fadeIn');
      }
    }, {
      offset: '35%'
    });


});