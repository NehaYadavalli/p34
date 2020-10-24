//Create variables here
var dog, dogImg, dogImgHappy, happyDog, database, foodS, foodStock;


function preload()
{
  dogImgHappy = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database(); //initiates data

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)

  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    foodStock(foodS);
    dog.addImage(dogHappy);
  }

  
  writeStock();
  drawSprites();
  //add styles here

  text("Press up arrow to feed the dog food",400,100)


}

function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  database.ref('/').update({Food : x});

  if(x<=0){
    x=0;
  }
  else {
    x=x-1;
  }
}




