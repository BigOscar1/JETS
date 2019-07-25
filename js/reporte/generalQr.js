// instancia
const cnxG = new Conexion();
// 270
// variables globales
let grupoV,
    idturV,
    idmodV,
    idaulaV,
    idsemV,
    inscritosV,
    iddocV,
    idmatV,
    observacionesV,
    contador = 0,
    json,
    persona = [],
    materias = [],
    bool = false;
let x = 15;
let y = 25;
let aux;
let contY = 60;
let imgY = 50;

const btnReport = document.querySelector('#generarRepor');


// funciones 


const programacion = () => {
    inicio();
    let url = cnxG.getUrl();
    url += 'mat-qr';
    materias = [];
    cnxG.get(url)
        .then(res => {
            console.log(res.mat);
            const matProg = res.mat;
            console.log('largo',matProg.length);
            if (matProg.length > 0) {
                for (let i = 0; i < matProg.length; i++) {
                    // debugger;
                    const {
                        grupo,
                        inscritos,
                        idsem,
                        idmod,
                        iddoc,
                        idmat,
                        idtur,
                        idaula,
                        observaciones
                    } = matProg[i];
                    const {
                        nombres,
                        apaterno,
                        amaterno,
                        registro,
                        credenciale: {
                            codigoQr
                        }
                    } = matProg[i].persona
                    // console.log(nombres, apaterno, amaterno, registro, 'qr', codigoQr);
                    if (grupo !== grupoV && iddoc !== iddocV && idmat !== idmatV &&
                        idaula !== idaulaV && ((idtur === idturV) || (idtur !== idturV))) {
                        if (bool) {
                            json.personas = persona
                            materias.push(json);
                            json = {};
                            persona = [];
                        }
                        const {
                            nombre,
                            siglas
                        } = matProg[i].materia;
                        const {
                            nombres: doc,
                            apaterno : apdoc,
                            amaterno: amdoc,
                            id:docid
                        } = matProg[i].docente;
                        // console.log('materia', nombre, 'siglas', siglas);
                        // console.log('docente:', nombres, 'apaterno', apaterno);
                        contador++;
                        grupoV = grupo;
                        idsemV = idsem;
                        idmodV = idmod;
                        iddocV = iddoc;
                        idmatV = idmat;
                        idturV = idtur;
                        idaulaV = idaula;
                        inscritosV = inscritos;
                        json = {
                            grupoJ: grupoV,
                            inscritosJ: inscritosV,
                            semestreJ: idsemV,
                            idmodJ: idmodV,
                            docenteJ: doc,
                            apellidoP: apdoc,
                            apellidoM: amdoc,
                            turnoJ: idturV,
                            aulaJ: idaulaV,
                            materia: nombre,
                            sigla: siglas
                        }
                        persona.push({
                            nombreE: nombres,
                            apellidoP: apaterno,
                            apellidoM: amaterno,
                            registro: registro,
                            observacion: observaciones,
                            qr: codigoQr
                        });
                        // console.log(materias);
                        // console.log(grupoV, inscritosV, idsemV, idmodV, iddocV, idmatV, idturV, idaulaV);
                    } else {
                        persona.push({
                            nombreE: nombres,
                            apellidoP: apaterno,
                            apellidoM: amaterno,
                            registro: registro,
                            observacion: observaciones,
                            qr: codigoQr
                        });
                        bool = true;
                    }
                }
                if (bool) {
                    json.personas = persona
                    materias.push(json);
                    json = {};
                    persona = [];
                    bool = false;
                }

            } else {
                console.log('no hay datos');
            }
            console.log(matProg.length);
            console.log(materias);
            console.log('contador:', contador);
            generarPdf();
        })
        .catch(err => {
            console.log(err);
        });
}

const quitarEspacio = (str) => {
    let cadena = '';
    let arrayString = str.split(' ');
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i] != "") {
            cadena += arrayString[i];
        }
    }
    return cadena;
};

