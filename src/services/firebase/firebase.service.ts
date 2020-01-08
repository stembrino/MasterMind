import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class FirebaseService{ 
    public callTable: BehaviorSubject<boolean> = new BehaviorSubject(false)


    constructor(private db: AngularFireDatabase){}

    public setPlayerInRanking(player:string, score:number){
        this.db.database.ref('player').push({name: player, score})
            .then((response)=>console.log())
            .catch((reason:any)=>{
                console.log(reason)
            })
    }
  

    public setTableScore(): Promise<any>{       
        const arrayPlayers = []
        return new Promise((resolve, reject)=>{
            this.db.database.ref('player').once('value')
           .then((snapshot)=> {               
                snapshot.forEach((childSnapShot:any)=>{
                    arrayPlayers.push(childSnapShot.val())
                })
                //Now sort array with JS
                const sortPlayers = arrayPlayers.sort((a:any, b:any)=> b.score - a.score)
                resolve(sortPlayers)
            })
        }) 
           
    }

    public callToRankink():void{
        this.callTable.next(true)
    }


   
}