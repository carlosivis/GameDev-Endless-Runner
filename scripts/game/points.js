class Pts{
    constructor(){
        this.pt=0
    }

    show(){
        textAlign(RIGHT)
        fill('#FFF')
        textSize(50)
        text(parseInt(this.pt), width -30, 50)
    }
    plus(){
        this.pt+=0.2
    }
}