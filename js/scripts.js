/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
   
  var slide_index = 1;  
  displaySlides(slide_index);  
  function nextSlide(n) {  
      displaySlides(slide_index += n);  
  }  
  function currentSlide(n) {  
      displaySlides(slide_index = n);  
  }  
  function displaySlides(n) {  
      var i;  
      var slides = document.getElementsByClassName("showSlide");  
      if (n > slides.length) { slide_index = 1 }  
      if (n < 1) { slide_index = slides.length }  
      for (i = 0; i < slides.length; i++) {  
          slides[i].style.display = "none";  
      }  
      slides[slide_index - 1].style.display = "block";  
  }  

var slide2_index = 1;  
displaySlides2(slide2_index);  
function nextSlide2(n) {  
    displaySlides2(slide2_index += n);  
}  
function currentSlide2(n) {  
    displaySlides2(slide2_index = n);  
}  
function displaySlides2(n) {  
    var i;  
    var slides2 = document.getElementsByClassName("showSlide2");  
    if (n > slides2.length) { slide2_index = 1 }  
    if (n < 1) { slide2_index = slides2.length }  
    for (i = 0; i < slides2.length; i++) {  
        slides2[i].style.display = "none";  
    }  
    slides2[slide2_index - 1].style.display = "block";  
}   

var slide3_index = 1;  
displaySlides3(slide3_index);  
function nextSlide3(n) {  
    displaySlides3(slide3_index += n);  
}  
function currentSlide3(n) {  
    displaySlides3(slide3_index = n);  
}  
function displaySlides3(n) {  
    var i;  
    var slides3 = document.getElementsByClassName("showSlide3");  
    if (n > slides3.length) { slide3_index = 1 }  
    if (n < 1) { slide3_index = slides3.length }  
    for (i = 0; i < slides3.length; i++) {  
        slides3[i].style.display = "none";  
    }  
    slides3[slide3_index - 1].style.display = "block";  
}   