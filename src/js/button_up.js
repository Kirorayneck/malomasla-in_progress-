$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      $('.button-up').fadeIn();
    } else {
      $('.button-up').fadeOut();
    }
  });

  $('.button-up').click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
  });

});
