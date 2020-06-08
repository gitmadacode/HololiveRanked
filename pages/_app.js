//_app es un nombre que nos da next para crear un archivo sobre el layout
//Es como un archivo principal con la configuración que tendria toda tu aplicación y es buen lugar para poner el context
//Esta va ser como el app.js de create react app
import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase';

const MyApp = (props) => {

    const { Component, pageProps} = props;

    return(
        <FirebaseContext.Provider
        value={{
            firebase
        }}
        >
        <Component {...pageProps}/>
        </FirebaseContext.Provider>
    )
}

export default MyApp;