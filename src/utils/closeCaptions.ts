import gsap from 'gsap'

export default class CloseCaption {
  element: HTMLElement
  wrapper: HTMLElement | null
  text: HTMLElement | null
  constructor(options: { element: HTMLElement }) {
    this.element = options.element
    this.wrapper = this.element.closest('[data-caption-wrapper]')
    this.text = this.wrapper?.querySelector('p') as HTMLElement | null
    this.addEventListeners()
  }

  close() {
    const tl = gsap.timeline()
    tl.to(this.text, {
      paddingTop: 0,
      paddingBottom: 0,
      height: '1.6rem',
      duration: 0.5,
      autoAlpha: 0,
      onComplete: () => {
        if (this.wrapper) {
          this.wrapper.classList.add('closed')
        }
      },
    }).to(
      this.element,
      {
        rotateZ: 0,
        duration: 0.5,
      },
      '<'
    )
  }

  open() {
    if (this.wrapper) {
      this.wrapper.classList.remove('closed')
    }
    const tl = gsap.timeline()
    tl.to(this.text, {
      height: 'auto',
      duration: 0.5,
      autoAlpha: 1,
    }).to(
      this.element,
      {
        rotateZ: 45,
        duration: 0.5,
      },
      '<'
    )
  }

  addEventListeners() {
    this.element.addEventListener('click', (event) => {
      event.preventDefault()

      if (this.wrapper?.classList.contains('closed')) {
        this.open()
      } else {
        this.close()
      }

      // this.close()
    })
  }
}
