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
    switch (user.idrol) {
        case 10:
                // Swal.fire({
                //     type: 'success',
                //     title: 'Bienvenido Administrador =.D',
                //     showConfirmButton: false,
                //     timer: 2500
                //   })
            break;
        case 8:
                cards.forEach((e, index) => {
                    if (index === 4 || index === 5 || index === 6) {
                        e.style.display = 'none'
                    }else if(index > 0){
                        cards[index].parentElement.classList.remove('col-4')
                        cards[index].parentElement.classList.add('col-12')
                    }
                })
            break;
        case 7:
                location.href = './html/feria.html'
            break;
        default:
            cards.forEach((e, index) => {
                if (index != 0 && index != 3) {
                    e.style.display = 'none'
                } else if (index === 3) {
                    cards[index].parentElement.classList.remove('col-4')
                    cards[index].parentElement.classList.add('col-12')
                }
            })
            break;
    }
}