const generarPdf = () => {
    let doc = new jsPDF()
    for (let i = 0; i < materias.length; i++) {
        const nombres = quitarEspacio(materias[i].docenteJ);
        const apellidoP = quitarEspacio(materias[i].apellidoP);
        const docente = `${nombres} ${apellidoP}`;
        const aula = materias[i].aulaJ;
        const grupo = materias[i].grupoJ;
        const inscritos = materias[i].inscritosJ;
        const materia = materias[i].materia;
        const semestre = materias[i].semestreJ;
        const sigla = materias[i].sigla;
        const turno = materias[i].turnoJ;
        const modulo = materias[i].idmodJ;
        console.log('docente:', docente, 'aula', aula, 'grupo', grupo, 'inscritos', inscritos, 'materia', materia, 'semestre', semestre, 'sigla', sigla, 'turno', turno);
        doc.setFontSize(10)
        doc.text(x, y, `GRUPO:${grupo}`)
        doc.text(55, y, `MATERIA:${materia}`)
        doc.text(165, y, `AULA:${aula}`)
        doc.text(x, 35, `TURNO:${turno}`)
        doc.text(55, 35, `SEMESTRE:${semestre}`)
        doc.text(95, 35, `DOCENTE:${docente}`)
        doc.text(165, 35, `MODULO:${modulo}`)
        doc.text(15, 45, 'OBSERVACIONES')
        doc.text(55, 45, 'A.PATERNO')
        doc.text(85, 45, 'A.MATERNO')
        doc.text(115, 45, 'NOMBRES')
        doc.text(145, 45, 'FIRMA')
        doc.text(165, 45, 'QR')
        for (let x = 0; x < materias[i].personas.length; x++) {
            // debugger;
            const persona = materias[i].personas[x];
            const estudiante = persona.nombreE;
            const estudianteAp = persona.apellidoP;
            const estudianteAm = persona.apellidoM;
            const registro = persona.registro;
            const observacion = persona.observacion;
            const qr = persona.qr.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
            const imgQr = create_qrcode(qr);
            console.log('estudiante', estudiante, 'apellidop', estudianteAp, 'apellidom', 
                        estudianteAm, 'registro', registro, 'observacion', observacion,'qr',qr);
            if(contY >= 270){
                doc.addPage();
                contY = 20;
                imgY = 6;
                doc.setFontSize(8.5)
                doc.text(15, contY, observacion)
                doc.text(55, contY, estudianteAp)
                doc.text(85, contY, estudianteAm)
                doc.text(115, contY, estudiante)
                doc.text(145, contY, '.............')
                doc.addImage(imgQr, 'PNG', 165, imgY, 12, 12)
                contY += 11;
                imgY += 11;

            }else{
                doc.setFontSize(8.5)
                doc.text(15, contY, observacion)
                doc.text(55, contY, estudianteAp)
                doc.text(85, contY, estudianteAm)
                doc.text(115, contY, estudiante)
                doc.text(145, contY, '.............')
                doc.addImage(imgQr, 'PNG', 165, imgY, 12, 12)
                contY += 11;
                imgY += 11;
            }
            


            // doc.addImage(imgData, 'JPEG', 165, 50, 10, 10)
        }
        // if( i >! materias.length){
        //     doc.addPage();
        // }
        doc.addPage();
        contY = 60;
        imgY = 50;

    }
    window.open(doc.output('bloburl'));
    fin();

}

btnReport.addEventListener('click',()=>{
    programacion();
});



function inicio(){
    console.log("inicio");

    $(".loader-page").css({visibility:"visible",opacity:"10"})

}
function fin(){
    console.log("fin");

    $(".loader-page").css({visibility:"hidden",opacity:"0"})

}

// var doc = new jsPDF()

// doc.setFontSize(10)
// doc.text(15, 25, 'GRUPO:AA')
// doc.setFontSize(10)
// doc.text(55, 25, 'MATERIA:INTRODUCCION A LA VIDA UNIVERSITARIA')
// doc.setFontSize(10)
// doc.text(165, 25, 'AULA:E-201')
// doc.setFontSize(10)
// doc.text(15, 35, 'TURNO:1')
// doc.setFontSize(10)
// doc.text(55, 35, 'SEMESTRE:2019-2')
// doc.setFontSize(10)
// doc.text(105, 35, 'DOCENTE:ROBERTO PEREZ')
// doc.setFontSize(10)
// doc.text(165, 35, 'MODULO:0')
// doc.setFontSize(10)
// doc.text(15, 45, 'OBSERVACIONES')
// doc.setFontSize(10)
// doc.text(55, 45, 'A.PATERNO')
// doc.setFontSize(10)
// doc.text(85, 45, 'A.MATERNO')
// doc.setFontSize(10)
// doc.text(115, 45, 'NOMBRES')
// doc.setFontSize(10)
// doc.text(145, 45, 'FIRMA')
// doc.setFontSize(10)
// doc.text(165, 45, 'QR')



// "nombres": "SEBASTIAN                               ",
// "apaterno": "                              ",
// "amaterno": "JUSTINIANO                    ",
// "ci": "6292502",
// "phone1": "77617780",
// "phone2": "3366309",
// "email": "SJUSTINIANO8.EST@UTEPSA.EDU",
// "registro": "431680",


// "id": 31,
// "inscritos": 29,
// "grupo": "B ",
// "observaciones": "MOVIDA DE GRUPO",
// "registro": "431680",
// "idsem": "2019-2",
// "idmod": 0,
// "iddoc": 23134,
// "idmat": 847,
// "idtur": 1,
// "idaula": "E-104",


// apellidoM: "NATUSCH                       "
// apellidoP: "ALFONSO                       "
// aulaJ: "E-104"
// docenteJ: "RICARDO                                 "
// grupoJ: "B "
// inscritosJ: 29
// materia: "PUBLICIDAD II                                                                                                           "
// personas: (29) 
// semestreJ: "2019-2"
// sigla: "PUB-230"
// turnoJ: 1