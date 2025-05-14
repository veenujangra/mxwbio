import gsap from 'gsap'
import Lenis from 'lenis'

export default class Page {
  private element: HTMLElement
  private elements: Record<string, HTMLElement | NodeList | null> = {}

  animations: {
    base: { title: string; text: string; image: string }
    fade: { default: string; up: string; down: string; left: string; right: string }
  }
  lenis: Lenis = new Lenis({})
  tl: gsap.core.Timeline = gsap.timeline({})

  constructor(options: { element: HTMLElement }) {
    this.element = options.element
    this.animations = {
      base: {
        title: '[data-animation="title"]',
        text: '[data-animation="text"]',
        image: '[data-animation="image"]',
      },
      fade: {
        default: '[data-animation="fade-in"]',
        up: '[data-animation="fade-in-up"]',
        down: '[data-animation="fade-in-down"]',
        left: '[data-animation="fade-in-left"]',
        right: '[data-animation="fade-in-right"]',
      },
    }

    this.createSmoothScroll()
    this.addEventListener()
  }

  createSmoothScroll() {
    this.lenis = new Lenis({
      lerp: 0.075,
      syncTouchLerp: 0.075,
    })

    this.update(this.lenis.time)
  }

  create() {
    this.elements = {}
    Object.entries(this.animations).forEach(([key, value]) => {
      if (typeof value === 'string') {
        this.elements[key] = document.querySelectorAll(value)
        if (this.elements[key].length === 0) {
          this.elements[key] = null
        }
      }
    })
    this.createAnimations()
  }

  private createAnimations() {
    // Placeholder for animation creation logic
  }

  show() {
    this.tl = gsap.timeline({})
    this.tl.to(this.element, {
      duration: 0.63,
      opacity: 1,
      ease: 'power3.out',
    })
  }

  destroy() {
    this.elements = {}
    Object.entries(this.animations).forEach(([key, value]) => {
      if (typeof value === 'string') {
        this.elements[key] = null
      }
    })
  }

  update(time: number) {
    this.lenis.raf(time)
    requestAnimationFrame(this.update.bind(this))
  }

  /**Events */
  private addEventListener() {
    window.addEventListener('resize', this.onResize.bind(this))
    window.addEventListener('scroll', this.onScroll.bind(this))
  }

  private onScroll() {
    // check if we are at the top of the page with lenis
    // if lenis.progress is 0 we are at the top of the page
    // if lenis.progress is 1 we are at the bottom of the page
    if (this.lenis.progress === 0) {
      document.documentElement.classList.add('scroll-top')
    } else {
      document.documentElement.classList.remove('scroll-top')
    }
    // check direction of scroll
    // if lenis.direction is -1 we are scrolling up
    // if lenis.direction is 1 we are scrolling down
    if (this.lenis.direction === -1) {
      document.documentElement.classList.add('scroll-up')
      document.documentElement.classList.remove('scroll-down')
    } else if (this.lenis.direction === 1) {
      document.documentElement.classList.remove('scroll-up')
      document.documentElement.classList.add('scroll-down')
    }
  }

  onResize() {}
}
