import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class HeroAnimation {
  element: HTMLElement
  constructor(options: { element: HTMLElement }) {
    this.element = options.element
  }

  create() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = this.element.querySelector('[data-hero-animation="wrapper"]') as HTMLElement | null
    const animationElements = {
      wrapper: wrapper as HTMLElement,
      header: wrapper ? (wrapper.querySelector('[data-hero-animation="header"]') as HTMLElement) : null,
      content: wrapper ? (wrapper.querySelector('[data-hero-animation="content"]') as HTMLElement) : null,
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationElements?.wrapper,
        start: 'top top',
        end: 'bottom 100%',
        scrub: 1,
      },
    })
    /**
     * Animation for the hero section
     * Header fades out, content fades in, shadow appears one after another
     */
    tl.fromTo(
      animationElements?.header,
      {
        autoAlpha: 1,
        display: 'flex',
      },
      {
        autoAlpha: 0,
        display: 'none',
        ease: 'power1.inOut',
      }
    ).fromTo(
      animationElements?.content,
      {
        autoAlpha: 0,
        display: 'none',
      },
      {
        autoAlpha: 1,
        display: 'flex',
        ease: 'power1.inOut',
      }
    )
  }
}
