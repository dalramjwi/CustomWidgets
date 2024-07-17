type s = string;

class DivClass {
  text: s;
  textColor: s;
  backColor: s;
  constructor(text: s, textColor: s, backColor: s) {
    this.text = text;
    this.textColor = textColor;
    this.backColor = backColor;
  }
  divSet(text: s, textColor: s, backColor: s) {
    // div 요소 생성
    const div = document.createElement("div");

    // div의 텍스트 설정
    div.innerText = text;

    // div의 스타일 설정
    div.style.color = textColor;
    div.style.backgroundColor = backColor;

    // 생성된 div 요소 반환
    return div;
  }
}
export default DivClass;
