let nombreJuego = juegos.nombre;

var swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
      renderBullet:  function (index, className){
        // console.log(juegos[index].nombre)
        return `<span class="ltrs-blanco ${className}">${juegos[index].nombre}</span>`;
      },    
    },
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  //segundo swipper


  var swiper = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 2
    },
    // when window width is >= 320px
    600: {
      slidesPerView: 3
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 4
      
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 5      
    }
  },
    //centeredSlides:true,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });