$('.slider_main').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<i class=" slick-prev far fa-angle-left"></i>',
    nextArrow: '<i class="slick-next far fa-angle-right"></i>',
    fade: true,
  });

  $('.latest_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<i class="prev_latest far fa-angle-left"></i>',
    nextArrow: '<i class="next_latest far fa-angle-right"></i>',
  });