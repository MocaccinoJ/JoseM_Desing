const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLigth = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.image-light');
const hamburguer1 = document.querySelector('.hamburguer');

console.log(imagenes);
console.log(imagenesLigth);
console.log(contenedorLight);

//ESTAS LINEAS DE CODIGO SON PARA UBICAR LA IMAGEN E INSERTAR LA UBICACION DE LA IMAGEN EN EL HTML
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
       
    })
})
//FUNCIONA PARA OBTENER LA IMAGEN QUE SE SEÑALA Y MOSTRARSE EN EL CONTENEDOR DE LA IMAGEN
contenedorLight.addEventListener('click', (e)=>{
   if(e.target !== imagenesLigth){
    contenedorLight.classList.toggle('show');
    imagenesLigth.classList.toggle('showImage');
    hamburguer1.style.opacity = '1';
   
   }
})
//FUNCIONA PARA HACER APARECER LA SECCION DONDE SE VA A MOSTRAR LA IMAGEN
const aparecerImagen = (imagen) =>{
    imagenesLigth.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLigth.classList.toggle('showImage');
    hamburguer1.style.opacity = '0';
}