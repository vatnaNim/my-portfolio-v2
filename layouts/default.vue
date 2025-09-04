<template>
    <div
        class="relative min-h-screen w-full flex flex-col no-scrollbar">
        <Navigation ref="navRef"/>
            <NuxtPage />
        <FooterLayout :onScrollToSection="navRef?.scrollToSection"/>
    </div>
</template>

<script setup lang="ts">
import { 
    Navigation,
    Footer as FooterLayout
} from '~/components/layouts';

const navRef = ref<InstanceType<typeof Navigation> | null>(null);
</script>

<style scoped>

</style>