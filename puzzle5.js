function moveUnits(totalStep, direction){
  for(var stepCount = 0; stepCount < totalStep; stepCount = stepCount + 1){
    if (direction == "down"){
      down();
    }
    if (direction == "up"){
      up();
    }
    if (direction == "left"){
      left();
    }
    if (direction == "right"){
      right();
  	}
  }
}

//function swiftMove(){
//  up();
//  right();
//  var color = getColor();
//  down();
//  setColor(color);
//  moveUnits(2, "right");
//}

function smartMove(){
  moveUnits(2, "right");
  var color = getColor();
  if (color == "blue"){
    down();
  }else{
    up();
  }
}

smartMove();
smartMove();
smartMove();
moveUnits(4, "right");

