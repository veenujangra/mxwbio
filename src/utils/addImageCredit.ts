export default class ImageCredit {
  element: HTMLImageElement
  constructor(options: { element: HTMLImageElement }) {
    this.element = options.element
    this.create()
  }

  create() {
    const caption = document.createElement('figcaption')
    caption.classList = 'image-credit'
    const container = document.createElement('div')
    container.classList = 'container is_large'
    caption.appendChild(container)

    container.textContent = this.element.alt
    const figure = document.createElement('figure')
    figure.classList = 'image-credit-wrapper'
    if (this.element.parentNode instanceof HTMLElement) {
      this.element.parentNode.appendChild(figure)
      figure.appendChild(this.element)
      figure.appendChild(caption)
    }
  }
}
