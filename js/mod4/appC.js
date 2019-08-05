//instancias

const cnxC = new Conexion();
const ioC = new InterfaceC();

//variables globlaes

const btnScan = document.querySelector('#scan');
const nameGrup = document.querySelector('#grupoName');
const contenidoGrupo = document.querySelector('#nameGrup');
const contenidoRubrica = document.querySelector('#rubrica');
const btnGuardar = document.querySelector('#guardar');

// funciones


btnScan.addEventListener('click',()=>{
        ioC.scan();
});

function qrText(result){
    ioC.getProyect(result);
}


