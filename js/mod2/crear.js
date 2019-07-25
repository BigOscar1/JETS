class crear{

    constructor(id,estado){
        this.estado = estado;
        this.id = id;
        this.init();
    }

    init(){
        this.totalRegistro();
    }

    getEstado(){
        return this.estado;
    }
    getId(){
        return this.id;
    }

    registrarPersona(json){
        let url = cnx.getUrl();
        url += `persona`;
        cnx.post(json,url)
        .then(res => {
            const per = [res.persona];
            console.log(per);
            if(per.length > 0){
                alert('Cuenta Creada');
                // this.limpiar();
                digito.value = '';
                this.totalRegistro();
            }
        })
        .catch(err => {
            console.log(err);
            alert(err);
        });
    }

    totalRegistro(){
        let url = cnx.getUrl();
        url += 'persona-reg';
        cnx.get(url)
        .then(res => {
            console.log(res.persona);
            const datos = res.persona;
            if(datos.length > 0){
                const {Total}  = datos[0];
                registroTotal.textContent = Total;
            }else{
                console.log('no hay datos');
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    limpiar(){
        const campos = document.querySelectorAll('#datos .form-control');
        for(let i = 0; i<campos.length; i++){
            campos[i].value = '';
         }
        this.id = null;
        this.estado = null;
    }
}

// amaterno: "SARMIENTO                     "
// apaterno: "                              "
// ci: "7270427"
// createdAt: null
// email: "LMSARMIENTO.EST@UTEPSA.EDU"
// estado: "N"
// fechanaci: "1989-12-20 00:00:00.000"
// id: 1
// idcarr: 8
// idrol: 1
// nombres: "LISETH MABEL                            "
// phone1: "70101020"
// phone2: "65417479"
// registro: "486123"
// sexo: "F"
// updatedAt: 