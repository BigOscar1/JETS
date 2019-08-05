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

    let data = `usuario=${nombre}&password=${password}&token=true`;
    
    conexion.postToken(data,url)
    .then(res => {
        console.log(res);
        
    })
    .catch(err => {
        console.log(err);
        
    })
}

function enviarDatos1(e) {
    // e.preventDefault();
    let usuario = 'lmsarmiento.est@utepsa.edu'
    let password = '123456789'
    let url = conexion.getUrl()
    url += 'persona-login';

    // let data = {
    //     usuario: nombre,
    //     password: password, 
    //     // token: true
    // }

    fetch("http://localhost:9000/api/persona-login", {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
            // "Content-type": "application/json"
            // application/x-www-form-urlencoded
        },
        body: 'usuario=' + usuario + '&password=' + password + '&token=' + true
    })
    .then(function (response) {
        console.log('My JWT:', response.headers.get('token'));
        console.log(response);
        
        return response.json();
    })
    .then(function (data) {
        // Do something with JSON data.
        console.log(data);
        
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
}


