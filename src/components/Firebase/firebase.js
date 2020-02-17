import app from 'firebase/app'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyDlCIsjXx1lYLcOE27QRTMKHOoNQTflCg4",
    authDomain: "iatech-3331b.firebaseapp.com",
    databaseURL: "https://iatech-3331b.firebaseio.com",
    projectId: "iatech-3331b",
    storageBucket: "iatech-3331b.appspot.com",
    messagingSenderId: "683383276343",
    appId: "1:683383276343:web:8caffee4c8010abdd250b2",
    measurementId: "G-JWCSXESHY8"
};

/* For initialize Firebase*/
class Firebase{
    constructor(){
        app.initializeApp(config );
        this.auth = app.auth();
    }

    /*To register*/
    doCreateUserWithEmailAndPassword = (email, password) =>{
        this.auth.createUserWithEmailAndPassword(email, password);
    }
    


    /*To login*/
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    /*To Sign Out*/
    doSignOut = () =>this.auth.signOut();

    /*To Password Reset*/
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    /*To Password Update*/
    doPasswordUpdate = password =>this.auth.currentUser.updatePassword(password);
}

export default Firebase ;