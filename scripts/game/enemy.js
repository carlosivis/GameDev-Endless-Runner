class Enemy extends Animate{
    constructor(matriz, imagem, x, variateY, largura, altura, larguraSprite, alturaSprite,velocidade, delay){
        super(matriz, imagem, x, variateY, largura, altura, larguraSprite, alturaSprite);
        this.velocidade = velocidade
        this.delay = delay
        this.x = width +this.delay
      }
      
      move() {
        setInterval(() => {
          this.velocidade = this.velocidade+0.0005
        }, 10000);
        this.x = this.x - this.velocidade
        
        if(this.x <= this.largura - this.delay){
          this.x = width
        }
      }
}