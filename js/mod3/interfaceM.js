class InterfaceM {

    personaReg(digito){
        let url = cnxM.getUrl();
        url += `persona-mat/${digito}`;
        cnxM.get(url)
        .then(res => {
            console.log(res);
            const datos = res.persona;
            console.log(datos.length);
            if(datos.length > 0){
                const {nombres,apaterno,amaterno,ci,registro,materiales} = datos[0];
                console.log(nombres,apaterno,amaterno,ci,registro);
                console.log(materiales.length);
                const campos = document.querySelectorAll('#datosM .form-control');
                campos[0].value = nombres;
                campos[1].value = apaterno;
                campos[2].value = amaterno;
                campos[3].value = ci;                
            }else{
                console.log('no hay datos');
                this.limpiar();
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    limpiar() {
        const campos = document.querySelectorAll('#datosM .form-control');
        for (let i = 0; i < campos.length; i++) {
            campos[i].value = '';
        }   
    }
}

// amaterno: null
// apaterno: "PEREZ"
// ci: null
// createdAt: null
// credenciale: {id: 4559, usuario: "roberto@gmail.com", password: "123456789", estado: "t", reg: "459525", …}
// email: "roberto@gmail.com"
// estado: "R"
// fechanaci: "1995-11-25"
// id: 4559
// idcarr: null
// idrol: 6
// materiales: []
// nombres: "ROBERTO"
// phone1: null
// phone2: null
// registro: "459525"
// sexo: "M"
// updatedAt: "2019-07-24"