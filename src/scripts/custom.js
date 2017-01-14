//First Waypoint
var $firstAnimate = $('.leftBox');
var $secondAnimate = $('.rightBox');
var $audioWaypoint = $('.audioBox');
var $tContent = $('.tContent')
var $audio = $(".music").get(0);
var $endAudio = $('.endAudio');
var $nav = $('.top-nav');
var $logo = $('.logo-text');
var $sec1 = $('#one');
var $sec2 = $('#two');

$(document).ready(function() {

    $sec1.waypoint(function(direction){
      if(direction === 'down'){
        //change logo text
        $logo.text('IoT: A History').fadeIn();
      }
      else if (direction === 'up') {
        $logo.text('IoT').fadeIn();
      }
    },{
        offset: '5%'
    });

    $sec2.waypoint(function(direction){
      if(direction === 'down'){
        //change logo text
        $logo.text('IoT: Current Uses');
      }
      else if (direction === 'up') {
        $logo.text('IoT: A History').fadeIn();
      }
    },{
        offset: '15%'
    });
    
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

    // Animate the telegraph machine 
    $("#top_tele").waypoint(function(direction){
      if (direction == "down"){
         $(this.element).addClass('pivot');
      }
    },{
      offset: '20%'
    });

      $("#scanned_line").css('opacity', 0);
      $("#scanned_line").waypoint(function(direction){
        if (direction == "down"){
          $("#scanned_line").css('opacity', 1);
           $(this.element).addClass('animated flash')
        }
      },{
        offset: '36%'
      });
    
    $(".drinks_can").css('opacity', 0);
    $(".drinks_can").waypoint(function(direction){
        if (direction == "down"){
          $(".drinks_can").css('opacity', 1);
           $(this.element).addClass('drinks_can')
        }
      },{
        offset: '36%'
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
       //console.log($rowMusic);
      }
    }, {
      offset: '36%'
    });
    
    $endAudio.waypoint(function(){
        $audio.pause();
    });

    // SECTION TWO CARD JS

    $('.flip-card').click(function(e) {
        /*var $cardMusic = $(this.element).children(".card-audio").get(0);
        $cardMusic.play();*/
        $(this).toggleClass('flipped');
    });
});