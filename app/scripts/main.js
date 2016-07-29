$(function() {
  var menuBtn = $('.nav-btn');
  var mobileNav = $('#nav-container');

  menuBtn.on('click', function(){
    menuBtn.toggleClass('is-open');
    mobileNav.toggleClass('is-open');
    // console.log("worked")
  });

  $(window).on('scroll', function() {
    var winScroll = $(this).scrollTop();
    var div = $('.parallax-transparent'),
        height = div.outerHeight(),
        limit = height + 100;  /* scrolltop value when opacity should be 0 */

    /* avoid unnecessary call to jQuery function */
    if (winScroll <= limit) {
      div.css({ 'opacity' :  (0 + winScroll/limit) });
      // $('.hero-logo').css({ 'top' : (40 + winScroll/7 + '%') });
      // $('.hero-btn-play').css({ 'top' : (70 + winScroll/8 + '%') });
    }
  });
});
