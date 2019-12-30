## connection to the firebase
npm install firebase @angular/fire --save
## na pasta src/enviroments/enviroment.ts
##Incluir a firebase e
from
export const environment = {
  production: false
}
to
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDHm7E7z4hRou44xAZr0m9ZEEsFHLYGKv8",
    authDomain: "mastermind-3b6b7.firebaseapp.com",
    databaseURL: "https://mastermind-3b6b7.firebaseio.com",
    projectId: "mastermind-3b6b7",
    storageBucket: "mastermind-3b6b7.appspot.com",
    messagingSenderId: "414860945540",
    appId: "1:414860945540:web:247544299d8e688cc43ad1",
    measurementId: "G-6WPSMYJ5R5"
  }
};

##prover no app.module
import { environment } from '../environments/environment'
import { AngularFireDatabaseModule } from '@angular/fire/database';
...
imports:[
    ...,
    AngularFireModule.initializeApp(environment.firebase), 
    ...
]