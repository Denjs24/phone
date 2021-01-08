$(document).ready(function(){
    $(".burger-menu").on("click" , function () {
        $(".burger-menu").toggleClass("burger-menu__active");
        $(".header__list").toggleClass("header__list-active");
        $("body").toggleClass("block-body")
    });
    $(".gallery-slider").slick({
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 632,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
    $(".reviews__slider").slick({
        arrows: false,
        dots: true,
    });
});