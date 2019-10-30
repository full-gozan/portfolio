var firebaseConfig = {
    apiKey: "AIzaSyBqBYhQi-RMM_XI3iAk1nFasBjy7lSD0LE",
    authDomain: "portfolio-c859c.firebaseapp.com",
    databaseURL: "https://portfolio-c859c.firebaseio.com",
    projectId: "portfolio-c859c",
    storageBucket: "portfolio-c859c.appspot.com",
    messagingSenderId: "1010237445731",
    appId: "1:1010237445731:web:3e55d899259ebf491c4a56",
    measurementId: "G-LQG52Q0TEK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  var messagesRef = firebase.database().ref("portfolio-c859c");

 function fieldsGetData(name){return document.getElementById(name).value}
  let button = document.getElementById('submitbtn');
  button.addEventListener('submit',storeFeedbackData)
  button.addEventListener('click',storeFeedbackData) 

function storeFeedbackData() {

const name=document.getElementById("field1").value;
const email=fieldsGetData('field2');
const companyName=fieldsGetData('field3');
const website=fieldsGetData('field4');
const subject=fieldsGetData('field5');
const text=fieldsGetData('field6'); 
saveMessage(name,companyName,email,website,subject,text)
}
function saveMessage(name, company, email, website, subject,text){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      website:website,
      subject:subject,
      text:text
    });
  }


