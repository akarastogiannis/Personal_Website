// This is the JavaScript fo the portfolio.html Page!

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
