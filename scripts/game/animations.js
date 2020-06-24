class Animate{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        this.matriz = matriz
        this.imagem = imagem
        this.x = x
        this.y = height - this.altura
        this.largura = largura
        this.altura = altura
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite

        this. frameSprite = 0
    }
        show(){
            console.log("teste")
            image(this.imagem,this.x, this.y, 
                this.largura, this.altura,
                this.matriz[this.frameSprite][0],
                this.matriz[this.frameSprite][1],
                this.larguraSprite, this.alturaSprite);
            this.animate();
        }
        animate(){
            this.frameSprite++
            
            if (this.frameSprite>=this.matriz.length -1) {
                this.frameSprite = 0
            }
        }
    


}