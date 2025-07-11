import type Lenis from 'lenis'

export default class ScrollToSection {
  element: HTMLElement
  lenis: Lenis
  targetID: string | undefined
  constructor(options: { element: HTMLElement; lenis: Lenis }) {
    this.element = options.element
    this.lenis = options.lenis

    this.create()
    this.addEventListeners()
  }

  create() {
    this.targetID = this.element.getAttribute('href')?.replace('#', '') || ''
    this.element.removeAttribute('href')

    this.addIntersectionObserver()
  }

  addIntersectionObserver() {
    // Add Intersection Observer logic here on the target element
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Logic when the target element is in view
            this.element.classList.add('w--current')
          } else {
            // Logic when the target element is out of view
            this.element.classList.remove('w--current')
            // console.log('Target element is out of view:', entry.target)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    )

    if (this.targetID !== undefined) {
      const targetElement = document.getElementById(this.targetID)
      if (targetElement) {
        observer.observe(targetElement)
      } else {
        console.error('Target element not found for Intersection Observer:', this.targetID)
      }
    }
  }

  addEventListeners() {
    this.element.addEventListener('click', (event) => {
      event.preventDefault()

      if (this.targetID) {
        //  add Offset top to scroll

        const targetElement = document.getElementById(this.targetID)

        if (targetElement) {
          const offset = (window.innerHeight - targetElement?.offsetHeight) / 2

          this.lenis.scrollTo(targetElement, {
            duration: 1.2,
            easing: (t) => t * (2 - t), // easeInOutQuad
            offset: -offset,
          })
        } else {
          console.error('Target element not found:', this.targetID)
        }
      }
    })
  }
}
