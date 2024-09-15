import Content from "./interface";

const textContent = {
  h1: "Hello",
  h2: "Type Your Name HERE",
  name: "",
};
const MaintextContent: Content = {
  name: textContent.name,
  bgColor: "#ffffff",
  textColor: "#000000",
  isNameHidden: false,
  gridConfig: { row: 3, col: 3 },
};
export { MaintextContent, textContent };
