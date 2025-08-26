<template>
    <UModal 
        v-bind:model-value="open"
        :ui="{ width: 'max-w-4xl' }" >
        <UCard 
            :ui="{ ring: '', divide: 'divide-y divide-gray-300 dark:divide-gray-800' }">
            <template #header>
            <div 
                class="flex justify-between items-center">
                <div 
                    class="flex flex-col">
                    <span 
                        class="text-lg font-medium uppercase tracking-wide">
                        {{ title }}
                    </span>
                <span 
                    class="text-xs font-semibold text-gray-400 dark:text-gray-400 space-x-1">
                    <span class="font-semibold uppercase">year:</span> 
                    <span>{{ year }}</span>
                </span>
            </div>
            <div>
                <UTooltip
                    text="Close"
                    :popper="{ placement: 'top', arrow: true }">
                    <UButton
                        size="sm"
                        variant="ghost"
                        color="red"
                        @click="emits('toggle', '', false)">
                        <Cancel class="w-5 h-5"/>
                    </UButton>
                </UTooltip>
            </div>
        </div>
    </template>
    <div 
        class="flex justify-center items-center min-h-[60vh] relative">
            <div 
                v-if="loading" 
                class="absolute flex items-center justify-center">
                <svg class="animate-spin h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
            </div>
            <img
                v-show="!loading"
                :src="imageUrl"
                :alt="title"
                class="max-h-[80vh] rounded-lg shadow-lg"
                @load="handleLoad"
                @error="handleError"
            />
        </div>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import { Cancel } from '../icons';
const props = withDefaults(
    defineProps<{
        open: boolean;
        title?: string;
        imageUrl?: string;
        detail?: string;
        year?: string;
    }>(),
    {
        open: false,
        title: 'Certificate',
        detail: '',
        year: ''
    }
);

const emits = defineEmits<{
    (e: 'toggle', title: string, state: boolean): void;
}>()

const loading: Ref<boolean> = ref<boolean>(true);

watch(() => props.imageUrl, (): void => {
    loading.value = true; 
});

const handleLoad = (): void => {
    loading.value = false;
};

const handleError = (): void => {
    loading.value = false;
};
</script>
