import Accordion from '@pixeto/accordion'
import Page from '..'

export default class Product extends Page {
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
  }

  onResize() {
    super.onResize()
  }

  destroy(): void {
    super.destroy()
  }
}
