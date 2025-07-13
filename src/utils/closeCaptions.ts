import gsap from 'gsap'

export default class CloseCaption {
  element: HTMLElement
  wrapper: HTMLElement | null
  constructor(options: { element: HTMLElement }) {
    this.element = options.element
    this.wrapper = this.element.closest('[data-caption-wrapper]')

    this.addEventListeners()
  }

  close() {
    gsap.to(this.wrapper, {
      paddingTop: 0,
      paddingBottom: 0,
      height: '0px',
      duration: 0.5,
      autoAlpha: 0,
    })
  }

  addEventListeners() {
    this.element.addEventListener('click', (event) => {
      event.preventDefault()
      this.close()
    })
  }
}
