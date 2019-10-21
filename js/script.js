function getContent(fragmentID,call) {
    let request = new XMLHttpRequest();
    request.onload=function(){
        console.log(request.responseText);
        
        call(request.responseText);
        
    };
<<<<<<< HEAD
    //request.open("GET",'./viewer/'+fragmentID +'.html');
    request.open("GET",'https://full-gozan.github.io/portfolio/viewer/'+fragmentID+'.html');
=======
    request.open("GET",'./viewer/'+fragmentID +'.html');
    //request.open("GET",'https://full-gozan.github.io/portfolio/viewer/'+fragmentID+'.html');

>>>>>>> 66f84b9ac712d2fcf2b48a672db5c9a82963af4f
request.send(null);

   
}
window.addEventListener('hashchange',navigate)
function navigate () {

    const contentDiv =document.getElementById('content');
    fragmentID=location.hash.substr(1);
     if(!location.hash){
        fragmentID='aboutme'
    }
    getContent(fragmentID,(content)=>{
        contentDiv.innerHTML=content;
    })}
    navigate(); 
