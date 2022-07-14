document.addEventListener('keydown', function(e){
  // 화면에서 키 누르면 발생할 동작
  // 왼쪽 37, 오른쪽 39
  
  let keyCode = e.keyCode;
  let heroLeft = getComputedStyle(heroElement).left;
  //heroLeft.split('px')[0] << string이라 숫자로 바꿔줘야 함
  let heroLeftPx = Number(heroLeft.split('px')[0])
  
  if(keyCode === 37) {
    heroElement.style.left = `${heroLeftPx -10}px`;
    heroElement.className = 'left';
  } else if(keyCode === 39) {
    heroElement.style.left = `${heroLeftPx +10}px`;
    heroElement.className = 'right';
  }
  // heroElement.style.left = '30px'
});

document.addEventListener('keyup',function(){
  heroElement.className = 'stop';
})