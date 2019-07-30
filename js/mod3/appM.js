// instancias 
const cnxM = new Conexion();
const ioM = new InterfaceM();

//variables globalse

const verificarM = document.querySelector('#verificarM');
const digitoM = document.querySelector('#digitosM');
const entregas = document.querySelector('#Entregas');
const regMat = document.querySelector('#regM');

let fecEntregadas = 'No Hay Datos';
let bool = true;

//funciones

verificarM.addEventListener('click', () => {
  if (digitoM.value !== '') {
    ioM.personaReg(digitoM.value);
  } else {
    alert('no hay datos');
    ioM.limpiar();
  }
});

entregas.addEventListener('click', () => {
  // debugger
  if (!bool) {
    let fec = '';
    if (fecEntregadas !== 'No Hay Datos') {
      for (let i = 0; i < fecEntregadas.length; i++) {
        fec += `<li>Fecha Entregada: ${fecEntregadas[i].createdAt}</li>`;
      }
      console.log(fec);
      fecEntregadas = fec;
    } else {
      fecEntregadas = 'No Hay Datos'
    }
    bool = true;
  }
  Swal.fire({
    title: '<strong>Fechas Entregadas</strong>',
    type: 'info',
    html: fecEntregadas,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok',
    // confirmButtonAriaLabel: 'Thumbs up, great!',
    // cancelButtonText:
    //   '<i class="fa fa-thumbs-down"></i>',
    // cancelButtonAriaLabel: 'Thumbs down',
  })
});

regMat.addEventListener('click', () => {
  // debugger;
  const reg = ioM.getReg();
  if ((reg !== null) && (reg !== undefined))
    ioM.entregaMat(reg);
  else
    alert('No Valido');
});