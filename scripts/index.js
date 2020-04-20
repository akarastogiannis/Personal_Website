// This is the JavaScript for the index.html Page!

// Jquery for 2.Portfolio link
$(document).ready(function(){
  $(".nav-link-about").hover(function(){
    $(".nav-num-about").css({"display": "inline"});
    $(".nav-link-about").css({"border-bottom": "1px solid blue"});
    // Hide Selected One

  }, function() {
    $(".nav-num-about").css({"display": "none"});
    $(".nav-link-about").css({"border-bottom": "0px solid blue"});
  });
});

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

// This code is for resizing certain css styles on small phone devices
$(document).ready(function(){
  $(window).resize(function(){
    if($(window).width() <= 576) {
      $(".developer-hint-left").css({"font-size": "1.7rem"});
      $(".developer-hint-right").css({"font-size": "1.7rem"});
      $(".home-info").css({"top": "100%"});
    } else {
      // Conduct Business as Usual
      $(".developer-hint-left").css({"font-size": "3rem"});
      $(".developer-hint-right").css({"font-size": "3rem"});
      $(".home-info").css({"top": "120%"});
    }
  }).resize();
});
