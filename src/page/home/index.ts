import Accordion from '@pixeto/accordion'
import Page from '..'
import DiscoveryVideoScale from './discoveryVideoScale'
import HeroAnimation from './heroAnimation'
import Logo from './logo'

export default class Home extends Page {
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

    this.createHero()
    this.createDiscoveryVideoScale()
    this.createLogoAnimation()
  }

  createHero() {
    new HeroAnimation({
      element: this.pageElement,
    }).create()
  }

  createDiscoveryVideoScale() {
    new DiscoveryVideoScale({
      element: this.pageElement,
    }).create()
  }

  createLogoAnimation() {
    if (window.innerWidth < 768) {
      return
    }
    new Logo({
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
