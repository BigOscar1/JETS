//variable
const user = JSON.parse(localStorage.getItem('user'));
const cards = document.querySelectorAll('.card');

//Event  Listeners
cargarEventListeners();

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', VerificarRol);
}


//funciones
function VerificarRol() {
    if (user.idrol === 1) {
        cards.forEach((e,index) => {
            if(index != 0 && index != 3) {
                e.style.display = 'none'
            }else if(index === 3){
                cards[index].parentElement.classList.remove('col-4')
                cards[index].parentElement.classList.add('col-12')
            }
        })
        
    }
}
