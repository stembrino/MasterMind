import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService{ 
   

    constructor(private db: AngularFireDatabase){}

    public setPlayerInRanking(player:string){
        this.db.database.ref('player').push({name: player})
            .then((response)=>console.log(response))
            .catch((reason:any)=>{
                console.log(reason)
            })
    }


   
}