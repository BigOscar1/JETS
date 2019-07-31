//variable global
let calificacion = [];
let pregunta1Form = document.querySelector('.pregunta1Form');
let pregunta2Form = document.querySelector('.pregunta2Form');
let pregunta3Form = document.querySelector('.pregunta3Form');
let siguiente = 0;

let pregunta1 = Array.from(document.querySelectorAll('.clasificacion')[0].querySelectorAll('input'));
pregunta1.forEach(function(x) {
    x.addEventListener('click', () => calificacion[0] = {calificacion: parseInt(x.value) } )
});

let pregunta2 = Array.from(document.querySelectorAll('.clasificacion')[1].querySelectorAll('input'));
pregunta2.forEach(function(x) {
    x.addEventListener('click', () => calificacion[1] = {calificacion: parseInt(x.value) } )
})

let pregunta3 = Array.from(document.querySelectorAll('.clasificacion')[2].querySelectorAll('input'));
pregunta3.forEach(function(x) {
    x.addEventListener('click', () => calificacion[2] = {calificacion: parseInt(x.value) } )
})

let botones = Array.from(document.querySelectorAll('.botonEncuesta'));
botones.forEach( (x) => {
    x.addEventListener('click', () => {
        switch(x.textContent.toLocaleLowerCase()){
            case 'siguiente' : {
                if(siguiente === 0){
                    calificacion[0] === undefined ? calificacion[0] = {calificacion: 0} : console.log('todo Bien')
                    pregunta1Form.classList.add('no-mostrar');
                    pregunta2Form.classList.remove('no-mostrar');
                }else if(siguiente === 1){
                    calificacion[1] === undefined ? calificacion[1] = {calificacion: 0} : console.log('todo Bien')
                    pregunta2Form.classList.add('no-mostrar');
                    pregunta3Form.classList.remove('no-mostrar');
                }else if(siguiente === 2){
                    pregunta3Form.classList.add('no-mostrar');

                }
                siguiente++;
            }
            break;
            case 'atras' : {
                if(siguiente === 1){

                    pregunta1Form.classList.remove('no-mostrar');
                    pregunta2Form.classList.add('no-mostrar');
                }else if(siguiente === 2){
                    pregunta2Form.classList.remove('no-mostrar');
                    pregunta3Form.classList.add('no-mostrar');
                }
                siguiente --               
            }
            break;
            case 'finalizar' : {
                calificacion[2] === undefined ? calificacion[2] = {calificacion: 0} : console.log('todo Bien')
                calificacion.forEach(function(x){
                    console.log(x);
                })
                pregunta1Form.classList.add('no-mostrar');
                pregunta2Form.classList.add('no-mostrar');
                pregunta3Form.classList.add('no-mostrar');
            }
            break;
        }
    })
})

// document.querySelectorAll('.btn .botonEncuesta').addEventListener('click', () => {
//     // calificacion[0] === undefined ? calificacion[0] = {calificacion: 0} : console.log('todo Bien')
//     // pregunta1Form.classList.add('no-mostrar');
//     // pregunta2Form.classList.remove('no-mostrar');

//     console.log(calificacion[0]);
// });


