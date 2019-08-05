// Variable Global
const loginBtn = document.querySelector('#login');
const conexion = new Conexion();

//EventListeners
cargarEventListeners();

function cargarEventListeners() {
    loginBtn.addEventListener('click', enviarDatos);
}

//Funciones
function enviarDatos(e) {
    e.preventDefault();
    let nombre =  document.querySelectorAll('.form-control')[0].value;
    let password = document.querySelectorAll('.form-control')[1].value;
    let url = conexion.getUrl()
    url += 'persona-login';

    let data = {
        usuario: nombre,
        password: password, 
        token: true
    }

    conexion.post(data,url);
}


