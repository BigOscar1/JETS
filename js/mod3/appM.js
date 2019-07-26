// instancias 
const cnxM = new Conexion();
const ioM = new InterfaceM();

//variables globalse

const verificarM = document.querySelector('#verificarM');
const digitoM = document.querySelector('#digitosM');
const entregas = document.querySelector('#Entregas');

//funciones

verificarM.addEventListener('click',()=>{
        if(digitoM.value !== ''){
             ioM.personaReg(digitoM.value);
        }else{
            alert('no hay datos');
            ioM.limpiar();
        }
});

entregas.addEventListener('click',()=>{

})


hgigggg