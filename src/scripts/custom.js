//First Waypoint
var $body = $('body');
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

var $sprite = $('.sprite-container');
var $speech_bubble = $('#speech'); 
var $speech1 = $('.speech-text1'); 
var $speech2 = $('.speech-text2');
var $intro = $('.overlay-container');
var $enter = $('.enter');

var scrollTop = window.scrollTo(0,0); 
var $finalSec = $('#three');
var $secThreeContent = $('.three-titles');

var $finalBtn = $('.danger');

var $dcards = $('.danger-cards');
var $bye = $('.the-end');
var $endBtn = $('.finally');

var $endTitles = $('.end-titles');


$(document).ready(function() {
    

    /* remove ability to scroll on load */
    $body.css('overflow-y', 'hidden');
    // hide the final section until the final button is pressed
    $finalSec.hide();
    // hide the good-bye section
    $bye.hide();
    /*overlay js*/
    if (localStorage.getItem("session") === null) {
        // if there is nothing in session, show the introduction
        $intro.show();
        $audio.pause();

    }
    // if there is however, hide it. 
    else{
      $intro.hide();
      $body.css('overflow-y', 'visible');
    }
  

    
    $('.overlay-title').addClass('animated slideInDown');
    
    // when user clicks enter button
    $enter.click(function() {
      // hide introduction
      $intro.hide();
      // set a value to the session so that it will hide it each time
      localStorage.setItem("session", 1);
      $body.css('overflow-y', 'visible');
      $("html, body").scrollTop(0);
      $audio.pause();
    });
    
    
    
    
    // when the website loads, hide the sprite.
    $sprite.css('opacity', 0);
    // hide the speech bubble
    // first sprite waypoint.
    $('.sp1').waypoint(function(direction){
      if(direction === 'down'){
        $sprite.addClass('animated bounceInRight');
        $sprite.css('opacity', 1);
        $speech_bubble.css('opacity', 1);
        $speech1.text('Hello! Welcome to our overview')
        $speech2.text('of the Internet of Things!')
      }
    },
    {
      offset: '10%'
    });

    $('.sp2').waypoint(function(direction){
      if(direction === 'down'){
        $speech1.text('This is a history of the IoT from ')
        $speech2.text('where past to present')
      }
    },
    {
      offset: '10%'
    });

    $('.sp3').waypoint(function(direction){
      if(direction === 'down'){
        $speech1.text('Umm.. Im getting a craving ')
        $speech2.text('for some cola hehe')
      }
    },
    {
      offset: '10%'
    });

    $sec1.waypoint(function(direction){
      if(direction === 'down'){
        //change logo text
        $logo.text('Internet of Things: A History').fadeIn();
        
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
        $speech1.text('Oooh! This here is what IoT')
        $speech2.text('has allowed us to do currently')
        // shake the last card..
        $('.danger').addClass('wobble');
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
    
    $endAudio.waypoint(function() {
      $audio.pause()
    });
    

    // SECTION TWO CARD JS

    $('.flip-card').click(function(e) {
        $(this).toggleClass('flipped');
        //when user clicks the next card, remove the class from the previous one you've just clicked
        $(this).prev($('.flip-card')).removeClass('flipped');
        $(this).last($('.flip-card')).addClass('no_flip');
    });

    function showDangerCont()
    {
      //show the container
      $('.danger-container').show();
      //fade in those cards one after another
      $dcards.each(function(i) {
        $(this).hide().delay(i*3000).fadeIn(4000);
        // get the last card and make it shake or wobble to draw attention to it
        $(this).last().addClass('shake');
      });
    }



    $finalBtn.click(function() {
      $body.css('overflow-y', 'hidden');

      $finalSec.fadeIn();
      $('.danger-container').hide();
      //secThreeContent is each of those titles
      $secThreeContent.each(function(i) {
        //fade them in after one another
        $(this).hide().delay(i*3000).fadeIn(4000);
        $(this).last().delay(i*200).fadeOut(2000);
      });

      //delay the displaying of the danger content
      setTimeout(showDangerCont, 14000);

    });

    function showTheEndContent(){
      $('.the-end-farewell').show();
        $(".end-content-text").typed({
          strings: ["The End!"],
          typeSpeed: 0
        });
        //remove the session so that the website can be started all over again
        localStorage.removeItem('session');
    }

    $endBtn.click(function(){

      $body.css('overflow-y', 'hidden');
      $bye.show();
      $('.the-end-farewell').hide();
      $endTitles.each(function(i) {
          $(this).hide().delay(i*1500).fadeIn(2000);
          $(this).last().delay(i*100).fadeOut(1000);
      });

      setTimeout(showTheEndContent, 7000);
    });
    // slideshow code - show each div after another
    



});