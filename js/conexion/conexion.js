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

   

    async postToken(json, url) {
        console.log(json);
        console.log(url);
        
        const res = await fetch(url, {
            method: 'POST',
            body: json,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
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
        return `http://10.0.0.10:9000/api/`;
    }
    // http://190.186.43.205/api/
    
}
