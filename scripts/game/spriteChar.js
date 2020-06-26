
class Sprite extends Animate{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        
        this.yInicial = height - this.altura;
        this.y = this.yInicial;
        
        this.jumpSpeed = 0;
        this.gravidade = 3;
      }
      
      jump(){
        this.jumpSpeed = -30
      }
      gravity(){
        this.y += this.jumpSpeed
        this.jumpSpeed += this.gravidade
          if(this.y >this.yInicial ){
            this.y=this.yInicial
          }
      }

      collision(enemy){
      
        const precisao = .7
        const colisao = collideRectRect(
          this.x,
          this.y,
          this.largura*precisao,
          this.altura*precisao,
          enemy.x,
          enemy.y,
          enemy.largura*precisao,
          enemy.altura*precisao
        )
        return colisao
      }
}