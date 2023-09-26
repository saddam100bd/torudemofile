
(function ($) {
  'use strict';


// Closes the Responsive Menu Menu Item Click
$('.navbar-collapse ul li a').on('click', function() {
 $('.navbar-toggle:visible').click();
});



/*---------------------
	preloader
--------------------- */


$(window).on("load", function () {
  setTimeout(function() {
      $("#loading").fadeOut(500);
  }, 1000);
  setTimeout(function() {
      $("#loading").remove();
  }, 2000);
});

/*---------------------
 Mobile menu offcanvas
--------------------- */

$(document).ready(function () {
  $('.close_btn, .overlay').on('click', function () {
    $('#mobile_offcanvas').removeClass('active');
    $('.overlay').removeClass('active');
  });

  $('.menu_btn').on('click', function () {
    $('#mobile_offcanvas').addClass('active');
    $('.overlay').addClass('active');
  });



  $('.offcanvas-menu').on('click', function () {
    $('#mobile_menu').addClass('active');
    $('.overlay').addClass('active');
  });

  $('.close_btn, .overlay').on('click', function () {
    $('#mobile_menu').removeClass('active');
    $('.overlay').removeClass('active');
  });


});


$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
});

$(' .dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
});


/*--------------------------
Animation 
---------------------------- */
if ($(".wow").length) {
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      offset:       20,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
}

/*--------------------------
Sticky Header
---------------------------- */


$(window).on("scroll", function () {
  var scrolltop = $(window).scrollTop();
  if ($(document).width() < 992) {
    return;
  }
  if (scrolltop > 100) {
    $(".navbar-sticky").addClass("menu-sticky");
  } else {
    $(".navbar-sticky").removeClass("menu-sticky");
  }
});

/*--------------------------
CounterUp
---------------------------- */
$('.counter').counterUp({
  delay: 200,
  time: 6000
});

/*--------------------------
scrollUp
---------------------------- */

  $(window).on('scroll', function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.fixed-btm-top').addClass('reveal ');
    } else {
      $('.fixed-btm-top').removeClass('reveal');
    }
  }); 

  


$('a.smoth-scroll').on('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0
    }, 2000);
    e.preventDefault();
});

/*--------------------------
Pop Up
---------------------------- */

$('.venobox').venobox();

// Testimonials

  $('.client-testimonials').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:4000,
  });



  


  $('.client-list').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    arrows: false,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:'ease',
    loop:true,
    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: false,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: false
      }

    }, {

      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        dots: false
      }

    }]
  });




  /* ----------------------------------------------------------- */
  /*  Map
  /* ----------------------------------------------------------- */

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(50.97797382271958, -114.107718560791) // styles: style_array_here

    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  var google_map_canvas = $('#map');

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }



/* ----------------------------------------------------------- */  
/*   Tilt JS
/* ----------------------------------------------------------- */


$('.service-item2').tilt({
  perspective:700, 
  maxTilt: 20,
  glare: true,
  maxGlare: 0
})


$('.about-img').tilt({
  perspective:700, 
  maxTilt: 20,
  glare: true,
  maxGlare: 0
})



if ($('#scene').length > 0 ) {
  $('#scene').parallax({
    scalarX: 10.0,
    scalarY: 10.0,
  }); 
}



})(jQuery);