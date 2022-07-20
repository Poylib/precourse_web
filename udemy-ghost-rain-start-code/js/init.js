function init() {
  document.addEventListener(
    'keydown',function(e) {
      checkKey(e,true);
    }
  )

  document.addEventListener(
    'keyup',
    function(e) {
      checkKey(e,false);
    }
  );
  
  setInterval(function() {
    createGhost();
  },2000);
};

function checkKey(e, isMoving) {
  if(isMoving) {
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39: //right
        heroElement.className = 'right';
        setLeft(10);
        e.preventDefault();
        break;
      case 37: //left
      heroElement.className = 'left';
      setLeft(-10);
      e.preventDefault();
      break;
    }
  } else {
    heroElement.className = 'stop'
  }
}

////////////add_startButton//////////
const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener("click",init)