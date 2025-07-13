import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Trail {
  element: HTMLElement
  constructor(options: { element: HTMLElement }) {
    this.element = options.element
  }

  create() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = this.element.querySelector(
      '[data-trail-animation="wrapper"]'
    ) as HTMLElement | null
    const blocks = wrapper
      ? (wrapper.querySelectorAll(
          '[data-trail-animation="block"]'
        ) as NodeListOf<HTMLElement>)
      : null

    blocks?.forEach((block: HTMLElement) => {
      this.createAnimation(block as HTMLElement)
    })
  }

  createAnimation(block: HTMLElement) {
    const animationElements = {
      block: block,
      // block: blocks.querySelector('[data-trail-animation="block"]') as HTMLElement | null,
      trail: block.querySelector('[data-trail-animation="trail"]') as HTMLElement,
    }

    // Calculate the width of all trials direct children as a single width
    const width =
      Array.from(animationElements.trail.children).reduce(
        (total, child) => total + (child as HTMLElement).offsetWidth,
        0
      ) -
      block.offsetWidth / 2

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationElements?.block,
        start: 'bottom bottom',
        end: `+=${width}`,
        scrub: 1,
        pin: true,
        // anticipatePin: 1,
      },
    })

    // Translate the trail element horizontally based on the block's position
    tl.to(animationElements.trail, {
      x: -width,
    })
  }
}
