// instancias 

const cnxCrear = new Conexion();
const crearCuenta = new crear();


//variables globales

const crearUsu = document.querySelector('#crear');
const registroTotalCuen = document.querySelector('#totalreg');



//funciones


document.getElementById('cancelar-Cuenta').addEventListener('click', () => {
    $('#tipo').val('11')
    $('#ci').val('');
    $('#name').val('');
    $('#paterno').val('');
    $('#materno').val('');
    $('#datepicker').val('');
    $('#phone').val('');
    $('#email').val('');
    $('#descripcion').val('');
    $('#M').prop( "checked", true );
    $('#F').prop( "checked", false );
})

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
    } else {
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
        email: email,
        registro: registro,
        fechnaci: fecnaNac,
        sexo: genero,
        estado: "N",
        idrol: tipo
    }

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
        title: 'Estas Seguro?',
        text: "Revise todos los campos",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            swalWithBootstrapButtons.fire({
                title: 'Cuenta Creada!',
                type: 'success',
                showConfirmButton: false,
                timer: 1000
            })
            crearCuenta.registrarPersona(datos);
            $('#tipo').val('11')
            $('#ci').val('');
            $('#name').val('');
            $('#paterno').val('');
            $('#materno').val('');
            $('#datepicker').val('');
            $('#phone').val('');
            $('#email').val('');
            $('#descripcion').val('');
            $('#M').prop( "checked", true );
            $('#F').prop( "checked", false );
        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: 'No se Creo la Cuenta',
                type: 'error',
                showConfirmButton: false,
                timer: 1000
            })
        }
    })
});

