// instancias 

const cnxCrear = new Conexion();
const crearCuenta = new crear();


//variables globales

const crearUsu = document.querySelector('#crear');
const registroTotalCuen = document.querySelector('#totalreg');



//funciones



crearUsu.addEventListener('click', () => {
    let tipo = $('#tipo').val()
    let ci = $('#ci').val();
    let name = $('#name').val();
    let paterno = $('#paterno').val();
    let materno = $('#materno').val();
    let genero = "";
    let fecnaNac = $('#datepicker').val();
    let registro = "";
    let phone = $('#phone').val();
    let email = $('#email').val();
    let descripcion = $('#descripcion').val();

    // crear.registrarPersona(id);


    if ($("#M").is(':checked')) {
        genero = "M";
    } else {
        genero = "F"
    }

    if (tipo != "1") {
        registro = ci
    }else{
        registro = $('#registroEstudiante').val();
        descripcion = "estudiante";
    } 

    let datos = {
        nombres: name,
        apaterno: paterno,
        amaterno: materno,
        ci: ci,
        phone1: phone,
        phone2: "",
        email:  email,
        registro: registro,
        fechnaci: fecnaNac,
        sexo: genero,
        estado: "N",
        idrol: tipo
    } 

    crearCuenta.registrarPersona(datos);
});

