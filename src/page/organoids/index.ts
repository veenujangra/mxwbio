import Accordion from '@pixeto/accordion'
import Page from '..'
import DiscoveryVideoScale from './discoveryVideoScale'

export default class Organoids extends Page {
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
    this.createDiscoveryVideoScale()
  }

  createDiscoveryVideoScale() {
    new DiscoveryVideoScale({
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
