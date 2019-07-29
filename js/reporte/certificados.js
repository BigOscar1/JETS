// instancias
const cnxC = new Conexion();

//variables globales



//funciones

const personaReg = ()=>{
    let url =  cnxC.getUrl();
    url += 'persona-cert';
    cnxC.get(url)
    .then(res => {
        console.log(res);
        const datos = res.persona;
        if(datos.length > 0){
            console.log(datos);
            const formateado = datos.map( x => {
                    //    debugger
                        let materno;
                        let paterno;
                       (x.amaterno !== null) ? (  materno =  x.amaterno.replace(/ /g, "") ) : (materno = '');
                       (x.paterno !== null) ? (  paterno = x.apaterno.replace(/ /g, "")) : ( paterno = '');

                       const nombres =  x.nombres.replace(/ /g, "");
                       const json = {nom: nombres, ap:paterno, am:materno};
                       return json;

            });
            console.log(formateado);
            certificados(formateado);
            

        }else{
            console.log('No hay datos');
        }
    })
    .catch(err => {
        console.log(err);
    })
}


const certificados = (personas) => {
    let doc = new jsPDF('l', 'mm', 'A4');
    let logo = new Image();
    let width = doc.internal.pageSize.getWidth();
    let height = doc.internal.pageSize.getHeight();
    console.log(width,height);
    logo.src = '../img/certificado.png';
    doc.addImage(logo, 'PNG',0, 0, width, height);
    doc.setFontSize(20);
    for (let i = 0; i < personas.length; i++) {
        // debugger;
        const nombre = `${personas[i].nom} ${personas[i].ap} ${personas[i].am}`;
        console.log(nombre);
        centrar(doc,nombre,100);
        if(i !== personas.length -1){
            doc.addPage();
            doc.addImage(logo, 'PNG',0, 0, width, height);
        }

        
    }
    window.open(doc.output('bloburl'));
}

const centrar = (doc, text, y) => {
    let textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    let textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(textOffset, y, text);
}



// am: "PANTOJA"
// ap: "AGUILAR"
// nom: "ALEXANDER"

// amaterno: "PANTOJA                       "
// apaterno: "AGUILAR                       "
// ci: "8997556"
// createdAt: null
// email: "AAGUILAR4.EST@UTEPSA.EDU"
// estado: "R"
// fechanaci: "1996-09-24 00:00:00.000"
// id: 64
// idcarr: 46
// idrol: 1
// nombres: "ALEXANDER                               "
// phone1: "67834929"
// phone2: "71058803"
// registro: "583188"
// sexo: "M"
// updatedAt: "2019-07-19"
