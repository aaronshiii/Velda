// Once the doc is ready
$(document).ready(function () {
  // Add our first sprite
  $('.tile-playfield').append('<div class="sprite grid-item sprite-1" id="sprite1"><img src="sprites/cowboy.png" alt="cowboy sprite"></div>');

  // Create our grid
  var i = 0;
  for (i; i < 62; i++) {
    $('.tile-playfield').append('<div class="grid-item col-1"><img class="tile" src="sprites/tile.png" alt="Green tile"></div>');
  }

  // Add our second sprite
  $('.tile-playfield').append('<div class="sprite grid-item sprite-2" id="sprite2"><img src="sprites/santa.png" alt="santa sprite"></div>');

  // Optimization possible: Use a sprite class
  // But for now, here are the coords of each sprite
  var sprite1X = 1;
  var sprite1Y = 1;

  var sprite2X = 8;
  var sprite2Y = 8;

  // Get filepaths for the images of the sprites running
  var sprite1animation = ['sprites/templerun/run1.png', 'sprites/templerun/run3.png', 'sprites/templerun/run2.png'];
  var sprite2animation = ['sprites/santarun/run1.png', 'sprites/santarun/run3.png', 'sprites/santarun/run2.png'];

  var sprite1anim = -1;
  var sprite2anim = -1;
  function animate (sprite) {
    if (sprite === 1) {
      sprite1anim++;
      if (sprite1anim === 2) {
        sprite1anim = 0;
      }
      return sprite1animation[sprite1anim];
    } else {
      sprite2anim++;
      if (sprite2anim === 2) {
        sprite2anim = 0;
      }
      return sprite2animation[sprite2anim];
    }
  };

  // Grab each sprite from the hml
  let sprite1 = document.querySelector('#sprite1');
  let sprite2 = document.querySelector('#sprite2');

  function checkBounds (sprite, direction) {
    if (sprite === 'a') {
      if (direction === 'up') {
        if (sprite1Y > 1) {
          return true;
        }
      } else if (direction === 'down') {
        if (sprite1Y < 8) {
          return true;
        }
      } else if (direction === 'left') {
        if (sprite1X > 1) {
          return true;
        }
      } else if (direction === 'right') {
        if (sprite1X < 8) {
          return true;
        }
      }
    } else if (sprite === 'b') {
      if (direction === 'up') {
        if (sprite2Y > 1) {
          return true;
        }
      } else if (direction === 'down') {
        if (sprite2Y < 8) {
          return true;
        }
      } else if (direction === 'left') {
        if (sprite2X > 1) {
          return true;
        }
      } else if (direction === 'right') {
        if (sprite2X < 8) {
          return true;
        }
      }
    }
    return false;
  }

  function move1 (sprite, direction) {
  // set css styles grid-column and grid-row
    if (direction === 'up') {
      if (checkBounds('a', direction) === true) {
        sprite1Y--;
        sprite.style.gridRowStart = sprite1Y;
        sprite.style.gridRowEnd = sprite1Y;
        sprite.style.gridColumnStart = sprite1X;
        sprite.style.gridColumnEnd = sprite1X;
        $('#sprite1 img').attr('src', animate(1));
      }
    } else if (direction === 'down') {
      if (checkBounds('a', direction) === true) {
        sprite1Y++;
        sprite.style.gridRowStart = sprite1Y;
        sprite.style.gridRowEnd = sprite1Y;
        sprite.style.gridColumnStart = sprite1X;
        sprite.style.gridColumnEnd = sprite1X;
        $('#sprite1 img').attr('src', animate(1));
      }
    } else if (direction === 'left') {
      if (checkBounds('a', direction) === true) {
        sprite1X--;
        sprite.style.gridRowStart = sprite1Y;
        sprite.style.gridRowEnd = sprite1Y;
        sprite.style.gridColumnStart = sprite1X;
        sprite.style.gridColumnEnd = sprite1X;
        $('#sprite1 img').attr('src', animate(1));
      }
    } else if (direction === 'right') {
      if (checkBounds('a', direction) === true) {
        sprite1X++;
        sprite.style.gridRowStart = sprite1Y;
        sprite.style.gridRowEnd = sprite1Y;
        sprite.style.gridColumnStart = sprite1X;
        sprite.style.gridColumnEnd = sprite1X;
        $('#sprite1 img').attr('src', animate(1));
      }
    }
  }

  function move2 (sprite, direction) {
    // set css styles grid-column and grid-row
    if (direction === 'up') {
      if (checkBounds('b', direction) === true) {
        sprite2Y--;
        sprite.style.gridRowStart = sprite2Y;
        sprite.style.gridRowEnd = sprite2Y;
        sprite.style.gridColumnStart = sprite2X;
        sprite.style.gridColumnEnd = sprite2X;
        $('#sprite2 img').attr('src', animate(2));
      }
    } else if (direction === 'down') {
      if (checkBounds('b', direction) === true) {
        sprite2Y++;
        sprite.style.gridRowStart = sprite2Y;
        sprite.style.gridRowEnd = sprite2Y;
        sprite.style.gridColumnStart = sprite2X;
        sprite.style.gridColumnEnd = sprite2X;
        $('#sprite2 img').attr('src', animate(2));
      }
    } else if (direction === 'left') {
      if (checkBounds('b', direction) === true) {
        sprite2X--;
        sprite.style.gridRowStart = sprite2Y;
        sprite.style.gridRowEnd = sprite2Y;
        sprite.style.gridColumnStart = sprite2X;
        sprite.style.gridColumnEnd = sprite2X;
        $('#sprite2 img').attr('src', animate(2));
      }
    } else if (direction === 'right') {
      if (checkBounds('b', direction) === true) {
        sprite2X++;
        sprite.style.gridRowStart = sprite2Y;
        sprite.style.gridRowEnd = sprite2Y;
        sprite.style.gridColumnStart = sprite2X;
        sprite.style.gridColumnEnd = sprite2X;
        $('#sprite2 img').attr('src', animate(2));
      }
    }
  }

  // Get keypress for each sprites movement
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
  }
  );

  // Get on-screen button click for sprite1
  document.getElementById('W').addEventListener('click', function () {
    move1(sprite1, 'up');
  });
  document.getElementById('S').addEventListener('click', function () {
    move1(sprite1, 'down');
  });
  document.getElementById('A').addEventListener('click', function () {
    move1(sprite1, 'left');
  });
  document.getElementById('D').addEventListener('click', function () {
    move1(sprite1, 'right');
  });

  // Get on-screen button click for sprite2
  document.getElementById('I').addEventListener('click', function () {
    move2(sprite2, 'up');
  });
  document.getElementById('K').addEventListener('click', function () {
    move2(sprite2, 'down');
  });
  document.getElementById('J').addEventListener('click', function () {
    move2(sprite2, 'left');
  });
  document.getElementById('L').addEventListener('click', function () {
    move2(sprite2, 'right');
  });
});
