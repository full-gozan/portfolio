 
window.addEventListener('hashchange',navigate)
function navigate () {

    const contentDiv =document.getElementById('content');
    fragmentID=location.hash.substr(1);
    if(!location.hash){
        fragmentID='aboutme'
    }
    fetcgData.getContent(fragmentID,(content)=>{
        contentDiv.innerHTML=content;
    })}

    navigate(); 


    
