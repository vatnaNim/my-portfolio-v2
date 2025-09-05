import { defineNuxtPlugin } from '#app'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,    // animate every time you scroll in
      mirror: true,   // animate out when scrolling past
    })
  })
})
