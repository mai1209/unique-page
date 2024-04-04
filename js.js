const openBtn = document.getElementById('btn1')
const openBtn2 = document.getElementById('btn2')
const openBtn3 = document.getElementById('btn3')
const openBtn4 = document.getElementById('btn4')
const openBtn5 = document.getElementById('btn5')
const openBtn6 = document.getElementById('btn6')
const openBtn7 = document.getElementById('btn7')
const openBtn8 = document.getElementById('btn8')
const openBtn9 = document.getElementById('btn9')

const info1 = document.getElementById('info1')
const info2 = document.getElementById('info2')
const info3 = document.getElementById('info3')
const info4 = document.getElementById('info4')
const info5 = document.getElementById('info5')
const info6 = document.getElementById('info6')
const info7 = document.getElementById('info7')
const info8 = document.getElementById('info8')


const btnMenu = document.getElementById('btn-menu')
const activo = document.getElementById('active')
const producto= document.getElementById('producto')
const submit= document.getElementById('submit')

console.log(submit)


const navLink = document.getElementById('navLink')
const navLink2 = document.getElementById('navLink2')
const navLink4 = document.getElementById('navLink4')








//funcion para abrir la informacion 

openBtn.addEventListener('click',() =>{
    info1.classList.toggle('open')
})

openBtn2.addEventListener('click',() =>{
    info2.classList.toggle('open')
} )

openBtn3.addEventListener('click',() =>{
    info3.classList.toggle('open')
} )

openBtn4.addEventListener('click',() =>{
    info4.classList.toggle('open')
} )
openBtn5.addEventListener('click',() =>{
    info5.classList.toggle('open')
} )
openBtn6.addEventListener('click',() =>{
    info6.classList.toggle('open')
} )
openBtn7.addEventListener('click',() =>{
    info7.classList.toggle('open')
} )
openBtn8.addEventListener('click',() =>{
    info8.classList.toggle('open')
} )




//funcion para abrir el menu con btn hamburguesa

btnMenu.addEventListener('click', () =>{
    activo.classList.toggle('visibility')
   
 if (activo.classList.contains('visibility')) {
        btnMenu.src = ('./img/icons8-cerrar-ventana-48.png')
    } else{
        btnMenu.src = ('./img/icons8-menú-64.png')
    }
} )
console.log(activo)

//FUNCION DE ALERTA PARA PRODUCTOS

producto.addEventListener('click', () =>{
    Swal.fire({
        title: "Proximamente...",
      
      });
} )

//FUNCION PARA MENSAJE DE EXITO CUANDO SE ENVIA EL FORMULARIO
 submit.addEventListener('click', () =>{
    Swal.fire({
        icon:"success",
        title: "Su Mensaje se Envio con Exito",
        text:" Le Responderemos a la Brevedad",
      });

   
} )



//funcion para cerrar el menu al hacer click en los enlaces del navbar 

navLink.addEventListener ('click', () => {
    activo.classList.remove('visibility')

    if (activo.classList.contains('visibility')) {
        btnMenu.src = ('./img/icons8-cerrar-ventana-48.png')
    } else{
        btnMenu.src = ('./img/icons8-menú-64.png')
    }
} )


navLink2.addEventListener ('click', () => {
    activo.classList.remove('visibility')

    if (activo.classList.contains('visibility')) {
        btnMenu.src = ('./img/icons8-cerrar-ventana-48.png')
    } else{
        btnMenu.src = ('./img/icons8-menú-64.png')
    }
} )


navLink4.addEventListener ('click', () => {
    activo.classList.remove('visibility')

    if (activo.classList.contains('visibility')) {
        btnMenu.src = ('./img/icons8-cerrar-ventana-48.png')
    } else{
        btnMenu.src = ('./img/icons8-menú-64.png')
    }
} )












