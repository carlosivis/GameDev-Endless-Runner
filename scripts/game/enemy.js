class Enemy extends Animate{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        this.velocidade =5
      }
      
      move() {
        setInterval(() => {
          this.velocidade = this.velocidade+0.0005
        }, 10000);
        this.x = this.x - this.velocidade
        
        if(this.x <= this.largura){
          this.x = width
        }
      }
}