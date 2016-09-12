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

function swiftMove(){
  up();
  right();
  var color = getColor();
  down();
  setColor(color);
  moveUnits(2, "right");
}

moveUnits(5, "down");

swiftMove();
swiftMove();
