$('.video-view').magnificPopup({
  type:'iframe'
});

// owl carousel
jQuery(document).ready(function(){
  jQuery('.owl-demo').owlCarousel({
  margin: 0,
  responsiveClass: true,
  smartSpeed: 500,
  dots: ($(".owl-carousel .item").length > 1) ? true: false,
  loop:($(".owl-carousel .item").length > 1) ? true: false,
  responsive: {
      0: {
          items: 1,
      },
      1140: {
          items: 3,
      },
      1110: {
          items: 3,
      }
    } 
  });