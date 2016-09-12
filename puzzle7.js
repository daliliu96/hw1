function moveUnits(totalStep, direction){
  var color;
  for(var stepCount = 0; stepCount < totalStep; stepCount = stepCount + 1){
    color = getColor();
    if (color != "red"){
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
    }else{
      return;
    }
  }
}

moveUnits(100, "down");
right();
right();
moveUnits(100, "up");
right();
right();
moveUnits(100, "down");
right();
right();
moveUnits(100, "up");
right();
right();
moveUnits(100, "down");
right();
right();


    
