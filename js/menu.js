// TRAEMOS UN ELEMENTO DE LA PAGINA EN ESTE CASO UNA CLASE COMO UNA CONSTANTE
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu);
// console.log(hamburguer);

//AÑADIMOS UN EVENTO CLICK DONDE AGREGAMOS Y QUITAMOS UNA CLASE EN EL LUGAR DESEADO EN ESTE CASO ''hamburguer''
hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
//AÑADIMOS OTRO EVENTO CLICK EN TODA LA VENTADA CON UN SELECCIONADOR ''e'', CON CONDICIONALES
//SI EL TARGET ES DISTINTO A ''menu'' O ''hamburguer'' SE MANTIENE LA CLASE 
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
         && e.target != menu && e.target != hamburguer){
            menu.classList.toggle('spread')
    }
})
