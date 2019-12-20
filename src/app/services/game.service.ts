import { Injectable } from '@angular/core';
import { Round } from '../models/round.model';
import { Color } from '../models/color.model';
import { BehaviorSubject, empty } from 'rxjs';
import { Colors } from '../share/colors.model';
import { Router } from '@angular/router';

@Injectable()
export class GameService{
    private challenge:Array<Color> = []
    private colors:Colors = new Colors()
    private contEndGame:number = 0
    private randomNumbers:Array<number> = []
    private auxRandomColor:number
    public token:string
    private numberOfROundToEnd:number

//Subjects____
    private score:number[]=[]
    public scoreSubject = new BehaviorSubject(this.score)
    private game:Array<Round> = []
    public gameSubject:BehaviorSubject<any>
    public actionEndGame:BehaviorSubject<boolean> = new BehaviorSubject(false)

    constructor(private router:Router){

    }

    

    private avoidRepeatNumber():void{       
         
        let numberRandom:number =  this.getRandomInt(0,9)
        //sistema considera o zero como undefined, logo 0 zero é 100 depois converte pra zero
        if(numberRandom === 0){
            numberRandom = 100
        }
        let existNumber = this.randomNumbers.find( number => number === numberRandom)
        if(!existNumber){
           
            this.randomNumbers.push(numberRandom)
            if(numberRandom === 100){
                numberRandom = 0;
            } 
            this.auxRandomColor =  numberRandom   
            return  
        }
        this.avoidRepeatNumber()   
    }

    private verifyRound(round:Round):void{
        this.score = []
        this.contEndGame++;
        let have2Points = false
        
        for(let i=0;i<round.choice.length;i++){
            have2Points = false
            for(let j=0;j<this.challenge.length; j++){
                if(i===j && this.challenge[j].hexColor === round.choice[i].hexColor){
                    this.score[i] = 2 
                   have2Points = true
                    break
                }
            
            }
            //caso nao tenha nenhuma opcao com cor e posicao corretas:
            //verifica a cor
            if(have2Points === false){
                for(let j=0;j<this.challenge.length; j++){
                    if(this.challenge[j].hexColor === round.choice[i].hexColor){
                        this.score[i] = 1
                        break
                    }
                    
                }
            }
            
            
        }
        //caso nao seja nem 1 nem 2
        for(let i=0;i<4;i++){
            if(this.score[i] === undefined){
                this.score[i] = 0
            }
        }

        this.verifyGame()
        this.mixScore()
        this.scoreSubject.next(this.score)
    }

    private mixScore(rec = 0):void{
        rec++
        let number:number = this.getRandomInt(0,2)
        
        let aux:number = this.score[number]
        this.score[number] = this.score[number+1]
        this.score[number+1] =aux
        if(rec === 4) return
        this.mixScore(rec)
    }

    public setRoundInGame(round:Round, index:number){
        this.game[index] = round
        this.gameSubject.next(this.game)
        
    }

    private getRandomInt(min, max):number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private verifyVictory():boolean{
        //verify victory
        for(let i=0;i<this.score.length;i++){
            if(this.score[i] != 2){
                return false
            }
        }      

        return true        
    }
    private verifyGame(){
        console.log(this.numberOfROundToEnd)
        console.log(this.contEndGame)

        if(this.verifyVictory() && this.contEndGame <=this.numberOfROundToEnd){
            //End Game with victory
            console.log('ganhou o jogo')
        }else if(this.contEndGame == this.numberOfROundToEnd){
            //lost game
            console.log('perdeu o jogo')
            this.actionEndGame.next(true)
        }
    }

    private generateChalengeOption(opc:string):void{
        let color = this.colors.getColors()   
        if(opc === '1'){
            for(let i=0;i<4;i++){               
                this.avoidRepeatNumber()
                this.challenge.push(color[this.auxRandomColor])
            }
        }else{
            for(let i=0;i<4;i++){               
                this.challenge.push(color[this.getRandomInt(0,9)])
            }
        }
        console.log(this.challenge)

        
    }

    public getChallenge():Array<Color>{
        return this.challenge
    }
    //vai gerar o desafio quando o setUps estiver pronto
    public generateChallenge(configGame):void{
        this.generateToken()
        this.generateChalengeOption(configGame.repetition)//gera o desafio
           

        for(let i=0;i<parseInt(configGame.nivel);i++){
            this.game[i] = new Round([new Color('','#ffffff'),new Color('','#ffffff'),new Color('','#ffffff'),new Color('','#ffffff')])
        }
        this.gameSubject = new BehaviorSubject(this.game)
    }

    public setUpSettings(settings:any){
        this.numberOfROundToEnd = settings.nivel
        this.generateChallenge(settings)

        this.router.navigate(['/game'])

    }



   public generateToken(){
    const rand=()=>Math.random().toString(36).substr(2);
    const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    this.token = token(10)
   }
   


 
    
}