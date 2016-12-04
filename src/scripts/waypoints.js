//First Waypoint
var $firstAnimate = $('.leftBox');
var $secondAnimate = $('.rightBox');
var $audioWaypoint = $('.audioBox');
var $tContent = $('.tContent')
var $audio = $(".music").get(0);
var $endAudio = $('.endAudio');

$(document).ready(function() {
    
    //Animate First Box Coming From Left
    $firstAnimate.css('opacity', 0);
    $(".img-right").css('opacity', 0);
	  $firstAnimate.waypoint(function(direction) {
      if (direction === 'down') {
         $(this.element).addClass('animated fadeIn');
            $(".img-right").addClass('animated fadeIn');
      }
    }, {
      offset: '35%'
    });
    
    
    //Animate Second Box coming from right
    $secondAnimate.css('opacity', 0);
     $(".img-left").css('opacity', 0);
  	$secondAnimate.waypoint(function(direction) {
      if (direction === 'down') {
         $(this.element).addClass('animated fadeIn');
            $(".img-left").addClass('animated fadeIn');
      }
    }, {
      offset: '36%'
    });
    
    //Animate Second Box coming from right
    $tContent.css('opacity', 0);
  	$tContent.waypoint(function(direction) {
      if (direction === 'down') {
         $(this.element).addClass('animated bounceIn');
      }
    }, {
      offset: '36%'
    });
    

    
    $audioWaypoint.waypoint(function(direction) 
    {
      if (direction === 'down') {
       //get a child div that's equal to .music which is in .audioBox
       var $rowMusic = $(this.element).children(".music").get(0);
       $rowMusic.play();
       console.log($rowMusic);
      }
    }, {
      offset: '35%'
    });
    
    $endAudio.waypoint(function(){
        $audio.pause();
        console.log($audio);
    });


});