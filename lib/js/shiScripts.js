//Scroll to reveal navbar.
$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 5) {
        $('.navbar').addClass('navbar-light'+' bg-faded');
    } else {
        $('.navbar').removeClass('navbar-light'+' bg-faded');
    }
  });
});
