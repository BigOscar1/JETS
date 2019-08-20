//instancias 
const cnxE = new Conexion();
const ioE = new InterfacE();
 
//variables globales

const digito = document.querySelector('#digitos');
const verificar = document.querySelector('#verificar');
const registrar = document.querySelector('#reg');
// const registroTotal = document.querySelector('#totalreg');
const scan = document.querySelector('#scan');
// const credencial = document.querySelector('#credencial');
const textoReg = document.querySelector('#txtRegistro');
const close = document.querySelector('#salir');
const cancel = document.querySelector('#cancel');

// funciones


verificar.addEventListener('click',() => {
     
    console.log(digito.value);
    const valor = digito.value;
    ioE.datosPersona(valor);
    
});


registrar.addEventListener('click', () => {
    // alert('si');
    const r = ioE.getRegistro();
    console.log(r);
    if(r === undefined || r === null){
        alert('no hay datos');

    }else{
        const tur = document.querySelector('#horario').value;
        if(tur !== ''){
            let json = {
                reg:r,
                idcon:2,
                turno:tur
            };
         let url = cnxE.getUrl();
          url += 'registro';   
         cnxE.post(json,url)
         .then(res => {
             console.log(res);
             ioE.limpiar();
             alert('exito');
         })
         .catch(err => {
             console.log(err);
         })
        }else{
            alert('Seleccione un horario');
        }
   
    }
    
    // const reg = ioE.getRegistro();
    // if(reg !== undefined || reg !== null){

    // }else{
    //     alert('no hay datos');
    // }
    // const estado = io.getEstado();
    // if (estado === 'N') {
    //     const id = io.getId();
    //     io.registrarPersona(id);
    // } else if (estado === 'R') {
    //     alert('Ya se Encuentra Registrado');
    // } else {
    //     alert('No hay datos');
    // }
});