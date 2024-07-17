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
      text: this.text,
      color: this.textColor,
      backgroundColor: this.backColor,
    };
  }
}
