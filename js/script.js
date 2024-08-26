// console.log(juegos);


slider = document.getElementById("slider1");

let nombre = juegos.nombre;
let bg = juegos.bglink;
let titulo = juegos.titulo;
let desc = juegos.desc;
let color = juegos.color;

juegos.forEach((juego) =>{
    slider.innerHTML +=
    `
    <article class="swiper-slide slider" style="background-image:${juego.bglink};">
        <div class="inner-slider">
            <h2 class=" title-juego ltrs-xxl ltrs-blanco">${juego.titulo}</h2>
            <p class=" parrafo-juego ltrs-base ltrs-blanco">${juego.desc}</p>
            <div class="flex">
            <a class="btn-prim ltrs-blanco ltrs-base a ltrs-bld ${juego.color}"><span>VER TRAILER</span></a>
            <a class="btn-prim ltrs-blanco ltrs-base a ltrs-bld ${juego.color}"><span>RESERVALO YA</span></a>
            </div>
        </div>
    </article>
    `
    
});


slider2 = document.getElementById("slider2");

let caratula = juegos.caratula;

juegos.forEach((juego)=>{
    slider2.innerHTML+=`
    <article class="swiper-slide slider carta-juegos">
            <img
              class="caratula-juego"
              src="${juego.caratula}"
              loading="lazy"
            />
            <a href="" class="ltrs-sm ltrs-bld a ltrs-negras">${juego.nombre}</a>
            <div>
              <a class="ltrs-base ltrs-bld a ltrs-negras" href=""><i class="fa-brands fa-xbox"></i></a>
              <a class="ltrs-base ltrs-bld a ltrs-negras" href=""><i class="fa-brands fa-playstation"></i></a>
              <a class="ltrs-base ltrs-bld a ltrs-negras" href=""><i class="fa-brands fa-windows"></i></a>
            </div>
          </article>
    `
})