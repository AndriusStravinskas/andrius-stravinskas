class HeaderComponent {
  htmlElement;

  constructor({text, className, elementType = 'h1'}) {
    this.htmlElement = document.createElement(elementType);
    if(className) this.htmlElement.className = className

    this.htmlElement.innerHTML = text;
  }
};

export default HeaderComponent