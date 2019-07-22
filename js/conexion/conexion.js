class Conexion{

    async get(url){
        const areasUrl = await fetch(url);
        const area  = await areasUrl.json();
        return area;
    }


    async post(json, url) {
        const  item =  await JSON.stringify(json);
        console.log(item);
        console.log(url);
        
        const res = await fetch(url, {
            method: 'POST',
            body: item,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = res.json();
        console.log({data})
        return data;
      

    }

    async put(json, url) {
        const  item =  await JSON.stringify(json);
        console.log(item);
        console.log(url);
        
        const res = await fetch(url, {
            method: 'PUT',
            body: item,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = res.json();
        console.log({data})
        return data;

    }


    getUrl() {
        return `http://10.2.10.106:9000/api/`;
    }
    
}