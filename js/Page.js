$(window).load(function() {
    $(".loader").slideUp("fast");
});

$(document).ready(function() {
var url = "lol.html";
 $('#about-whole').load(url+"#story");
 // Elements Animation (HIDING)
 $('#short-bio').hide();
 $('#anil-img').hide();
 $('#social a > span').hide();
 $('nav > span.fa').hide();
 $('.whole > h1').addClass('');
 $('#progress').hide();
 $('.learning').hide();
 $('.float > label').hide();
 $('.floating > label').hide();
 $('#submit-btn').hide();
 $('#logo-anil').hide();
 $('#anil-gif').hide();
 setInterval(function(){
   $('#logo-anil').addClass('animated rubberBand').show();
 }, 1000 );


    $('.navbar-text').hide();
    $('.tab').hide();
    $('.tab.0').show();

    $('#logo-anil ').click(function(){
       $('.tab.0').show();
       $('.tab.1').hide();
       $('.tab.2').hide();
       $('.tab.3').hide();
       $('.tab.4').hide();


    });
    $('#skill').on('click',function(){
      $('.tab.1').show();
      $('.tab.0').hide();
      $('.tab.2').hide();
      $('.tab.3').hide();
      $('.tab.4').hide();
      setInterval(function(){
        $('.learning').addClass('animated zoomIn').show();
      }, 9000 );
      setInterval(function(){
        $('#progress').addClass('animated flip').show();
      }, 8000 );
    });
    $('#email').on('click',function(){
      $('.tab.2').show();
      $('.tab.0').hide();
      $('.tab.1').hide();
      $('.tab.3').hide();
      $('.tab.4').hide();
      setInterval(function(){
        $('.float > label').addClass('animated bounceInLeft').show();
      }, 500 );
      setInterval(function(){
        $('.floating > label').addClass('animated bounceInRight').show();
      }, 500 );
      setInterval(function(){
        $('#submit-btn').addClass('animated flip').show();
      }, 800 );
    });
    $('#project').on('click',function(){
      $('.tab.3').show();
      $('.tab.0').hide();
      $('.tab.1').hide();
      $('.tab.2').hide();
      $('.tab.4').hide();
    });
    $('#contact').on('click',function(){
      $('.tab.4').show();
      $('.tab.0').hide();
      $('.tab.1').hide();
      $('.tab.2').hide();
      $('.tab.3').hide();
    });
// SOCIAL MEDIA POP-UP
        var twitter = $('#outer-pop-up >.pop-up').get(0);
        var github = $('#outer-pop-up >.pop-up').get(1);
        var google = $('#outer-pop-up >.pop-up').get(2);
        var instagram = $('#outer-pop-up >.pop-up').get(3);
        var linkedin = $('#outer-pop-up >.pop-up').get(4);
      $('#twitter').hover(function(){
                $(twitter).show();
                $(twitter).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){

                $(twitter).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });
      $('#github').hover(function(){
                  $(github).show();
                  $(github).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){
                  $(github).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });
      $('#google').hover(function(){
                  $(google).show();
                  $(google).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){
                  $(google).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });
      $('#instagram').hover(function(){
                  $(instagram).show();
                  $(instagram).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){
                  $(instagram).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });
      $('#linkedin').hover(function(){
                  $(linkedin).show();
                  $(linkedin).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){
                  $(linkedin).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });

// MY CV POP-UP
setInterval(function(){
  $('#Anil-cv').addClass('animated infinite wobble').show();
}, 4000 );


    $('nav > span.fa').hover(function(){
        $(this).next().show();

      },function(){
            $(this).next().hide();

    });


    $('span.fa').hover(function(){
        $(this).css("color","orange");
      },function(){
        $(this).css("color","white");

    });




// Animation delay
    setInterval(function(){

          $('.headline').toggleClass('animated infinite pulse');
              setTimeout(function(){
                  $('.headline').toggleClass('animated jackInTheBox');
                },2000);
            },2000);


    setInterval(function(){
    	$('#social a > span').addClass('animated jackInTheBox').show();
    }, 4000 );

    setInterval(function(){
    	$('nav > span.fa').addClass('animated tada').show();
    }, 500 );
    setInterval(function(){
    	$('#anil-img').addClass('animated zoomIn').show();
    }, 2000 );
    setInterval(function(){
    	$('#anil-gif').addClass('animated zoomIn').show();
    }, 3500 );
    setInterval(function(){
      $('#short-bio').addClass('animated rotateInDownRight').show();
    }, 1000 );


// MEDIA QUERIES SCRIPT


$(function(){
    $('#navicon').on('click', function(){
        $(this).toggleClass('fa fa-navicon  fa fa-times');
        $('nav').toggleClass('active-nav animated bounceInLeft');
   });
});
$(function(){
    $('#nav-social-icon').on('click', function(){
        $(this).toggleClass('fa fa-navicon  fa fa-times');
        $('#social').toggleClass('active-social animated bounceInRight');
   });
});

// STORY SCROLL

// $( "#about-whole > section > .header:odd" ).css({ "background":"orange"
//                                     ,"color":"black"});
// $( "#about-whole > section > .header:even" ).css({ "background-color":"rgb(46, 48, 47)"
//                                     ,"color":"orange"});
// $( "#about-whole > section:even" ).css({ "flex-direction":"row-reverse"
//                             ,"border": "1px solid orange"});
// $( "#about-whole > section:odd" ).css( "border", "1px solid black");











});
