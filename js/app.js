
$(".owl-carousel").owlCarousel({
  loop: true,
  //   margin: 300,
  nav: false,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>"
  ],

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  },
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});



