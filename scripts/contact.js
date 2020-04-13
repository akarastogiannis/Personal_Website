// This is the JavaScript fo the Contact.html Page!

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
  $(".nav-link-portfolio").hover(function(){
    $(".nav-num-portfolio").css({"display": "inline"});
    $(".nav-link-portfolio").css({"border-bottom": "1px solid red"});
    // Hide Selected One

  }, function() {
    $(".nav-num-portfolio").css({"display": "none"});
    $(".nav-link-portfolio").css({"border-bottom": "0px solid red"});
  });
});

// Jquery for 4.Contact link
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
