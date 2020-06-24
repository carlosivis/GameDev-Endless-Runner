
let imgChar
let imgMap
let imgEnemy
let map
let spriteEnemy
let spriteChar
let soundtrack
let mapSpeed = 3;
const matrizEnemy = [
  //Line1
  [0, 0],[104, 0],
  [104*2, 0],[104*3, 0],
  //Line2
  [0, 104],[104, 104],
  [104*2, 104],[104*3, 104],
  //Line3
  [0, 104*2],[104, 104*2],
  [104*2, 104*2],[104*3, 104*2],
  //Line4
  [0, 104*3],[104, 104*3],
  [104*2, 104*3],[104*3, 104*3],
  //Line5
  [0, 104*4],[104, 104*4],
  [104*2, 104*4],[104*3, 104*4],
  //Line6
  [0, 104*5],[104, 104*5],
  [104*2, 104*5],[104*3, 104*5],
  //Line7
  [0, 104*6],[104, 104*6],
  [104*2, 104*6],[104*3, 104*6],
  ]

function preload(){
  imgMap = loadImage('imagens/cenario/floresta.png')
  imgChar = loadImage('imagens/personagem/correndo.png')
  imgEnemy = loadImage('imagens/personagem/correndo.png')
  soundtrack = loadSound('sons/trilha_jogo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  soundtrack.loop()
  map =  new Map(imgMap, mapSpeed)
  spriteChar = new Sprite(imgChar)
  spriteEnemy = new Enemy(matrizEnemy, imgEnemy, width-52, 52, 52, 104, 104)
  frameRate(60)
}
 
function draw() {
  map.show()
  map.move() 
  spriteEnemy.show()
  spriteEnemy.move()
  spriteChar.show()
}