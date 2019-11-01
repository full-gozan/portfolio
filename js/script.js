function getContent(fragmentID, callFunction) {
    let request = new XMLHttpRequest();
    request.onload = function () {
        console.log(request.responseText);

        callFunction(request.responseText);

    };
    request.open("GET", 'https://full-gozan.github.io/portfolio/pages/' + fragmentID + '.html');
    request.send(null);
}
window.addEventListener('hashchange', navigate)

function navigate() {

    const contentDiv = document.getElementById('content');
    fragmentID = location.hash.substr(1);
    if (!location.hash) {
        fragmentID = 'aboutme'
    }
    getContent(fragmentID, (content) => {
        contentDiv.innerHTML = content;
    })
}
navigate();
// toggle the nav icon by showing and disapearing the nav
const navToggle=()=>{
    const menu = document.getElementsByClassName('wrap')[0];
const navBar = document.getElementsByClassName('navBar')[0];


menu.addEventListener('click',function(){

    navBar.classList.add('click')
    

})
}
navToggle();




