const openBtn = document.getElementById('btn1')
const openBtn2 = document.getElementById('btn2')
const info1 = document.getElementById('info1')
const info2 = document.getElementById('info2')
const btnMenu = document.getElementById('btn-menu')
const activo = document.getElementById('active')

//funcion para abrir la informacion 

openBtn.addEventListener('click',() =>{
    info1.classList.toggle('open')
})

openBtn2.addEventListener('click',() =>{
    info2.classList.toggle('open')
} )

//funcion para abrir el menu con btn hamburguesa

btnMenu.addEventListener('click', () =>{
    activo.classList.toggle('visibility')
} )
