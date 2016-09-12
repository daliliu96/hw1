
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
  var targetDirection;
	var color = getColor();
  if (color == "blue"){
    moveUnits(3, "down");
    targetDirection = "down";
  }else{
    moveUnits(3, "up");
    targetDirection = "up";
  }
  
  color = getColor();
  if (targetDirection == "down"){
    if (color == "blue"){
      right();
    }else{
      left();
    }
    down();
  }else{
    if (color == "blue"){
      right();
    }else{
      left();
    }
    up();
  }
}


right();
smartMove();
