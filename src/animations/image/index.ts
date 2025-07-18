import gsap from 'gsap'
import Animation from '..'

export default class image extends Animation {
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
    // Initialize any properties or elements specific to the image animation
    this.setProperties()
  }

  setProperties() {
    // Set initial properties for the image animation
    gsap.set(this.element, {
      filter: 'blur(3px)',
      // autoAlpha: 0,
    })
  }

  animateIn() {
    if (!this.element) return

    // Animation logic for when the image comes into view
    gsap.fromTo(
      this.element,
      {
        // autoAlpha: 0,
        filter: 'blur(3px)',
      },
      {
        duration: this.settings.duration,
        // autoAlpha: 1,
        filter: 'blur(0px)',
        ease: this.settings.ease,
        delay: parseFloat(this.settings.delay),
        // onComplete: () => {
        //   this.element.classList.add('is-animated')
        // },
      }
    )
  }

  animateOut() {
    // Animation logic for when the image goes out of view
    // gsap.to(this.element, {
    //   opacity: 0,
    //   duration: 1,
    //   ease: 'power4.in',
    // })
  }
}
