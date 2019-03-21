function checkBounds (sprite) {
  return true;
}

function move (sprite, direction) {
  // set css styles grid-column and grid-row
  if (checkBounds(sprite) === true) {
    if (direction === 'up') {

    } else if (direction === 'down') {

    } else if (direction === 'left') {

    } else if (direction === 'right') {

    }
  }
}

document.getElementById('main').addEventListener('keyup', event => {
  let sprite1 = document.getElementById('sprite1');
  let sprite2 = document.getElementById('sprite2');

  if (event.keyCode === 87) {
    // w
    move(sprite1, 'up');
  } else if (event.keyCode === 65) {
    // a
    move(sprite1, 'left');
  } else if (event.keyCode === 83) {
    // s
    move(sprite1, 'down');
  } else if (event.keyCode === 68) {
    // d
    move(sprite1, 'right');
  } else if (event.keyCode === 73) {
    // i
    move(sprite2, 'up');
  } else if (event.keyCode === 74) {
    // j
    move(sprite2, 'left');
  } else if (event.keyCode === 75) {
    // k
    move(sprite2, 'down');
  } else if (event.keyCode === 76) {
    // l
    move(sprite2, 'right');
  }
});
