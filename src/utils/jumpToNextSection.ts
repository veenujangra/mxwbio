import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

export default class JumpToNextSection {
  element: HTMLElement
  currentSection: HTMLElement | null
  lenis: Lenis

  constructor(options: { element: HTMLElement; lenis: Lenis }) {
    this.element = options.element
    this.currentSection = null
    this.lenis = options.lenis
    this.create()
  }

  create() {
    gsap.registerPlugin(ScrollTrigger)

    this.currentSection = this.element.closest('.section') as HTMLElement

    this.handleJumpToNextSection()
    this.handleProgressTracking()
  }

  handleJumpToNextSection() {
    if (!this.currentSection) {
      console.warn('Current section not found.')
      return
    }

    const allSections = Array.from(document.querySelectorAll('.section'))
    const currentIndex = allSections.indexOf(this.currentSection)

    if (currentIndex === -1 || currentIndex === allSections.length - 1) {
      console.warn('No next section to jump to.')
      return
    }

    const nextSection = allSections[currentIndex + 1] as HTMLElement

    this.element.addEventListener('click', () => {
      const offset = 200 // Adjust this value as needed for offset
      if (this.lenis) {
        this.lenis.scrollTo(nextSection, {
          duration: 1.2,
          easing: (t) => t * (2 - t), // easeInOutQuad
          offset: -offset,
        })
      }
    })
  }

  handleProgressTracking() {
    const trackedSection = this.currentSection

    const wrapper = this.element.parentNode as HTMLElement | null
    const progressContainer = wrapper?.querySelector('.scroll_progress-wrapper') as HTMLElement | null
    const progressBar = progressContainer?.querySelector('.scroll_progress')

    if (!trackedSection || !progressBar) {
      console.warn('Progress tracking elements not found.')
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trackedSection,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: () => {
          const progress = Number(tl.progress().toFixed(2))

          if (progress >= 0.9) {
            this.element.closest('.jump_to_section')?.classList.add('hidden')
          } else {
            this.element.closest('.jump_to_section')?.classList.remove('hidden')
          }
        },
      },
    })

    tl.to(progressBar, {
      width: '100%',
      duration: 1,
      ease: 'power2.inOut',
    })
  }
}
