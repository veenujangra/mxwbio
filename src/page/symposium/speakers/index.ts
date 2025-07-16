import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Speaker {
  element: HTMLElement
  constructor(options: { element: HTMLElement }) {
    this.element = options.element
  }

  create() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    const header = this.element.querySelector('[data-speaker ="header"]')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.element,
        start: 'top top',
        end: 'center bottom',
        scrub: 1,
      },
    })

    tl.fromTo(
      header,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        ease: 'power1.inOut',
      }
    )

    const cards = this.element.querySelectorAll('[data-speaker="card"]')

    // Add active class with card is clicked
    cards.forEach((card) => {
      // Add active class when card is clicked
      card.addEventListener('click', () => {
        cards.forEach((c) => c.classList.remove('is--open'))
        card.classList.add('is--open')
      })
    })

    const closeButtons = this.element.querySelectorAll('[data-speaker="close"]')
    // Close the card when close button is clicked
    closeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation() // Prevent the click from bubbling up to the card
        cards.forEach((c) => c.classList.remove('is--open'))
      })
    })

    this.closeAll()
  }

  closeAll() {
    // Close all speaker cards with click outside the card
    document.addEventListener(
      'click',
      (event) => {
        const target = event.target as HTMLElement
        const isCard = target.closest('[data-speaker="card"]')
        if (!isCard) {
          const cards = this.element.querySelectorAll('[data-speaker="card"]')
          cards.forEach((c) => c.classList.remove('is--open'))
        }
      },
      { passive: true }
    ) // Use passive event listener for performance
  }
}
