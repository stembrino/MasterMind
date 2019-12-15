import { Injectable } from '@angular/core';
import { Round } from '../models/round.model';
import { Color } from '../models/color.model';
import { BehaviorSubject, empty } from 'rxjs';
import { Colors } from '../share/colors.model';

@Injectable()
export class GameService{
    private challenge:Array<Color> = []
    private colors:Colors = new Colors()
    private contEndGame:number = 0
    private randomNumbers:Array<number> = []
    private auxRandomColor:number

//Subjects____
    private score:number[]=[]
    public scoreSubject = new BehaviorSubject(this.score)
    private game:Array<Round> = []
    public gameSubject:BehaviorSubject<any>

    constructor(){
        //gerar o desafio  
        let color = this.colors.getColors()   
        for(let i=0;i<4;i++){               
            this.avoidRepeatNumber()
            this.challenge.push(color[this.auxRandomColor])
        }

        for(let i=0;i<10;i++){
            this.game[i] = new Round([new Color('','#ffffff'),new Color('','#ffffff'),new Color('','#ffffff'),new Color('','#ffffff')])
        }
        this.gameSubject = new BehaviorSubject(this.game)
        console.log(this.challenge)
    }

    public avoidRepeatNumber():void{       
         
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

    public verifyRound(round:Round):void{
        this.score = []
        this.contEndGame++;

        for(let i=0;i<round.choice.length;i++){
            for(let j=0;j<this.challenge.length; j++){
                if(i===j && this.challenge[j].hexColor === round.choice[i].hexColor){
                    this.score[i] = 2 
                    break
                }
                if(this.challenge[j].hexColor === round.choice[i].hexColor){
                    this.score[i] = 1
                }
            }
        }
        //caso nao seja nem 1 nem 2
        for(let i=0;i<4;i++){
            if(this.score[i] === undefined){
                this.score[i] = 0
            }
        }

        console.log(this.contEndGame)
        console.log(this.verifyVictory())
        this.verifyGame()
        this.mixScore()
        this.scoreSubject.next(this.score)
    }

    public mixScore(rec = 0):void{
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

    public getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public verifyVictory():boolean{
        //verify victory
        for(let i=0;i<this.score.length;i++){
            if(this.score[i] != 2){
                return false
            }
        }      

        return true        
    }
    public verifyGame(){
        if(this.verifyVictory() && this.contEndGame <=10){
            //End Game with victory
            console.log('ganhou o jogo')
        }else if(this.contEndGame === 10){
            //lost game
            console.log('perdeu o jogo')
        }
    }


 
    
}