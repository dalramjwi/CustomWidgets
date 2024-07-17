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
    return (
      <div style={{ color: textColor, backgroundColor: backColor }}>{text}</div>
    );
  }
}
export default DivClass;
