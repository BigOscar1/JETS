//variable global
let calificacion = [];
let pregunta1Form = document.querySelector('.pregunta1Form');
let pregunta2Form = document.querySelector('.pregunta2Form');
let pregunta3Form = document.querySelector('.pregunta3Form');
let pregunta4Form = document.querySelector('.pregunta4Form');
//let pregunta5Form = document.querySelector('.pregunta5Form');
//let pregunta6Form = document.querySelector('.pregunta6Form');
//let pregunta7Form = document.querySelector('.pregunta7Form');
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

let pregunta4 = Array.from(document.querySelectorAll('.clasificacion')[3].querySelectorAll('input'));
pregunta4.forEach(function(x) {
    x.addEventListener('click', () => calificacion[3] = {calificacion: parseInt(x.value) } )
})

//let pregunta5 = Array.from(document.querySelectorAll('.clasificacion')[4].querySelectorAll('input'));
//pregunta5.forEach(function(x) {
 //   x.addEventListener('click', () => calificacion[4] = {calificacion: parseInt(x.value) } )
//})

//let pregunta6 = Array.from(document.querySelectorAll('.clasificacion')[5].querySelectorAll('input'));
//pregunta6.forEach(function(x) {
//    x.addEventListener('click', () => calificacion[5] = {calificacion: parseInt(x.value) } )
//})

//let pregunta7 = Array.from(document.querySelectorAll('.clasificacion')[6].querySelectorAll('input'));
//pregunta7.forEach(function(x) {
//    x.addEventListener('click', () => calificacion[6] = {calificacion: parseInt(x.value) } )
//})

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
                    calificacion[2] === undefined ? calificacion[2] = {calificacion: 0} : console.log('todo Bien')
                    pregunta3Form.classList.add('no-mostrar');
                    pregunta4Form.classList.remove('no-mostrar');
                }else if(siguiente === 3){
                    calificacion[3] === undefined ? calificacion[3] = {calificacion: 0} : console.log('todo Bien')
                    pregunta4Form.classList.add('no-mostrar');
                    pregunta5Form.classList.remove('no-mostrar');
                }else if(siguiente === 4){
                    calificacion[4] === undefined ? calificacion[4] = {calificacion: 0} : console.log('todo Bien')
                    pregunta5Form.classList.add('no-mostrar');
                    pregunta6Form.classList.remove('no-mostrar');
                }//else if(siguiente === 5){
                   // calificacion[5] === undefined ? calificacion[5] = {calificacion: 0} : console.log('todo Bien')
                    //pregunta6Form.classList.add('no-mostrar');
                    //pregunta7Form.classList.remove('no-mostrar');
                //}else if(siguiente === 6){
                  //  calificacion[6] === undefined ? calificacion[6] = {calificacion: 0} : console.log('todo Bien')
                    //pregunta7Form.classList.add('no-mostrar');
                //}
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
                }else if(siguiente === 3){
                    pregunta3Form.classList.remove('no-mostrar');
                    pregunta4Form.classList.add('no-mostrar');
                }else if(siguiente === 4){
                    pregunta4Form.classList.remove('no-mostrar');
                    pregunta5Form.classList.add('no-mostrar');
                }//else if(siguiente === 5){
                   // pregunta5Form.classList.remove('no-mostrar');
                    //pregunta6Form.classList.add('no-mostrar');
                //}else if(siguiente === 6){
                  //  pregunta6Form.classList.remove('no-mostrar');
                    //pregunta7Form.classList.add('no-mostrar');
                //}else if(siguiente === 7){
                  //  pregunta2Form.classList.remove('no-mostrar');
                   // pregunta3Form.classList.add('no-mostrar');
               // }
                siguiente --               
            }
            break;
            case 'finalizar' : {
                calificacion[6] === undefined ? calificacion[6] = {calificacion: 0} : console.log('todo Bien')
                calificacion.forEach(function(x){
                    console.log(x);
                })
                pregunta1Form.classList.add('no-mostrar');
                pregunta2Form.classList.add('no-mostrar');
                pregunta3Form.classList.add('no-mostrar');
                pregunta4Form.classList.add('no-mostrar');
                //pregunta5Form.classList.add('no-mostrar');
                //pregunta6Form.classList.add('no-mostrar');
                //pregunta7Form.classList.add('no-mostrar');

            }
            break;
        }
    })
})
