var sprite1X = 1;
var sprite1Y = 1;

var sprite2X = 8;
var sprite2Y = 8;

let sprite1 = document.querySelector('#sprite1');
let sprite2 = document.querySelector('#sprite2');

function checkBounds (sprite) {
  return true;
}

function move1 (sprite, direction) {
  // set css styles grid-column and grid-row
  if (checkBounds(sprite) === true) {
    if (direction === 'up') {
      sprite1Y--;
      // console.log(sprite.style.gridRowStart);
      sprite.style.gridRowStart = sprite1Y;
      sprite.style.gridRowEnd = sprite1Y;
      sprite.style.gridColumnStart = sprite1X;
      sprite.style.gridColumnEnd = sprite1X;
    } else if (direction === 'down') {
      sprite1Y++;
      // console.log(sprite.style.gridRowStart);
      sprite.style.gridRowStart = sprite1Y;
      sprite.style.gridRowEnd = sprite1Y;
      sprite.style.gridColumnStart = sprite1X;
      sprite.style.gridColumnEnd = sprite1X;
    } else if (direction === 'left') {
      sprite1X--;
      sprite.style.gridRowStart = sprite1Y;
      sprite.style.gridRowEnd = sprite1Y;
      sprite.style.gridColumnStart = sprite1X;
      sprite.style.gridColumnEnd = sprite1X;
    } else if (direction === 'right') {
      sprite1X++;
      sprite.style.gridRowStart = sprite1Y;
      sprite.style.gridRowEnd = sprite1Y;
      sprite.style.gridColumnStart = sprite1X;
      sprite.style.gridColumnEnd = sprite1X;
    }
  }
}

function move2 (sprite, direction) {
  // set css styles grid-column and grid-row
  if (checkBounds(sprite) === true) {
    if (direction === 'up') {
      sprite2Y--;
      // console.log(sprite.style.gridRowStart);
      sprite.style.gridRowStart = sprite2Y;
      sprite.style.gridRowEnd = sprite2Y;
      sprite.style.gridColumnStart = sprite2X;
      sprite.style.gridColumnEnd = sprite2X;
    } else if (direction === 'down') {
      sprite2Y++;
      // console.log(sprite.style.gridRowStart);
      sprite.style.gridRowStart = sprite2Y;
      sprite.style.gridRowEnd = sprite2Y;
      sprite.style.gridColumnStart = sprite2X;
      sprite.style.gridColumnEnd = sprite2X;
    } else if (direction === 'left') {
      sprite2X--;
      sprite.style.gridRowStart = sprite2Y;
      sprite.style.gridRowEnd = sprite2Y;
      sprite.style.gridColumnStart = sprite2X;
      sprite.style.gridColumnEnd = sprite2X;
    } else if (direction === 'right') {
      sprite2X++;
      sprite.style.gridRowStart = sprite2Y;
      sprite.style.gridRowEnd = sprite2Y;
      sprite.style.gridColumnStart = sprite2X;
      sprite.style.gridColumnEnd = sprite2X;
    }
  }
}

document.querySelector('html').addEventListener('keyup', (event) => {
  if (event.key === 'w') {
    move1(sprite1, 'up');
  } else if (event.key === 'a') {
    move1(sprite1, 'left');
  } else if (event.key === 's') {
    move1(sprite1, 'down');
  } else if (event.key === 'd') {
    move1(sprite1, 'right');
  } else if (event.key === 'i') {
    move2(sprite2, 'up');
  } else if (event.key === 'j') {
    move2(sprite2, 'left');
  } else if (event.key === 'k') {
    move2(sprite2, 'down');
  } else if (event.key === 'l') {
    move2(sprite2, 'right');
  }
});
