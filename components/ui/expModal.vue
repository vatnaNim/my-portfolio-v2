<template>
    <UModal 
        v-bind:model-value="open"
        :ui="{ 
            fullscreen: 'max-w-full md:max-w-4xl h-full ',
            height: 'h-full',
            rounded: 'rounded-lg',
            inner: 'overflow-y-auto  md:overflow-hidden',
            background: 'bg-gray-200/75 dark:bg-gray-800/75'
        }"
        fullscreen>
        <UCard 
            :ui="{ 
                rounded: 'rounded-lg',
                ring: '',
                base: '',
                divide: 'divide-y divide-gray-300 dark:divide-gray-800',
                header: {
                    base: 'flex justify-between items-center',
                    padding: 'px-2 py-3'
                } 
            }">
            <template #header>
                <div 
                    class="flex gap-x-2 items-center">
                    <UAvatar 
                        :src="logo" 
                        :alt="logoTitle" 
                        size="md" 
                    />
                    <div 
                        class="leading-5">
                        <h2 
                            class="text-md font-semibold uppercase tracking-wider">
                            {{ logoTitle }}
                        </h2>
                        <span 
                            class="flex items-center text-gray-400 dark:text-gray-500">
                            <Location 
                                class="w-4 h-4"
                            />
                            <span class="text-sm">
                                {{ location }}
                            </span>
                        </span>
                    </div>
                </div>
                <UTooltip
                    :text="t('close')"
                    :popper="{ placement: 'top', arrow: true }">
                    <UButton
                        size="sm"
                        variant="ghost"
                        color="red"
                        :ui="{ 
                            variant: { 
                                ghost:'ring-0 focus-visible:ring-0' 
                            } 
                        }"
                        @click="emits('toggle', '', false)">
                        <Cancel 
                            class="w-5 h-5"
                        />
                    </UButton>
                </UTooltip>
            </template>
            <div 
                class="flex flex-col md:flex-row gap-4 p-2 ">
                <div 
                    class="flex justify-center md:w-[40%]">
                    <div 
                        class="w-full max-w-xs sm:max-w-sm aspect-[3/4] bg-white dark:bg-gray-900 overflow-hidden flex justify-center items-center">
                        <div
                            v-if="loading && imageUrl" 
                            class="w-full h-full flex justify-center items-center">
                            <Modal
                                class="w-14 h-14 text-red-700 dark:text-red-600"
                            />
                        </div>
                        <img 
                            v-if="props.imageUrl"
                            :src="imageUrl" 
                            :alt="logoTitle"
                            @load="handleLoad"
                            @error="handleError"
                            class="object-scale-down w-full h-full"
                        />
                        <NoImage 
                            v-else 
                            class="md:w-20 md:h-20 sm:w-14 sm:h-14 w-10 h-10 text-red-700 dark:text-red-600"
                        />
                    </div>
                </div>
                <div 
                    class="w-full md:w-[60%] space-y-3 max-h-full md:max-h-[70vh] overflow-y-auto scrollable">
                    <span>
                        <h2 
                            class="text-lg font-medium uppercase">
                            {{ logoTitle }}
                        </h2>
                        <span 
                            class="flex items-center text-gray-400 dark:text-gray-600">
                            <Date 
                                class="w-4 h-4"
                            />
                            <span class="text-sm">
                                {{ workingTime }}
                            </span>
                        </span>
                    </span>
                    <div>
                        <span 
                            class="flex items-center gap-x-0.5 pb-1">
                            <Thunder 
                                class="w-6 h-6 text-red-700 dark:text-red-600"/>
                            <span class="text-md font-medium">
                                {{ t('keyAchi') }}
                            </span>
                        </span>
                        <ul
                            v-for="(text, idx) in keyAchievements"
                            :key="idx"
                            class="list-disc list-outside px-2 sm:px-5 text-sm font-medium ml-5 text-gray-600 dark:text-gray-400 marker:text-red-700 dark:marker:text-red-600">
                            <li>{{ text }}</li>
                        </ul>
                    </div>
                    <div>
                        <span 
                            class="flex items-center gap-x-0.5 pb-1">
                            <Experience 
                                class="w-6 h-6 text-red-700 dark:text-red-600"
                            />
                            <span 
                                class="text-md font-medium capitalize">
                                {{ t('repAndWork') }}
                            </span>
                        </span>
                        <ul
                            v-for="(text, idx) in responsible"
                            :key="idx"
                            class="list-disc list-outside px-2 sm:px-5 text-sm font-medium ml-5 text-gray-600 dark:text-gray-400  marker:text-red-700 dark:marker:text-red-600">
                            <li>{{ text }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </UCard>
    </UModal>
</template>


<script setup lang="ts">
import { 
    Cancel,
    Location,
    Date,
    Thunder,
    Experience,
    NoImage
} from '../icons';
import { 
    Modal 
} from '../loadings';
import { 
    useTranslation 
} from '@/composables/useTranslation';

const { t, translations } = useTranslation();

const props = withDefaults(
    defineProps<{
        open: boolean;
        logo?: string;
        logoTitle?: string;
        location?: string;
        workingTime?: string;
        imageUrl?: string;
        keyAchievements?: string[];
        responsible?: string[];
    }>(),
    {
        open: false,
        logo: "",
        logoTitle: "N/A",
        location: "N/A",
        workingTime: "N/A",
        imageUrl: "",
        keyAchievements: () => ["N/A"],
        responsible: () => ["N/A"],
    }
);

const emits = defineEmits<{
    (e: 'toggle', title: string, state: boolean): void;
}>()

const loading: Ref<boolean> = ref<boolean>(true);


watch(() => props.imageUrl, (newVal: string): void => {
    loading.value = !!newVal; 
});

const handleLoad = (): void => {
    loading.value = false;
};

const handleError = (): void => {
    loading.value = false;
};
</script>

<style>

.scrollable::-webkit-scrollbar {
  width: 8px;
}

.scrollable::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable::-webkit-scrollbar-thumb {
  background-color: #b91c1c; 
  border-radius: 9999px;
  border: 2px solid transparent;
}

.scrollable::-webkit-scrollbar-thumb:hover {
  background-color: #b91c1c; 
}

.dark .scrollable::-webkit-scrollbar-thumb {
  background-color: #dc2626; 
}

.dark .scrollable::-webkit-scrollbar-thumb:hover {
  background-color: #dc2626; 
}

.scrollable {
  scrollbar-width: thin;
  scrollbar-color: #b91c1c transparent; 
}

.dark .scrollable {
  scrollbar-color: #dc2626 transparent; 
}


</style>