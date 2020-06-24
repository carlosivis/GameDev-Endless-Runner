
class Sprite extends Animate{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        
        this.yInicial = height - this.altura;
        this.y = this.yInicial;
        
        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
      }
    
}