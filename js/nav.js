const btnJugar = document.getElementById('btn-jugar');
const FlexJugar = document.getElementById('flex-jugar');


btnJugar.addEventListener('mouseover', () => {
    FlexJugar.classList.add('activo');
});

FlexJugar.addEventListener('mouseover', () => {
    FlexJugar.classList.remove('activo');
});