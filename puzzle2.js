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

moveUnits(6, "down");
moveUnits(3, "right");
moveUnits(2, "up");
moveUnits(2, "right");
moveUnits(3, "down");
    
