<template>
    <div 
        class="relative">
        <transition 
            name="fade">
            <div
                v-if="isLoading"
                class="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
                <Page />
                <p 
                    class="mt-4 text-gray-700 dark:text-gray-300 font-medium text-lg sm:text-xl">
                    Loading...
                </p>
            </div>
        </transition>

        <div 
            v-show="!isLoading" 
            class="space-y-4 sm:space-y-8">
            <div 
                class="overflow-hidden">
                <Home id="home" />
                <About id="about" />
                <Achievement id="achievement" />
                <Experience id="experience" />
                <Projects id="project" />
                <Contact id="contact" />
            </div>

            <UTooltip
                text="top"
                :popper="{ arrow: true }"
                v-if="showButton"
                class="fixed right-3 bottom-2">
                <button
                    @click="scrollToHome"
                    class="px-3 py-2 bg-gray-300/20 backdrop-blur-sm rounded-full shadow-md hover:bg-red-300/30 duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out transition">
                    <ArrowAnimation
                        class="w-4 h-5 rotate-90 text-red-700 dark:text-red-600"
                    />
                </button>
            </UTooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    Home, 
    About, 
    Achievement, 
    Experience, 
    Projects, 
    Contact 
} from '~/components/layouts'
import { 
    ArrowAnimation 
} from '~/components/icons'
import { 
    Page 
} from '~/components/loadings'

const showButton: Ref<boolean> = ref<boolean>(false)
const isLoading: Ref<boolean> = ref<boolean>(true);

const checkScroll = () => {
    showButton.value = window.scrollY > 50
}

onMounted((): void => {
    window.addEventListener('scroll', checkScroll)

    if (document.readyState === 'complete') {
        isLoading.value = false
    } else {
        window.addEventListener('load', () => {
        setTimeout(() => {
            isLoading.value = false
        }, 300) 
        })
    }
})

onUnmounted((): void => {
    window.removeEventListener('scroll', checkScroll)
})

const scrollToHome = (): void => {
    const el = document.querySelector('#home')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

useSeoMeta({
    title: 'Vatna Portfolio',
    description: 'Vatna Portfolio to build scalable applications, while always paying attention to detail and user experience. Every project is an opportunity to grow, learn, and create something impactful',
    ogTitle: 'Vatna Portfolio',
    ogDescription: 'To build scalable applications, while always paying attention to detail and user experience. Every project is an opportunity to grow, learn, and create something impactful',
    ogImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757003567/IMG_3819_mhdc4c.webp',
    ogUrl: 'https://yourdomain.com',     
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Vatna Portfolio',
    twitterDescription: 'To build scalable applications, while always paying attention to detail and user experience. Every project is an opportunity to grow, learn, and create something impactful',
    twitterImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757003567/IMG_3819_mhdc4c.webp',
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
