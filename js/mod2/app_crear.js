// instancias 

const cnxCrear = new Conexion();
const crearCuenta = new crear();


//variables globales

const crearUsu = document.querySelector('#crear');
const registroTotalCuen = document.querySelector('#totalreg');


//funciones

crearUsu.addEventListener('click', () => {
    let name = $('#name').val();
let paterno = $('#paterno').val();
let materno = $('#materno').val();
let M = $('#m').val();
let F = $('#f').val();
let ci = $('#ci').val();
let fecna = $('#datepicker').val();
let phone = $('#phone').val();
let email = $('#email').val();
let tipo = $('#tipo').val();
let registro = $('#registro').val();
let descripcion = $('#descripcion').val();

    // crear.registrarPersona(id);
    console.log(name);
});

