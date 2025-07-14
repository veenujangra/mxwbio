import Home from './page/home'
import Product from './page/product'
import Symposium from './page/symposium'
import Story from './page/story'
import './style.css'
import People from './page/people'

class MaxWellBiosystems {
  home: Home | undefined
  product: Product | undefined
  symposium: Symposium | undefined
  story: Story | undefined
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
    /**
     * Symposium Page
     */
    if (document.querySelector('[data-page="symposium"]')) {
      this.symposium = new Symposium({
        element: document.querySelector('[data-page="symposium"]') as HTMLElement,
      })
    }
    /**
     * Story Page
     */
    if (document.querySelector('[data-page="story"]')) {
      this.story = new Story({
        element: document.querySelector('[data-page="story"]') as HTMLElement,
      })
    }
    /**
     * People Page
     */
    if (document.querySelector('[data-page="people"]')) {
      new People({
        element: document.querySelector('[data-page="people"]') as HTMLElement,
      })
    }
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {}
}

new MaxWellBiosystems()
