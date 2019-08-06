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
    let token = '';

    let data = `usuario=${nombre}&password=${password}&token=true`;
    
    conexion.postToken(data,url)
    .then(res => {
        token = res.token
        console.log(token)
    })
    .then(() => {
        let datosToken = parseJwt(token)
        function parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        };
        localStorage.setItem('user', JSON.stringify(datosToken))
    })
    .then(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        // if(user.idrol === 1){
            location.href = './indexAdministrador.html'
        // }
    })
    .catch(err => {
        console.log(err);
    })
}

// function enviarDatos1(e) {
//     // e.preventDefault();
//     let url = conexion.getUrl()
//     url += 'persona-login';

//     // let data = {
//     //     usuario: nombre,
//     //     password: password, 
//     //     // token: true
//     // }

//     fetch("http://localhost:9000/api/persona-login", {
//         method: 'post',
//         headers: {
//             "Content-type": "application/x-www-form-urlencoded",
//             // "Content-type": "application/json"
//             // application/x-www-form-urlencoded
//         },
//         body: 'usuario=' + usuario + '&password=' + password + '&token=' + true
//     })
//     .then(function (response) {
//         console.log('My JWT:', response.headers.get('token'));
//         console.log(response);
        
//         return response.json();
//     })
//     .then(function (data) {
//         // Do something with JSON data.
//         console.log(data);
        
//     })
//     .catch(function (error) {
//         console.log('Request failed', error);
//     });
// }


