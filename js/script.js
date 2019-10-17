 function  getContent(fragmentID,call) {
    let request = new XMLHttpRequest();
    request.onload=function(){
        console.log(request.responseText);
        
        call(request.responseText);
        
    };
    request.open("GET",'./viewer/aboutme.html');
    //request.open("GET",fragmentID +'.html');
request.send(null);

   /*  partials={
        aboutme:'this is aboutme',
        contact:'this is contact',
        projects:'this is projects',
        feedback:'this is feedback'
        };
    call(partials[fragments]); */
}
window.addEventListener('hashchange',navigate)
function navigate () {

    const contentDiv =document.getElementById('content');
    fragmentID=location.hash.substr(1);
    getContent(fragmentID,(content)=>{
        contentDiv.innerHTML=content;
    })}

    navigate(); 


    
