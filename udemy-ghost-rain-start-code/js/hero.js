function setLeft(left) {
  const currentLeft = Number(getComputedStyle(heroElement).left.split('px')[0]);
  // getComputedStyle은 읽기 형식으로 단순히 값을 가져오기 위해 사용한 듯 하다.
  // heroElement.style.left 를 사용해 값을 저장해도 에러는 없다.
  const newLeft = currentLeft +left;

  if(newLeft>BG_WIDTH - HERO_WIDTH || newLeft < 0) return;

  heroElement.style.left = `${newLeft}px`
}