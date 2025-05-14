import Page from '..'
import Accordion from '@pixeto/accordion'

export default class Home extends Page {
  constructor(options: { element: HTMLElement }) {
    super(options)
    this.create()
  }

  create() {
    super.create()
    // Initialize the accordion
    new Accordion()
  }

  onResize() {
    super.onResize()
  }

  destroy(): void {
    super.destroy()
  }
}
