import Home from './page/home'
import Product from './page/product'
import './style.css'

class MaxWellBiosystems {
  home: Home | undefined
  product: Product | undefined

  constructor() {
    this.createPage()
  }

  createPage() {
    /**
     * Home Page
     */
    if (document.querySelector('[data-page="home"]')) {
      this.home = new Home({
        element: document.querySelector('[data-page="home"]') as HTMLElement,
      })
    }
    /**
     * Product Page
     */
    if (document.querySelector('[data-page="product"]')) {
      this.product = new Product({
        element: document.querySelector('[data-page="product"]') as HTMLElement,
      })
    }
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {}
}

new MaxWellBiosystems()
