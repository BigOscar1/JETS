// instancia
const cnxG = new Conexion();

// variables globales
let grupoV,
    idturV,
    idmodV,
    idaulaV,
    idsemV,
    inscritosV,
    iddocV,
    idmatV,
    contador = 0;

// funciones 


const programacion = () => {
    let url = cnxG.getUrl();
    url += 'mat-qr';
    cnxG.get(url)
        .then(async res => {
            console.log(res.mat);
            const matProg = res.mat;
            if (matProg.length > 0) {
                for (let i = 0; i < matProg.length; i++) {
                    const {
                        grupo,
                        inscritos,
                        idsem,
                        idmod,
                        iddoc,
                        idmat,
                        idtur,
                        idaula
                    } = await matProg[i];
                    if(grupo !== grupoV && iddoc !== iddocV && idmat !== idmatV 
                       && idaula !== idaulaV && ((idtur === idturV) || (idtur !== idturV))){
                        contador++;
                        grupoV = grupo;
                        idsemV = idsem,
                        idmodV = idmod;
                        iddocV = iddoc;
                        idmatV = idmat;
                        idturV = idtur;
                        idaulaV = idaula;
                        inscritosV = inscritos;
                        console.log(grupoV, inscritosV, idsemV, idmodV, iddocV, idmatV, idturV, idaulaV);

                    }
                }
            } else {
                console.log('no hay datos');
            }
            console.log(matProg.length);
            console.log('contador:', contador);
        })
        .catch(err => {
            console.log(err);
        });
}

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