jQuery(document).ready(function () {
  $(".slider-home-banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
  });

  $(".slider-service").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "30px",
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          centerPadding: '0px'
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px'
        },
      },
    ],
  });

  $(".list-slider-blog").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 900,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

jQuery(document).ready(function () {
  // Add Sticky Header
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 62) {
      $("header.header").addClass("sticky");
      $("#scrollToTop").addClass("is-scroll");
    } else {
      $("header.header").removeClass("sticky");
      $("#scrollToTop").removeClass("is-scroll");
    }
  });

  // Scroll Top Top
  $("#scrollToTop").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  // Open Menu
  $(".btn-menu").click(function () {
    $(".responsive-menu").addClass("open");
    $(".overlay").addClass("active");
    $("html").addClass("overflow-hidden");
  });

  $(".responsive-menu .btn-close").click(function () {
    $(".responsive-menu").removeClass("open");
    $(".overlay").removeClass("active");
    $("html").removeClass("overflow-hidden");
  });

  $(".overlay").click(function () {
    $(".responsive-menu").removeClass("open");
    $(".overlay").removeClass("active");
    $("html").removeClass("overflow-hidden");
  });
});
