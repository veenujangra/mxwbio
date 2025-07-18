import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Logo {
  element: HTMLElement
  constructor(options: { element: HTMLElement }) {
    this.element = options.element
  }

  create() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = this.element.querySelector('[data-logo-animation="wrapper"]') as HTMLElement | null
    const animationElements = wrapper ? (wrapper.querySelectorAll('[data-logo-animation="text"]') as NodeList) : null
    const fade = wrapper?.querySelectorAll('.home_maxwell_animation-fade')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: 'center 30%',
        scrub: 1,
      },
    })

    if (!animationElements || animationElements.length === 0 || !fade || fade.length === 0) {
      console.warn('No animation elements found for logo animation.')
      return
    }

    tl.fromTo(
      animationElements[0].parentElement as HTMLElement,
      {
        scale: 1.5,
      },
      {
        scale: 1,
        duration: 0.633,
        ease: 'power2.inOut',
      }
    )
      .fromTo(
        animationElements[1],
        {
          borderColor: 'transparent',
          marginLeft: '0rem',
          marginRight: '0rem',
        },
        {
          borderColor: '#5DB0E5',
          marginLeft: '1rem',
          marginRight: '1rem',
          duration: 0.444,
          ease: 'power2.inOut',
        },
        '+=0.144'
      )
      .fromTo(
        animationElements[1],
        {
          width: '0%',
          height: '2ch',
        },
        {
          width: 'auto',
          height: 'auto',
          marginLeft: '0rem',
          marginRight: '0rem',
          duration: 1,
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        animationElements[1],
        {
          color: '#5DB0E5',
        },
        {
          color: '#135BA3',
          ease: 'power2.inOut',
        },
        '<=+0.5'
      )
      .fromTo(
        animationElements[0],
        {
          color: '#5DB0E5',
        },
        {
          color: '#135BA3',
          duration: 0.444,
          ease: 'power2.inOut',
        },
        '<'
      )
      .to(
        fade,
        {
          opacity: 0,
          duration: 0.444,
          ease: 'power2.inOut',
        },
        '<-=0.3'
      )
      .to(
        animationElements[1],
        {
          borderColor: 'transparent',
          duration: 0.444,
        },
        '<+=0.444'
      )
      .to(animationElements, {
        autoAlpha: 0.2,
        duration: 0.444,
        ease: 'power2.inOut',
      })
  }
}
