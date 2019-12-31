export default async function(idLocal){
    
    var url = 'http://localhost:8000/locales/api/';

    console.log(idLocal);
    if(idLocal != undefined){
        url = url.concat(idLocal+"/");
        console.log("a ver la url...");
        console.log(url);
    }

    var planes = await fetch(url).then(
        (res) => res.json()
        ).then(function(res){
            return res;
        }).catch(function(error){
            console.error("Ups!");
        });

    return planes;
}