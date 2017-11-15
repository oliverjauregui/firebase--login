(function(){
	var config = {
    apiKey: "AIzaSyBJl4WdNmqJ2xNldfqBvayI8aKw53jVVcw",
    authDomain: "log-in-e11af.firebaseapp.com",
    databaseURL: "https://log-in-e11af.firebaseio.com",
    projectId: "log-in-e11af",
    storageBucket: "",
    messagingSenderId: "359020055318"
  };

  firebase.initializeApp(config);
  //Obtener los elementos
  const txtEmail = document.getElementById("txtEmail"); 

  const txtPassword = document.getElementById("txtPassword");

  const btnLogin = document.getElementById("btnLogin"); 

  const btnRegistrarse = document.getElementById("btnRegistrarse"); 

  const btnLogout = document.getElementById("btnLogout"); 

    //evento Login
    btnLogin.addEventListener('click', e => {

  	 const email = txtEmail.value;

  	 const pass = txtPassword.value;

  	 const auth = firebase.auth();

     const promise = auth.signInWithEmailAndPassword(email, pass);
  	 promise.catch(e => console.log(e.message));

  });

    //Evento Signup
    btnRegistrarse.addEventListener('click', e => {
    
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));

  });

    btnLogout.addEventListener('click', e => {
      firebase.auth().signup();

  });

    // Añadir listener en tiempo real

    firebase.auth().onAuthStateChanged(firebaseUser => {

      if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');

      } else {
        console.log('no logueado');
        btnLogout.classList.add('hide');
      }

    });

}());