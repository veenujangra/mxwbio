import Animation from '..'

export default class Title extends Animation {
  text: SplitText | undefined
  tl: gsap.core.Timeline | undefined
  constructor(options: { element: HTMLElement }) {
    super(options)
    this.element = options.element
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
      mask: 'lines',
    })
  }

  setProperties() {
    if (!this.text) return

    gsap.set(this.text.lines, {
      autoAlpha: 0,
      y: '100%',
    })
  }

  animateIn() {
    this.tl = gsap.timeline({})

    if (!this.text) return
    this.tl.fromTo(
      this.text.lines,
      {
        y: '100%',
        autoAlpha: 0,
        stagger: 0.1,
      },
      {
        y: '0%',
        autoAlpha: 1,
        duration: 0.63,
        ease: 'power2.out',
      }
    )
  }

  animateOut() {}
}
