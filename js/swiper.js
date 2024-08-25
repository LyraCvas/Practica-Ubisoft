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
    slidesPerView: 5,
    centeredSlides:true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });