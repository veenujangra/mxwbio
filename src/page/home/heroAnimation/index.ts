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
      shadow: wrapper ? (wrapper.querySelector('[data-hero-animation="shadow"]') as HTMLElement) : null,
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationElements?.wrapper,
        start: 'top top',
        end: 'bottom 90%',
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
      },
      {
        autoAlpha: 0,
        ease: 'power1.inOut',
      }
    )
      .fromTo(
        animationElements?.content,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          ease: 'power1.inOut',
        }
      )
      .fromTo(
        animationElements?.shadow,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 0.6,
          ease: 'power1.inOut',
        },
        '<' // This ensures the shadow animation starts at the same time as the content fade-in
      )
  }
}
