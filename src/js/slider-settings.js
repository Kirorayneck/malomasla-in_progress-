$(document).ready(function () {
    /* Слайдер */
    $('.reviews-slider').slick({
      centerMode: false,
      centerPadding: '0px',
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: $('.arrows__left'),
      nextArrow: $('.arrows__right'),
      dots: false,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 991,
          settings: {
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 1
        }
        },
        {
          breakpoint: 768,
            settings: {
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
          breakpoint: 572,
            settings: {
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    
  });