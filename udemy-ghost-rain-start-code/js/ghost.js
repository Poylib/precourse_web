

function createGhost() {
  let topGhost = 0;
  let ghostElement = document.createElement('div');  
  let randomLeft = randomRange(0,BG_WIDTH-GHOST_WIDTH);
  ghostElement.style.top = `${topGhost}px`;
  ghostElement.style.position = 'absolute';
  ghostElement.style.left = `${randomLeft}px`;
  ghostElement.style.width = `${GHOST_WIDTH}px`
  ghostElement.style.height = `${GHOST_HEIGHT}px`
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';
  
  bgElement.appendChild(ghostElement);

  moveGhost(topGhost,ghostElement); //유령비 내리게 하는 함수
}

function randomRange(min,max) {
  return Math.floor(Math.random()*(max+1-min));
} //유령 위치 랜덤 생성

function moveGhost(top,el) {
  top++;
  
  if(top > BG_HEIGHT-(HERO_HEIGHT+GHOST_HEIGHT)) {
    const ghostLeft = Number(el.style.left.split('px')[0]);
    const heroLeft = Number(heroElement.style.left.split('px')[0]);
    if(ghostLeft<heroLeft && heroLeft < ghostLeft+GHOST_WIDTH) {
      die(el);
      return;
    }
    if(top > BG_HEIGHT - GHOST_HEIGHT) {
      remove(el);
      return;
    }
  }
  ////////////////// 유령비를 내리게 하는 부분
  el.style.top = `${top}px`;
  let requestAni;
  requestAni = window.requestAnimationFrame(function(){
    moveGhost(top,el)
  });  //움직이게 하는 함수
  //////////////////
}

function remove(e) {
  e.remove();
}

function die(el) {
  el.style.backgroundPosition = '-45px';

  const sound = new Audio('./audio/dying.wav');
  sound.play();

  setTimeout(()=> {
    remove(el)
  },3000);
}