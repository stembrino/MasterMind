import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { GameService } from '../game.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private gameService:GameService, private router:Router){}
    private token_id:string
    private isAuthenticated = false 

    
    public canActivate(): boolean{
        
        if(!this.isAuthenticated){
            this.router.navigate(['/home'])
        }
        return this.isAuthenticated
    }
    public toAbleStartGame(){
        this.isAuthenticated = true
    }


       

} 