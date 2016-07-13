import { ionicBootstrap } from 'ionic-angular';
import { AppComponent } from './app.component';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

ionicBootstrap(
    AppComponent,
    [
        FIREBASE_PROVIDERS,
        defaultFirebase({
            apiKey: "AIzaSyAtyYzFCPl5jKfMoMPlDMPnNfN8-HDKxkI",
            authDomain: "mtkeasyinfo.firebaseapp.com",
            databaseURL: "https://mtkeasyinfo.firebaseio.com",
            storageBucket: "mtkeasyinfo.appspot.com",
        })
    ],
    {
        iconMode:'ios',
        pageTransition: 'ios',
        backButtonIcon:'ios-arrow-back'
    }
);
