jQuery(document).ready(function () {

  $(".slider-home-banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false
  });

  $(".slider-service").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '30px',
    arrows: true,
  });

  $(".list-slider-blog").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 900,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false
  });
});
