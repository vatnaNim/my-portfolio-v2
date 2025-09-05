<template>
    <UModal 
        v-bind:model-value="open" 
        :ui="{ 
            width: 'w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl' 
        }">
        <UCard 
            :ui="{ 
                ring: '',
                divide: 'divide-y divide-gray-300 dark:divide-gray-800' ,
                header: {
                    padding: 'py-2 sm:py-3'
                }
            }">
            <template #header>
                <div 
                    class="flex justify-between items-center">
                    <div 
                        class="flex flex-col">
                        <span 
                            class="text-base sm:text-lg font-medium uppercase tracking-wide">
                            {{ selected?.title || 'Certificate' }}
                        </span>
                        <span 
                            class="text-xs font-semibold text-gray-400 dark:text-gray-400">
                            {{ selected?.year || '' }}
                        </span>
                    </div>
                    <div>
                        <UTooltip 
                        :text="t('close')" 
                        :popper="{ placement: 'top', arrow: true }">
                        <UButton 
                            size="sm" 
                            variant="ghost" 
                            color="red" 
                            @click="closeModal">
                            <Cancel class="w-5 h-5" />
                        </UButton>
                        </UTooltip>
                    </div>
                </div>
            </template>
            <div 
                class="flex justify-center items-center min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] relative">
                <div 
                    v-if="loading" 
                    class=" flex items-center justify-center">
                    <svg class="animate-spin h-8 w-8 sm:h-10 sm:w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                </div>
                <div 
                    class=""
                    v-if="selected?.imageUrl">
                    <img
                        :src="selected.imageUrl"
                        :alt="selected.title"
                        class="w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] object-contain"
                        @load="handleLoad"
                        @error="handleError"
                        v-show="!loading"
                />
                </div>
            </div>
        </UCard>
    </UModal>
</template>


<script setup lang="ts">
import { 
    Cancel 
} from '../icons';
import {
    Modal
} from "~/components/loadings"
import { 
    useTranslation 
} from '@/composables/useTranslation';

const { t } = useTranslation();

const props = withDefaults(
    defineProps<{
        open: boolean;
        selected?: any;
    }>(),
    {
        open: false,
        selected: null
    }
);

const emits = defineEmits<{
    (e: 'update:open', state: boolean): void;
}>();

const loading: Ref<boolean> = ref<boolean>(true);

watch((): void => props.selected, (): void => {
    loading.value = true;
});

const handleLoad = (): void => {
    loading.value = false;
};

const handleError = (): void => {
    loading.value = false;
};

const closeModal = (): void => {
    emits('update:open', false);
};
</script>
