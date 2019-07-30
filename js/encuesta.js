//variable global
let calificacion = []

let pregunta1 = Array.from(document.querySelectorAll('.clasificacion')[0].querySelectorAll('input'));

pregunta1.forEach(function(x) {
    x.addEventListener('click', () => calificacion[0] = {calificacion: x.value} )
})

document.querySelector('#enviar').addEventListener('click', () => console.log(calificacion[0]))