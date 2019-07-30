class InterfaceC {

    getProyect(qr){
        let url = cnxC.getUrl();
        url += `proyectoqr/${qr}`;
        cnxC.get(url)
        .then(res => {
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);
        })
    }

}