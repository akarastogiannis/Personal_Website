// This is the JavaScript fo the About.html Page!

// Jquery for 2.Portfolio link
$(document).ready(function(){
  $(".nav-link-portfolio").hover(function(){
    $(".nav-num-portfolio").css({"display": "inline"});
    $(".nav-link-portfolio").css({"border-bottom": "1px solid red"});
    // Hide Selected One

  }, function() {
    $(".nav-num-portfolio").css({"display": "none"});
    $(".nav-link-portfolio").css({"border-bottom": "0px solid red"});
  });
});

// Jquery for 3.Resume link
$(document).ready(function(){
  $(".nav-link-resume").hover(function(){
    $(".nav-num-resume").css({"display": "inline"});
    $(".nav-link-resume").css({"border-bottom": "1px solid #7802AC"});
    // Hide Selected One

  }, function() {
    $(".nav-num-resume").css({"display": "none"});
    $(".nav-link-resume").css({"border-bottom": "0px solid #7802AC"});
  });
});

// Jquery for 4.Contact link
$(document).ready(function(){
  $(".nav-link-contact").hover(function(){
    $(".nav-num-contact").css({"display": "inline"});
    $(".nav-link-contact").css({"border-bottom": "1px solid #D13F05"});
    // Hide Selected One

  }, function() {
    $(".nav-num-contact").css({"display": "none"});
    $(".nav-link-contact").css({"border-bottom": "0px solid #D13F05"});
  });
});


// For media screens 576 and smaller, for all phones basically
$(document).ready(function(){
  $(window).resize(function(){
    if($(window).width() <= 576) {
      $(".about-paragraph").css({"right": "5%", "left": "5%"});
    } else {
      // Conduct Business as Usual
      $(".about-paragraph").css({"right": "20%", "left": "20%"});
    }
  }).resize();
});

// For media screens 900 px width and smaller, for big ipads and phones
$(document).ready(function(){
  $(window).resize(function(){
    if($(window).width() <= 900) {
      $("#footer-section").css({"margin-top": "90rem"});
    } else {
      // Conduct Business as Usual
      $("#footer-section").css({"margin-top": "60rem"});
    }
  }).resize();
});
