import gsap from 'gsap'
import Animation from '..'
import { SplitText } from 'gsap/all'

export default class Title extends Animation {
  text: SplitText | undefined
  tl: gsap.core.Timeline | undefined
  settings: { delay: string; duration: string; ease: string }
  constructor(options: { element: HTMLElement }) {
    super(options)
    this.element = options.element

    this.settings = {
      delay: this.element.getAttribute('data-delay') || '0',
      duration: this.element.getAttribute('data-duration') || '0.63',
      ease: this.element.getAttribute('data-ease') || 'power4.out',
    }

    this.registerPlugins()
    this.create()
  }

  registerPlugins() {
    // Register any GSAP plugins here
    gsap.registerPlugin(SplitText)
  }

  create() {
    this.text = SplitText.create(this.element, {
      type: 'lines',
      // mask: 'lines',
    })
    this.setProperties()
  }

  setProperties() {
    if (!this.text) return

    gsap.set(this.text.lines, {
      autoAlpha: 0,
      y: '50%',
    })
  }

  animateIn() {
    if (this.tl) {
      this.tl.kill()
    }
    if (!this.text) return

    if (!this.element || this.element.classList.contains('is-animated')) return
    this.tl = gsap.timeline({})

    if (!this.text) return
    this.tl.fromTo(
      this.text.lines,
      {
        y: '50%',
        autoAlpha: 0,
        filter: 'blur(4px)',
      },
      {
        y: '0%',
        filter: 'blur(0px)',
        stagger: 0.1,
        autoAlpha: 1,
        duration: parseFloat(this.settings.duration),
        ease: this.settings.ease,
        delay: parseFloat(this.settings.delay),
        onComplete: () => {
          this.text?.revert()
          this.text = undefined
          this.tl = undefined
          this.element.classList.add('is-animated')
        },
      }
    )
  }

  animateOut() {}
}
