
let imgChar
let imgMap
let imgEnemy
let map
let spriteEnemy
let spriteChar

let soundJump
let soundtrack

let mapSpeed = 3
let jumpCount = 0;

  // Enemy constants
  const baseEnemyValue = 104
  // Char constants
  const charHeight = 270
  const charWidth = 220
  const baseCharValueX = 220
  const baseCharValueY = 270 
  
const matrizEnemy = [
  //Line1
  [0, 0],[baseEnemyValue, 0],
  [baseEnemyValue*2, 0],[baseEnemyValue*3, 0],
  //Line2
  [0, baseEnemyValue],[baseEnemyValue, baseEnemyValue],
  [baseEnemyValue*2, baseEnemyValue],[baseEnemyValue*3, baseEnemyValue],
  //Line3
  [0, baseEnemyValue*2],[baseEnemyValue, baseEnemyValue*2],
  [baseEnemyValue*2, baseEnemyValue*2],[baseEnemyValue*3, baseEnemyValue*2],
  //Line4
  [0, baseEnemyValue*3],[baseEnemyValue, baseEnemyValue*3],
  [baseEnemyValue*2, baseEnemyValue*3],[baseEnemyValue*3, baseEnemyValue*3],
  //Line5
  [0, baseEnemyValue*4],[baseEnemyValue, baseEnemyValue*4],
  [baseEnemyValue*2, baseEnemyValue*4],[baseEnemyValue*3, baseEnemyValue*4],
  //Line6
  [0, baseEnemyValue*5],[baseEnemyValue, baseEnemyValue*5],
  [baseEnemyValue*2, baseEnemyValue*5],[baseEnemyValue*3, baseEnemyValue*5],
  //Line7
  [0, baseEnemyValue*6],[baseEnemyValue, baseEnemyValue*6],
  [baseEnemyValue*2, baseEnemyValue*6],[baseEnemyValue*3, baseEnemyValue*6],
  ]
const matrizChar = [[0, 0],
[baseCharValueX, 0],
[baseCharValueX*2, 0],
[baseCharValueX*3, 0],
//Line2
[0, baseCharValueY],
[baseCharValueX, baseCharValueY],
[baseCharValueX*2, baseCharValueY],
[baseCharValueX*3, baseCharValueY],
//Line3
[0, baseCharValueY*2],
[baseCharValueX, baseCharValueY*2],
[baseCharValueX*2, baseCharValueY*2],
[baseCharValueX*2, baseCharValueY*2],
//Line4
[0, baseCharValueY*3],
[baseCharValueX, baseCharValueY*3],
[baseCharValueX*2, baseCharValueY*3],
[baseCharValueX*3, baseCharValueY*3],
]  

function preload(){
  imgMap = loadImage('imagens/cenario/floresta.png')
  imgChar = loadImage('imagens/personagem/correndo.png')
  imgEnemy = loadImage('imagens/inimigos/gotinha.png')
  soundtrack = loadSound('sons/trilha_jogo.mp3')  
  soundJump = loadSound('sons/somPulo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  soundtrack.loop()
  map =  new Map(imgMap, mapSpeed)
  spriteChar = new Sprite(matrizChar, imgChar,  height*.10, baseCharValueX/2, baseCharValueY/2, baseCharValueX, baseCharValueY)
  spriteEnemy = new Enemy(matrizEnemy, imgEnemy, width -52, baseEnemyValue/2, baseEnemyValue/2, baseEnemyValue, baseEnemyValue)
}
 function keyPressed(){

   if(key = 'ArrowUp'){
     jumpCount++
     if(jumpCount<=2){
      spriteChar.jump()
      soundJump.play()
     }
     if(jumpCount>2 && spriteChar.y >= height - baseCharValueY/2)
     jumpCount=0
     if(spriteChar.y >= height - baseCharValueY/2)
     jumpCount=0
   }

 }
function draw() {
  map.show()
  map.move() 

  spriteChar.show()
  spriteChar.gravity()

  spriteEnemy.show()
  spriteEnemy.move()

  if(spriteChar.collision(spriteEnemy)){
    console.log("Colidiu")
    noLoop()
  }
  
}