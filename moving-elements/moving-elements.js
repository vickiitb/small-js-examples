

function moveLeft(){
    var leftCoord = window.getComputedStyle(randomWord,null).getPropertyValue('left');
    var movementHorizontal = 20;
		document.getElementById("randomWord").style.left = parseInt(leftCoord) - parseInt(movementHorizontal) + "px";
}

function moveRight(){
    var leftCoord = window.getComputedStyle(randomWord,null).getPropertyValue('left');
    var movementHorizontal = 20;
		document.getElementById("randomWord").style.left = parseInt(leftCoord) + parseInt(movementHorizontal) + "px";
}


function moveUp(){
    var topCoord = window.getComputedStyle(randomWord,null).getPropertyValue('top');
    var movementVertical = 20;
		document.getElementById("randomWord").style.top = parseInt(topCoord) - parseInt(movementVertical) + "px";
}


function moveDown(){
    var topCoord = window.getComputedStyle(randomWord,null).getPropertyValue('top');
    var movementVertical = 20;
		document.getElementById("randomWord").style.top = parseInt(topCoord) + parseInt(movementVertical) + "px";
}

