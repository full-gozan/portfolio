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
const nav = document.getElementById('nav')
const main =document.getElementById('main')

let isVisible=false;
const hideNav=()=>{
    navBar.classList.add('click');
    nav.style.width='5%';
    main.style.width='95%'


}
const showNav=()=>{
      navBar.classList.remove('click')
        nav.style.width='20%';
        main.style.width='80%'
}
menu.addEventListener('click',function(){
    isVisible=!isVisible;
!isVisible? showNav():hideNav();
    
})
}
navToggle();




