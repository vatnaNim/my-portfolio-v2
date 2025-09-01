<template>
    <UModal 
        v-bind:model-value="open"
        :ui="{ 
            fullscreen: 'w-[1000px] h-full',
            height: 'h-full',
            rounded: 'rounded-lg',
            inner: 'overflow-hidden',
            background: 'bg-gray-200/75 dark:bg-gray-800/75'
        }" 
        fullscreen>
        <UCard 
            :ui="{ 
                rounded: 'rounded-lg',
                ring: '',
                divide: 'divide-y divide-gray-300 dark:divide-gray-800',
                header: {
                    base: 'flex justify-between items-center',
                    padding: 'px-0 py-3'
                } }">
            <template #header>
                <div 
                    class="flex gap-x-2 items-center ">
                    <UAvatar
                        :src="logo"
                        :alt="logoTitle"
                        size="md"
                    />
                    <div 
                        class="leading-5">
                        <h2
                            class="text-md font-semibold">
                            {{ logoTitle }}
                        </h2>
                        <span
                            class="flex items-center text-gray-400">
                            <Location class="w-4 h-4"/>
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
                                ghost:'ring-0'
                            }
                        }"
                        @click="emits('toggle', '', false)">
                        <Cancel class="w-5 h-5"/>
                    </UButton>
                </UTooltip>
            </template>
            <div 
                class="flex gap-x-4">
                <div 
                    class="w-[40%] flex justify-center">
                    <div 
                        class="w-[330px] h-[400px] bg-gray-200 dark:bg-gray-700  rounded-lg shadow-md overflow-hidden flex justify-center items-center">
                        <Modal
                            v-if="loading && imageUrl"
                            class="w-14 h-14 text-red-700 dark:text-red-600"
                        />
                        <img 
                            v-if="props.imageUrl"
                            :src="imageUrl" 
                            :alt="logoTitle"
                            @load="handleLoad"
                            @error="handleError"
                            class="object-fill w-full h-full"
                        />
                        <NoImage 
                            v-else 
                            class="w-20 h-20 text-red-700 dark:text-red-600"
                        />
                    </div>
                </div>
                <div 
                    class="w-[60%] space-y-3 max-h-[70vh] overflow-y-auto scrollable">
                    <span>
                        <h2
                            class="text-lg font-medium capitalize">
                            {{ logoTitle }}
                        </h2>
                        <span
                            class="flex items-center text-gray-400">
                            <Date class="w-4 h-4"/>
                            <span class="text-sm">
                                {{ workingTime }}
                            </span>
                        </span>
                    </span>
                    <div>
                        <span
                            class="flex items-center gap-x-0.5 pb-1">
                            <Thunder class="w-6 h-6 text-red-700 dark:text-red-600"/>
                            <span class="text-md font-medium ">
                                {{ t('keyAchi') }}
                            </span>
                        </span>
                        <ul
                            class="list-disc list-outside px-5 text-sm font-medium ml-5 text-gray-600 dark:text-gray-400 marker:text-red-700 dark:marker:text-red-600"
                            v-for="(text, idx) in keyAchievements"
                            :key="idx">
                            <li>{{ text }}</li>
                        </ul>
                    </div>
                    <div>
                        <span
                            class="flex items-center gap-x-0.5 pb-1">
                            <Experience class="w-6 h-6 text-red-700 dark:text-red-600"/>
                            <span class="text-md font-medium capitalize">
                                {{ t('repAndWork') }}
                            </span>
                        </span>
                        <ul
                            class="list-disc list-outside px-5 text-sm font-medium ml-5 text-gray-600 dark:text-gray-400 marker:text-red-700 dark:marker:text-red-600"
                            v-for="(text, idx) in responsible"
                            :key="idx">
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
  background-color: #d1d5db;
  border-radius: 9999px; 
  border: 2px solid transparent; 
}

.scrollable::-webkit-scrollbar-thumb:hover {
  background-color: #9ca3af; 
}

.scrollable {
  scrollbar-width: thin;
  scrollbar-color: #9ca3af transparent;
}

</style>