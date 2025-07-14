import Accordion from '@pixeto/accordion'
import Page from '..'
import HeroAnimation from './heroAnimation'
import Trail from './trailAnimation'
import DiscoveryVideoScale from './discoveryVideoScale'

export default class Story extends Page {
  pageElement: HTMLElement

  constructor(options: { element: HTMLElement }) {
    super(options)
    this.pageElement = options.element
    this.lenis = super.getLenis()

    this.create()
  }

  create() {
    super.create()
    new Accordion()
    // super.show()

    this.createHeroAnimation()
    this.createDiscoveryVideoScale()
    // only on desktop
    if (window.innerWidth > 768) {
      this.createTrailAnimation()
    }
  }

  createHeroAnimation() {
    new HeroAnimation({
      element: this.pageElement,
    }).create()
  }

  createDiscoveryVideoScale() {
    new DiscoveryVideoScale({
      element: this.pageElement,
    }).create()
  }

  createTrailAnimation() {
    new Trail({
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
