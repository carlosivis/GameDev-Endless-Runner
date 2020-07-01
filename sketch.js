
let imgChar
let imgMap
let imgEnemy
let imgBigEnemy
let imgFlyEnemy

let imgGameOver
let map
let spriteEnemy
let spriteBigEnemy
let spriteFlyEnemy
let spriteChar

let soundJump
let soundtrack

let mapSpeed = 3
let jumpCount = 0;
let points

const EnemysArray = []

  // Enemy constants
  const baseEnemyValue = 104
  const baseBigEnemyValue = 400
  const baseFlyEnemyValueX = 200
  const baseFlyEnemyValueY = 150
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
const matrizEnemyBig = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
  ]
const matrizEnemyFly = [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
  ]
const matrizChar = [
  [0, 0],
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
  imgBigEnemy = loadImage('imagens/inimigos/troll.png')
  imgFlyEnemy = loadImage('imagens/inimigos/gotinha-voadora.png')
  imgGameOver = loadImage('imagens/assets/game-over.png')
  soundtrack = loadSound('sons/trilha_jogo.mp3')  
  soundJump = loadSound('sons/somPulo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  soundtrack.loop()
  points = new Pts()
  map =  new Map(imgMap, mapSpeed)
  spriteChar = new Sprite(matrizChar, imgChar,  height*.10, 30, baseCharValueX/2, baseCharValueY/2, baseCharValueX, baseCharValueY)
  const spriteEnemy = new Enemy(matrizEnemy, imgEnemy, width -52, 30, baseEnemyValue/2, baseEnemyValue/2,  baseEnemyValue, baseEnemyValue,5,100)
  const spriteBigEnemy = new Enemy(matrizEnemyBig,imgBigEnemy, width, 0 ,baseBigEnemyValue/2, baseBigEnemyValue/2, baseBigEnemyValue,baseBigEnemyValue,4,3000)
  const spriteFlyEnemy = new Enemy(matrizEnemyFly, imgFlyEnemy , width, 250 , baseFlyEnemyValueX/2, baseFlyEnemyValueY/2, baseFlyEnemyValueX, baseFlyEnemyValueY, 5, 700)

  EnemysArray.push(spriteFlyEnemy)
  EnemysArray.push(spriteEnemy)
  EnemysArray.push(spriteBigEnemy)
}
 function keyPressed(){

   if(key = 'ArrowUp'){
      spriteChar.jump()
      soundJump.play()
   }

 }
function draw() {
  map.show()
  map.move() 

  spriteChar.show()
  spriteChar.gravity()
  points.show()
  points.plus()
  EnemysArray.forEach(enemy =>{
    enemy.show()
    enemy.move()
    if(spriteChar.collision(enemy)){
      image(imgGameOver, width/2 -200, height/2 -200)
      noLoop()
    }
  })
  
  
}