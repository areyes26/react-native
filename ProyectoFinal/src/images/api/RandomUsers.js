export async function getData() {
    try { 
        let resultado = await fetch('https://randomuser.me/api?results=20')
        let json = await resultado.json();
       
           return json.results;
        
    }catch(e) {
        console.log("Error" + e);
    }
}
