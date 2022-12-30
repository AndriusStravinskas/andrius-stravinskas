class ContainerComponent {
  htmlElement;

  constructor({ children }) {
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'container d-flex flex-column align-items-center gap-3';
    this.htmlElement.append(
      ...children,
    )
  }
};

export default ContainerComponent;