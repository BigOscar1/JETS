class Interface {

    constructor(id, estado, qr, nombre, tipo) {
        this.estado = estado;
        this.id = id;
        this.qr = qr;
        this.nombre = nombre;
        this.tipo = tipo;
        this.init();
    }

    init() {
        this.totalRegistro();
        this.limpiar();
    }

    getEstado() {
        return this.estado;
    }
    getId() {
        return this.id;
    }
    getQr() {
        return this.qr;
    }
    getNombre() {
        return this.nombre;
    }
    getTipo() {
        return this.tipo;
    }

    datosPersona(digito) {
        // debugger
        let url = cnx.getUrl();
        url += `persona-digito/${digito}`;
        cnx.get(url)
            .then(res => {
                console.log(res);
                const datos = res.persona;
                if (datos.length > 0) {
                    const {
                        nombres,
                        apaterno,
                        amaterno,
                        ci,
                        id,
                        estado,
                        credenciale: {
                            codigoQr
                        },
                        role: {
                            rol
                        }
                    } = datos[0];
                    console.log(datos);
                    console.log(nombres);
                    console.log(codigoQr);
                    console.log(rol);

                    const campos = document.querySelectorAll('#datos .form-control');
                    campos[0].value = nombres;
                    campos[1].value = apaterno;
                    campos[2].value = amaterno;
                    campos[3].value = ci;
                    const n = this.quitEspacio(nombres);
                    const ap = apaterno;
                    const am = amaterno;
                    const nomCompleto = `${n} ${ap} ${am}`;
                    this.nombre = nomCompleto;
                    this.qr = codigoQr;
                    this.tipo = rol;
                    this.id = id;
                    this.estado = estado;
                } else {
                    this.limpiar();
                    console.log('no existe la persona');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    registrarPersona(id) {
        let url = cnx.getUrl();
        url += `persona/${id}`;
        let json = {
            estado: 'R'
        }
        cnx.put(json, url)
            .then(res => {
                const per = [res.persona];
                console.log(per);
                if (per.length > 0) {
                    alert('Registro Exitoso');
                    this.limpiar();
                    digito.value = '';
                    this.totalRegistro();
                }
            })
            .catch(err => {
                console.log(err);
                alert(err);
            });
    }

    totalRegistro() {
        let url = cnx.getUrl();
        url += 'persona-reg';
        cnx.get(url)
            .then(res => {
                console.log(res.persona);
                const datos = res.persona;
                if (datos.length > 0) {
                    const {
                        Total
                    } = datos[0];
                    registroTotal.textContent = Total;
                } else {
                    console.log('no hay datos');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    scan() {
        cordova.plugins.barcodeScanner.scan(this.succes, this.error);
    }

    succes(result) {
        // this.qr = result.text;
        // localStorage.setItem('scan', result.text);
        // alert("We got a barcode\n" +
        //     "Result: " + result.text + "\n" +
        //     "Format: " + result.format + "\n" +
        //     "Cancelled: " + result.cancelled);
        document.getElementById('digitos').value = result.text;
        textQr(result.text);
    }

    error(err) {
        alert("Scanning failed: " + err);
    }

    datosQr(qr) {
        let url = cnx.getUrl();
        url += `persona-cre/${qr}`;
        cnx.get(url)
            .then(res => {
                console.log(res);
                const datos = res.persona;
                if (datos.length > 0) {
                    const {
                        nombres,
                        apaterno,
                        amaterno,
                        ci,
                        id,
                        estado,
                        credenciale: {
                            codigoQr
                        },
                        role: {
                            rol
                        }
                    } = datos[0];
                    console.log(datos);
                    console.log(nombres);
                    const campos = document.querySelectorAll('#datos .form-control');
                    campos[0].value = nombres;
                    campos[1].value = apaterno;
                    campos[2].value = amaterno;
                    campos[3].value = ci;
                    const n = this.quitEspacio(nombres);
                    const ap = apaterno;
                    const am = amaterno;
                    const nomCompleto = `${n} ${ap} ${am}`;
                    this.nombre = nomCompleto;
                    this.qr = codigoQr;
                    this.tipo = rol;
                    this.id = id;
                    this.estado = estado;
                } else {
                    this.limpiar();
                    console.log('no existe la persona');
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    credencialPdf(codigo, nom, tipo) {
        const qr = codigo.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
        const imgQr = create_qrcode(qr);
        let doc = new jsPDF('')
        let logo = new Image();
        let width = doc.internal.pageSize.getWidth();
        let height = doc.internal.pageSize.getHeight();
        logo.src = './img/credencial.png';
        doc.addImage(logo, 'PNG', ((width - 90) / 2), 50, 90, 130);
        console.log((width / 90) / 2);
        doc.setFontSize(10)
        this.centrar(doc, tipo, 100);
        this.centrar(doc, nom, 145);
        doc.addImage(imgQr, 'PNG', 87.5, 105, 35, 35)
        window.open(doc.output('bloburl'));

    }

    centrar(doc, text, y) {
        let textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        let textOffset = (doc.internal.pageSize.width - textWidth) / 2;
        doc.text(textOffset, y, text);
    }
    quitEspacio(str) {
        let cadena = '';
        let arrayString = str.split(' ');
        for (let i = 0; i < arrayString.length; i++) {
            if (arrayString[i] != "") {
                cadena += arrayString[i];
            }
        }
        return cadena;
    }

    limpiar() {
        const campos = document.querySelectorAll('#datos .form-control');
        for (let i = 0; i < campos.length; i++) {
            campos[i].value = '';
        }
        this.id = null;
        this.estado = null;
        this.qr = null;
        this.nombre = null;
        this.tipo = null;
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