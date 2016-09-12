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

moveUnits(2, "down");
var color = getColor();
moveUnits(3, "down");
moveUnits(2, "right");
setColor(color);
moveUnits(2, "right");
moveUnits(1, "up");
    
