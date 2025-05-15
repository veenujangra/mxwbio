import Animation from '..'
import gsap from 'gsap'

export default class FadeUp extends Animation {
  settings: { delay: string; duration: string; ease: string }

  constructor(options: { element: HTMLElement }) {
    super(options)
    this.element = options.element
    this.settings = {
      delay: this.element.getAttribute('data-delay') || '0',
      duration: this.element.getAttribute('data-duration') || '0.63',
      ease: this.element.getAttribute('data-ease') || 'power1.in',
    }

    this.create()
  }

  create() {
    // Initialize any properties or elements specific to the fade-up animation
    this.setProperties()
  }

  setProperties() {
    // Set initial properties for the fade-up animation
    gsap.set(this.element, {
      autoAlpha: 0,
      y: 20,
    })
  }

  animateIn() {
    if (!this.element || this.element.classList.contains('is-animated')) return
    // Animation logic for when the element comes into view
    gsap.to(this.element, {
      duration: this.settings.duration,
      autoAlpha: 1,
      y: 0,
      ease: this.settings.ease,
      delay: parseFloat(this.settings.delay),
      onComplete: () => {
        this.element.classList.add('is-animated')
      },
    })
  }

  animateOut() {
    // Animation logic for when the element goes out of view
    gsap.to(this.element, {
      autoAlpha: 0,
      y: -20,
      duration: 0.63,
      ease: 'power1.out',
    })
  }
}
