// var firebaseConfig = {
//     apiKey: "AIzaSyAdn1OSCRp9hBRYjpI-b0zKFLzkb4b3me8",
//     authDomain: "ipotfolio-e5581.firebaseapp.com",
//     projectId: "ipotfolio-e5581",
//     storageBucket: "ipotfolio-e5581.appspot.com",
//     messagingSenderId: "394054868504",
//     appId: "1:394054868504:web:c83096b58be08e27e82d6d"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   let formcontact = firebase.database().ref('pot')


// //lesinner
// document.querySelector('#formcontact').addEventListener("submit", e=>{
//     e.preventDefault();
//     //alert("you have did well")
//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     let subject = document.querySelector("#subject").value;
//     let message = document.querySelector("#message").value;
  
//     console.log(name)
  
  
//     savemessage(name, email, subject, message);
  
  
//   });

//   function savemessage(name, email, subject, message){
//       let newformcontact = formcontact.push()
//       formcontact.set({
//           name:name,
//           email:email,
//           subject:subject,
//           message:message,
//       });
//   }
