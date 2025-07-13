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
      content: wrapper ? (wrapper.querySelectorAll('[data-hero-animation="content"]') as NodeList) : null,
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
    if (animationElements.content && animationElements.content.length > 0) {
      tl.fromTo(
        animationElements.content[0],
        {
          display: 'flex',
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
          display: 'none',
          ease: 'power1.inOut',
        }
      )
        .fromTo(
          animationElements.content[1],
          {
            display: 'none',
            autoAlpha: 0,
          },
          {
            display: 'flex',
            autoAlpha: 1,
            ease: 'power1.inOut',
          }
        )
        .fromTo(
          animationElements.content[1],
          {
            display: 'flex',
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
            display: 'none',
            ease: 'power1.inOut',
          }
        )
        .fromTo(
          animationElements.content[2],
          {
            display: 'none',
            autoAlpha: 0,
          },
          {
            display: 'flex',
            autoAlpha: 1,
            ease: 'power1.inOut',
          }
        )
    }
  }
}
