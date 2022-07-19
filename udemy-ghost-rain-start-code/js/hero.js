document.addEventListener('keydown', function(e){
  // 화면에서 키 누르면 발생할 동작
  // 왼쪽 37, 오른쪽 39
  
  let keyCode = e.keyCode;
  let heroLeft = getComputedStyle(heroElement).left;
  //heroLeft.split('px')[0] << string이라 숫자로 바꿔줘야 함
  let heroLeftPx = Number(heroLeft.split('px')[0])

  if (
    // 캐릭터 크기만큼  +- 해줘야 한다. 아니면 끝에 멈추고 캐릭터가 조금 튀어나옴
    // 아래 if문이 움직임을 인식하는 명령이므로 이 if 문이 밑으로 내려가면, 벽에 걸릴일 없이 계속 이동됨
    (heroLeftPx -10 < 0 && keyCode === 37) ||
    (heroLeftPx +10  > BG_WIDTH - HERO_WIDTH && keyCode === 39)
  ) {
    // return..  함수를 종료
    return;
  }

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
