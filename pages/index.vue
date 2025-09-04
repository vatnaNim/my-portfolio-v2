<template>
    <div 
        class="relative space-y-4 sm:space-y-8 ">
        <Home
            id="home"
        /> 
        <About
            id="about"
        /> 
        <Achievement
            id="achievement"
        />
        <Experience
            id="experience"
        />
        <Projects
            id="project"
        /> 
        <Contact
            id="contact"
        /> 
        <UTooltip
            text="top"
            :popper="{
                arrow: true,
            }"
            v-if="showButton"
            class="fixed right-3 bottom-2 ">
            <button
                @click="scrollToHome"
                class="px-3 py-2 bg-gray-300/20 backdrop-blur-sm rounded-full shadow-md hover:bg-red-300/30 duration-300 hover:-translate-y-1  hover:scale-110 ease-in-out transition">
                <ArrowAnimation
                    class="w-4 h-5 rotate-90 text-red-700 dark:text-red-600"
                />
            </button>
        </UTooltip>
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
} from '~/components/layouts';
import { 
    ArrowAnimation 
} from '~/components/icons';

const showButton: Ref<boolean> = ref<boolean>(false);

const checkScroll = (): void => {
    showButton.value = window.scrollY > 50;
};

onMounted((): void => {
    window.addEventListener('scroll', checkScroll);
});

onUnmounted((): void => {
    window.removeEventListener('scroll', checkScroll);
});

const scrollToHome = (): void => {
    const el = document.querySelector('#home');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>

</style>

