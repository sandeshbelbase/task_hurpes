$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    speed: 300,
    autoplay: true,
    prevArrow: '<i  class="far fa-arrow-left previous_arrow"></i>',
    nextArrow: '<i  class="far fa-arrow-right  next_arrow"></i>',
    mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: false
        },
    }]
  });

  $('.place_slider').slick({
  infinite: true,
  slidesToShow: 2,
  // dots: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 200,
  prevArrow: null,
  nextArrow: null,
  mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false
        }
    }]
});

$('.latest_slider').slick({
  infinite: true,
  slidesToShow: 2,
  // dots: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 900,
  prevArrow: null,
  nextArrow: null,
  mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false
        }
    }]
});

$('.brand_slider').slick({
  infinite: true,
  slidesToShow: 2,
  // dots: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 400,
  prevArrow: null,
  nextArrow: null,
  mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false
        }
    }]
});

$('.testimonial').slick({
  infinite: true,
  slidesToShow: 1,
  // dots: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 400,
  prevArrow: null,
  nextArrow: null,
  mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false
        }
    }]
});

//ANimation part
window.addEventListener("scroll", function () {
  let menu_bar = document.querySelector(".head_wrap");
  let windowPosition = window.scrollY > 90;
  let windowPos = window.scrollY < 90;
  menu_bar.classList.toggle("scrolling-active", windowPosition);
  menu_bar.classList.toggle("scrolling-deactive", windowPos);
});