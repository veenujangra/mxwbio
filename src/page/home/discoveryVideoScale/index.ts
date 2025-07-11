import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class DiscoveryVideoScale {
  element: HTMLElement
  constructor(options: { element: HTMLElement }) {
    this.element = options.element
  }

  create() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Select the element that contains the animation
    const element = this.element.querySelector('[data-discovery-animation="wrapper"]') as HTMLElement | null
    const animationElements = {
      element: element as HTMLElement,
      shadow: element ? (element.querySelector('[data-discovery-animation="shadow"]') as HTMLElement | null) : null,
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationElements.element,
        start: 'center bottom',
        end: 'bottom bottom',
        scrub: 1,
      },
    })

    tl.fromTo(
      animationElements.element,
      {
        scale: 0.8,
      },
      {
        scale: 1,
        ease: 'power1.inOut',
      }
    ).fromTo(
      animationElements.shadow,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 0.6,
        ease: 'power1.inOut',
      },
      '<'
    )
  }
}
