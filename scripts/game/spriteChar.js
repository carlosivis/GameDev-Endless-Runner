
class Sprite{
    constructor(imagem){
        this.charHeight = 270
        this.charWidth = 220
        this.matrizStartX = 0
        this.matrizStartY = 0
        this.basevalueX = 220
        this.basevalueY = 270
        this.imagem = imagem;
        this.matriz = [
            //Line1
            [this.matrizStartX, this.matrizStartY],
            [this.basevalueX, this.matrizStartY],
            [this.basevalueX*2, this.matrizStartY],
            [this.basevalueX*3, this.matrizStartY],
            //Line2
            [this.matrizStartX, this.basevalueY],
            [this.basevalueX, this.basevalueY],
            [this.basevalueX*2, this.basevalueY],
            [this.basevalueX*3, this.basevalueY],
            //Line3
            [this.matrizStartX, this.basevalueY*2],
            [this.basevalueX, this.basevalueY*2],
            [this.basevalueX*2, this.basevalueY*2],
            [this.basevalueX*2, this.basevalueY*2],
            //Line4
            [this.matrizStartX, this.basevalueY*3],
            [this.basevalueX, this.basevalueY*3],
            [this.basevalueX*2, this.basevalueY*3],
            [this.basevalueX*3, this.basevalueY*3],
        ];
        this.frameSprite = 0
    }
    show(){
        image(this.imagem, width*30%100, height-135, 110, 135,
             this.matriz[this.frameSprite][0],
             this.matriz[this.frameSprite][1],
              this.charWidth, this.charHeight);
        this.animate();
    }
    animate(){
        this.frameSprite++
        
        if (this.frameSprite>=this.matriz.length -1) {
            this.frameSprite = 0
        }
    }
}