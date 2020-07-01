
class Sprite extends Animate{
    constructor(matriz, imagem, x, variateY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, variateY, largura, altura, larguraSprite, alturaSprite);
        
        this.variateY = variateY
        this.yInicial = height - this.altura - this.variateY;
        this.y = this.yInicial;
        
        this.jumpSpeed = 0;
        this.gravidade = 3.5;
        this.jumpHeight = -40
        this.jumpQtd = 0
      }
      
      jump(){
        if(this.jumpQtd<2){
        this.jumpSpeed = this.jumpHeight
        this.jumpQtd++
        }
      }
      gravity(){
        this.y += this.jumpSpeed
        this.jumpSpeed += this.gravidade
          if(this.y >this.yInicial){
            this.y=this.yInicial
            this.jumpQtd =0
          }
      }

      collision(enemy){
      
        const precisao = .7
        noFill()
        rect(this.x,
          this.y,
          this.largura*precisao,
          this.altura*precisao)
        rect(enemy.x,
          enemy.y,
          enemy.largura*precisao,
          enemy.altura*precisao)
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