import Accordion from '@pixeto/accordion'
import Page from '..'
import HeroAnimation from './heroAnimation'
import Speaker from './speakers'
import DiscoveryVideoScale from './discoveryVideoScale'

export default class Symposium extends Page {
  pageElement: HTMLElement

  constructor(options: { element: HTMLElement }) {
    super(options)
    this.pageElement = options.element
    this.lenis = super.getLenis()

    // this.lenis.options.allowNestedScroll = true

    this.create()
  }

  create() {
    super.create()
    // super.show()
    new Accordion()
    this.createHeroAnimation()
    this.createSpeakersAccordion()
    this.createDiscoveryVideoScale()
  }

  createSpeakersAccordion() {
    new Speaker({
      element: this.pageElement.querySelector('[data-speaker="wrapper"]') as HTMLElement,
    }).create()
  }

  createHeroAnimation() {
    new HeroAnimation({
      element: this.pageElement,
    }).create()
  }

  createDiscoveryVideoScale() {
    new DiscoveryVideoScale({
      element: this.pageElement as HTMLElement,
    }).create()
  }

  onResize() {
    super.onResize()
  }

  destroy(): void {
    super.destroy()
  }
}
