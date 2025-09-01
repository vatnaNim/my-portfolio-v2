<template>
    <div
        class="relative min-h-screen w-full flex flex-col no-scrollbar">
        <Navigation />
        <NuxtPage />
        <FooterLayout />
    </div>
</template>

<script setup lang="ts">
import { 
    Navigation,
    Footer as FooterLayout
} from '~/components/layouts';
</script>

<style scoped>

</style>