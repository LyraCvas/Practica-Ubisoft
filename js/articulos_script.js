contNoticias = document.getElementById("contNoticias");

let imagen = articulos.imagen;
let linkNoti = articulos.linkNoti;
let titulo_noticia = articulos.titulo;
let fecha = articulos.fecha;
let juego = articulos.juego;

articulos.forEach((articulo) =>{
    contNoticias.innerHTML+=
    `
    <article class="articulos-cards">
          <img class="img-articulos-cards" src="${articulo.imagen}" alt="">
          <div>
            <p class="ltrs-sm">${articulo.fecha}</p>
            <a class="a ltrs-base ltrs-bld ltrs-negras" href="${articulo.linkNoti}">${articulo.titulo}</a>
          </div> 
        </article>
    `
});