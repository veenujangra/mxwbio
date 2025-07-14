import Page from '..'
import HeroAnimation from './heroAnimation'
import Speaker from './speakers'

export default class People extends Page {
  pageElement: HTMLElement

  constructor(options: { element: HTMLElement }) {
    super(options)
    this.pageElement = options.element
    this.lenis = super.getLenis()
    this.create()
  }

  create() {
    super.create()
    // super.show()

    this.createHero()
    this.createSpeakersAccordion()
  }

  createHero() {
    new HeroAnimation({
      element: this.pageElement,
    }).create()
  }

  createSpeakersAccordion() {
    new Speaker({
      element: this.pageElement,
    }).create()
  }

  onResize() {
    super.onResize()
  }

  destroy(): void {
    super.destroy()
  }
}
