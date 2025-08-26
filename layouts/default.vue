<template>
    <div
        class="relative min-h-screen w-full flex flex-col no-scrollbar">
        <Navigation />
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import { 
    Navigation 
} from '~/components/layouts';
</script>

<style scoped>

</style>