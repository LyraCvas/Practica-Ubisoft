let nombreJuego = juegos.nombre;

var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
      // dynamicMainBullets: 3,
      renderBullet:  function (index, className){
        //console.log(juegos[index].nombre)
        return `<span class="ltrs-blanco ${className}">${juegos[index].nombre}</span>`;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });