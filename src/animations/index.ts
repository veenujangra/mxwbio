export default class Animation {
  protected element: HTMLElement
  private observerOptions: IntersectionObserverInit = {}
  private observer: IntersectionObserver = new IntersectionObserver(() => {})
  private onResize: () => void = () => {}

  constructor(options: { element: HTMLElement }) {
    this.element = options.element

    this.createObserver()
    this.addEventListener()
  }

  createObserver() {
    this.observerOptions = {
      /**
       * The root element for the observer. If not specified, the viewport is used.
       * If the value is 'null', the observer will use the viewport as the root.
       * If the value is a string, it should be a selector for the root element.
       * If the value is a DOM element, it will be used as the root.
       * example value could be 'null', '#myRootElement', or document.querySelector('#myRootElement')
       *
       */
      rootMargin: this.element.getAttribute('data-root-margin') || '0px 0px -20% 0px',
      /**
       * Threshold is a value between 0 and 1 that indicates the percentage of the target's visibility the observer's callback should be executed.
       */
      threshold: parseFloat(this.element.getAttribute('data-threshold') || '0'),
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateIn()
        } else {
          this.animateOut()
        }
      })
    }, this.observerOptions)

    this.observer.observe(this.element)
  }

  animateIn() {}
  animateOut() {}

  addEventListener() {
    this.onResize = this.onResize.bind(this)
    window.addEventListener('resize', this.onResize)
  }
}
