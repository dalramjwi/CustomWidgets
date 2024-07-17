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
    return {
      //div를 만드는 부분, innerText: text, color: textColor, backCgroundColor: backColor로 지정한다.
    };
  }
}
