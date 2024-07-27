// console.log(juegos);


slider = document.getElementById("slider");

let nombre = juegos.nombre;
let bg = juegos.bglink;
let titulo = juegos.titulo
let desc = juegos.desc

juegos.forEach((juego) =>{
    slider.innerHTML +=
    `
    <article class="swiper-slide slider" style="background-image:${juego.bglink};">
        <div class="inner-slider">
            <h2 class=" title-juego ltrs-xxl ltrs-blanco">${juego.titulo}</h2>
            <p class=" parrafo-juego ltrs-base ltrs-blanco">${juego.desc}</p>
        </div>
    </article>
    `
    
});