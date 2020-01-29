import app from 'firebase/app'
import 'firebase/auth'

const config ={
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_DATABASE_URL,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID
};

/* For initialize Firebase*/
class Firebase{
    constructor(){
        app.initializeApp(config );

        this.auth = app.auth();
    }

    /*To register*/
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);


        /*To login*/
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    /*To Sign Out*/
    doSignOut = () => this.auth.signOut();

    /*To Password Reset*/
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    /*To Password Update*/
    doPasswordUpdate = password =>this.auth.currentUser.updatePassword(password);
}

export default Firebase ;