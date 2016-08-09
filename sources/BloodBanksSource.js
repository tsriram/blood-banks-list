export function fetchBloodBanks() {
    return new Promise(function(resolve, reject) {
        const BLOOD_BANKS_JSON_URL = 'http://localhost:8000/bloodbanks.json';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.status);
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(new Error('Could not load Blood Banks'));    
                }
            }            
        };
        xhr.open('GET', BLOOD_BANKS_JSON_URL);
        xhr.send();
    });
}