const openBtn = document.getElementById('btn1')
const openBtn2 = document.getElementById('btn2')
const openBtn3 = document.getElementById('btn3')
const openBtn4 = document.getElementById('btn4')

const info1 = document.getElementById('info1')
const info2 = document.getElementById('info2')
const info3 = document.getElementById('info3')
const info4 = document.getElementById('info4')

const btnMenu = document.getElementById('btn-menu')
const activo = document.getElementById('active')
const producto= document.getElementById('producto')
const submit= document.getElementById('submit')
const formulario= document.getElementById('formulario')




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



//funcion para abrir el menu con btn hamburguesa

btnMenu.addEventListener('click', () =>{
    activo.classList.toggle('visibility')
} )

//FUNCION DE ALERTA PARA PRODUCTOS

producto.addEventListener('click', () =>{
    alert('PROXIMAMENTE...')
} )

//FUNCION PARA MENSAJE DE EXITO CUANDO SE ENVIA EL FORMULARIO
 submit.addEventListener('DOMContentLoaded', () =>{
    
    alert('SU MENSAJE SE ENVIO CON EXITO...')

   
} )




