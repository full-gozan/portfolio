class fetchData{

    static getContent(fragmentID,call) {
        let request = new XMLHttpRequest();
        request.onload=function(){
            console.log(request.responseText);
            
            call(request.responseText);
            
        };
        request.open("GET",'./viewer/'+fragmentID +'.html');
    request.send(null);
    
       
    }
}
