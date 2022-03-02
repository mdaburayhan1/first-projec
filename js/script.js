var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
   loop:true,
  });

  
$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true

});
$('.team_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  centerMode:true,
  centerPadding:'0'

});