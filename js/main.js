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
    responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
          }
      },
  ]
  });

  $('.vertical_slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // dots: true,
    // autoplay: true,
    vertical: true,
    // autoplaySpeed: 400,
    arrows: true,
    prevArrow: '<i class="p_arrow far fa-angle-left">',
    nextArrow: '<i class="n_arrow far fa-angle-right">',
    mobileFirst: true,
    // responsive: [{
    //     breakpoint: 1024,
    //     settings: {
    //         slidesToShow: 3,
    //         // slidesToScroll: 1,
    //         centerMode: false
    //     },
    //     breakpoint: 390,
    //     settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         centerMode: false
    //     }
    // }]
});