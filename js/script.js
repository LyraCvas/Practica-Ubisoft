console.log(juegos);


slider = document.getElementById("slider");

let nombre = juegos.nombre;
let bg = juegos.link;
let titulo = juegos.titulo
let desc = juegos.desc

juegos.forEach((juego) =>{
    slider.innerHTML +=
    `
    <article class="swiper-slide slider" style="background-image:${juego.link};">                
         <h2 class="ltrs-blanco">${juego.titulo}</h2>
        <p class="ltrs-blanco">${juego.desc}</p>
    </article>
    `
    
});