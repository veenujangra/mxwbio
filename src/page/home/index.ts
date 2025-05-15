import Page from '..'
import Accordion from '@pixeto/accordion'
import Gallery from '../../animations/gallery'

export default class Home extends Page {
  constructor(options: { element: HTMLElement }) {
    super(options)
    this.lenis = super.getLenis()
    this.create()
  }

  create() {
    super.create()
    // Initialize the accordion
    super.show()
    new Accordion()

    // Initialize the gallery
    new Gallery({ list: Array.from(document.querySelectorAll('[data-gallery=list]')), lenis: this.lenis })
  }

  onResize() {
    super.onResize()
  }

  destroy(): void {
    super.destroy()
  }
}
