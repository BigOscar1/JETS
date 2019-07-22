// instancias 

const cnx = new Conexion();
const io = new Interface();


//variables globales

const digito = document.querySelector('#digitos');
const verificar = document.querySelector('#verificar');
const registrar = document.querySelector('#reg');
const registroTotal = document.querySelector('#totalreg');
const scan = document.querySelector('#scan');


//funciones

verificar.addEventListener('click', () => {
    console.log(digito.value);
    const valor = digito.value;
    io.datosPersona(valor);
});

registrar.addEventListener('click', () => {
    const estado = io.getEstado();
    if (estado === 'N') {
        const id = io.getId();
        io.registrarPersona(id);
    } else if (estado === 'R') {
        alert('Ya se Encuentra Registrado');
    } else {
        alert('No hay datos');
    }
});

scan.addEventListener('click', () => {
    io.scan();
});

function textQr(texto) {
    io.datosQr(texto);
}