//Create variables here
var hungryDog, happyDog, database, foodStock, lastFedTime, isFed = false


function preload()
{
  //load images here
  hungryDog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 800);
  
  dog = createSprite(500,250,10,10)
  dog.scale = 0.25
  dog.addImage(hungryDog)

  foodObj = new Food(foodStock,lastFedTime);
  
  feed = createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)

}


function draw() {  

  background(46,139,87)
  foodObj.display();
  
  fill(255,255,254)
  textSize(15)

  lastFedTime = foodObj.getLastFedTime();  

  if(lastFedTime>12){
    text("Last Feed : "+ lastFedTime%12 + "PM", 350,30)
  }else if(lastFedTime === 0){
    text("Last Feed : 12 AM", 350,30)
  }else{
    text("Last Feed : "+ lastFedTime+ "AM",350,30)
  }


  //add styles here
  textSize(40)
  fill("blue")
  stroke("aqua")
  text("Food:"+ foodObj.getFoodStock(),200,100)

  
  
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);
  foodStock = foodObj.getFoodStock()-1;
  foodObj.updateFoodStock(foodStock);
  isFed = true;
}

function addFoods(){
  dog.addImage(hungryDog);
  foodStock = foodObj.getFoodStock()+1;
  foodObj.updateFoodStock(foodStock)
  isFed = false;
}


