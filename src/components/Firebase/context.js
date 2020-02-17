import React from 'react';
const FirebaseContext = React.createContext(null);

/* declaramos el Componentes de orden superior en lugar de usar un componente renderizado en el index.js correspondiente al SingUp */
export const withFirebase = Component => props =>(
    <FirebaseContext.Consumer>
        { firebase => <Component {...props} firebase={firebase} /> }
    </FirebaseContext.Consumer>
);
  

/*createContext() create two components that is  FirebaseContext.Provider is used to provide a Firebase instance once at the top-level of your React component tree and irebaseContext.Consumer component is used to retrieve the Firebase instance if it is needed in the React component.*/

export default FirebaseContext;