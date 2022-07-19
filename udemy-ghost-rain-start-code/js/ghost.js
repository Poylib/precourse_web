let topGhost = 0;
let ghostElement = document.createElement('div');

function createGhost() {
  let randomLeft = randomRange(0,BG_WIDTH-GHOST_WIDTH);
  ghostElement.style.top = `${topGhost}px`;
  ghostElement.style.position = 'absolute';
  ghostElement.style.left = randomLeft + 'px';
  ghostElement.style.width = `${GHOST_WIDTH}px`
  ghostElement.style.height = `${GHOST_HEIGHT}px`
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';
  
  bgElement.appendChild(ghostElement);

  moveGhost() //유령비 내리게 하는 함수
}

function randomRange(min,max) {
  return Math.floor(Math.random()*(max+1-min));
} //유령 위치 랜덤 생성

function moveGhost() {
  let requestAni;
  topGhost++;
  ghostElement.style.top = `${topGhost}px`;
  requestAni = requestAnimationFrame(moveGhost);  //움직이게 하는 함수
  
  if(topGhost > BG_HEIGHT -GHOST_HEIGHT) {
    cancelAnimationFrame(requestAni)  //멈추게 하는 함수
    ghostElement.remove();
  }
}

createGhost();