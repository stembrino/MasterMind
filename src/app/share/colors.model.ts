import { Color } from '../models/color.model'
import { Injectable } from '@angular/core'

@Injectable()
export class Colors{
    private colors:Array<Color> = []

    constructor(){
        this.colors.push(
            new Color('vermelho', '#f33224'),
            new Color('amarelo', '#ffeb3b'),
            new Color('verde', '#4caf50'),
            new Color('roxo', '#9c27b0'),
            new Color('azul', '#2196f3'),
            new Color('laranja', '#ff9800'),
            new Color('preto', '#0c0c0c'),
            new Color('cinza', '#9e9e9e'),
            new Color('rosa', '#e91e63'),
            new Color('marrom', '#795548')
        )        
    }
    public getColors():Array<Color>{
        return this.colors
    }
    public getTxtColors():string[]{
        let txtColor = this.colors.map(color => color.name)
        return txtColor
    }

    public getHexColors():string[]{
        let hexColor = this.colors.map(color => color.hexColor)
        return hexColor
    }
}


