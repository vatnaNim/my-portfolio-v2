<template>
    <div
        class="border w-full rounded-lg shadow-md overflow-hidden group">
        <div 
            class="w-full aspect-[16/9] relative bg-gray-100">
            <img 
                v-if="image && image !== 'N/A'"
                :src="image" 
                :alt="title"
                class="w-full h-full object-cover"
            />
            <div 
                v-else 
                class="flex justify-center items-center w-full h-full text-gray-400">
                <NoImage 
                    class="w-12 h-12" 
                />
            </div>
            <div 
                class="absolute inset-0">
                <div 
                    class="px-3 py-3 flex justify-end">
                    <span
                        class="text-xs capitalize px-3 py-0.5 bg-gray-400/20 backdrop-blur-md text-red-700 font-semibold border border-gray-400 rounded-md">
                        {{ workOn }}
                    </span>
                </div>
                <div 
                    class="flex justify-center items-center relative">
                    <article
                        class="absolute top-12 space-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                        <u-tooltip
                            :text="t('viewProject')"
                            :popper="{ arrow: true, placement: 'top' }">
                            <span>
                                <button
                                    @click="toggleModal(true)"
                                    class="p-2 rounded-full hover:bg-black hover:text-white duration-300">
                                    <Eye 
                                        class="w-5 h-5 text-red-600" 
                                    />
                                </button>
                            </span>
                        </u-tooltip>
                        <u-tooltip
                            v-if="gitHubLink"
                            :text="t('view') + ' Github'"
                            :popper="{ arrow: true, placement: 'top' }">
                            <a
                                :href="gitHubLink" 
                                target="_blank">
                                <button
                                    class="p-2 rounded-full hover:bg-black hover:text-white duration-300">
                                    <Github 
                                        class="w-4 h-4 sm:w-5 sm:h-5 text-red-600" 
                                    />
                                </button>
                            </a>
                        </u-tooltip>
                    </article>
                </div>
            </div>
        </div>
        <div 
            class="px-4 py-3 space-y-2 min-h-52">
            <h2 
                class="text-lg font-semibold uppercase">
                {{ title }}
            </h2>
            <p 
                class="text-sm  text-gray-500 dark:text-gray-400 line-clamp-3"
                :class="translations.language === 'en'? 'font-normal' : 'font-medium'">
                {{ detail }}
            </p>
            <div 
                class="flex flex-wrap gap-1 pt-1">
                <ul 
                    v-for="(item, idx) in techology" 
                    :key="idx">
                    <li>
                        <u-badge 
                            size="sm" 
                            :label="item" 
                            variant="soft" 
                            color="red" 
                            :ui="{
                                size: {
                                    sm: 'text-[0.65rem] sm:text-xs'
                                }
                            }"
                        />
                    </li>
                </ul>
            </div>
            <div 
                class="flex gap-x-1 sm:gap-x-2 pt-1">
                <u-tooltip
                    :text="t('viewProject')"
                    :popper="{ arrow: true, placement: 'top' }"
                    class="flex-1">
                    <UButton
                        color="black" 
                        size="sm"
                        block
                        class="px-4"
                        @click="toggleModal(true)">
                        <span
                            class="text-xs xs:text-sm sm:text-md">
                            {{ t('viewProject') }}
                        </span>
                        <Open 
                            class="w-4 h-4" 
                        />
                    </UButton>
                </u-tooltip>
                <u-popover
                    v-if="gitHubLink"
                    mode="hover"
                    :popper="{ placement: 'top', offsetDistance: 2 }">
                    <UButton
                        target="_blank"
                        :to="gitHubLink"
                        color="gray"
                        variant="soft">
                        <Github 
                            class="w-5 h-5 text-black" 
                        />
                    </UButton>
                    <template #panel>
                        <div 
                            class="px-2 py-1 flex gap-x-2">
                            <Github 
                                class="w-6 h-6" 
                            />
                            <div>
                                <h3 
                                    class="text-sm font-semibold">
                                    GitHub
                                </h3>
                                <p 
                                    class="text-xs text-gray-500">
                                    {{ t('viewGithubModal') }}
                                </p>
                            </div>
                        </div>
                    </template>
                </u-popover>
            </div>
        </div>
        <u-modal 
            v-model="openModal" 
            fullscreen>
            <div 
                class="overflow-y-auto pb-4 md:pb-12">
                <div 
                    class="px-4 py-4 flex items-center justify-between">
                    <div 
                        class="border-l-2 border-red-700 px-2">
                        <h2 
                            class="text-md sm:text-xl font-semibold uppercase leading-5">
                            {{ title }}
                        </h2>
                        <p 
                            class="text-xs sm:text-sm font-medium capitalize text-gray-500 dark:text-gray-400">
                            {{ workOn }}
                        </p>
                    </div>
                    <UTooltip 
                        :text="t('close')" 
                        :popper="{ placement: 'top', 
                        arrow: true }">
                        <UButton 
                            size="sm" 
                            variant="ghost" 
                            color="red" 
                            @click="toggleModal(false)">
                            <Cancel 
                                class="w-5 h-5" 
                            />
                        </UButton>
                    </UTooltip>
                </div>
                <u-divider 
                    size="sm" 
                    class="px-4"
                    :ui="{ 
                        border: { 
                            base: 'border-red-700 dark:border-red-600'   
                        }}"
                    />
                <div 
                    class="px-4 text-center">
                    <h2 
                        class="text-md sm:text-lg font-semibold uppercase pt-2">
                        {{ t('demoProjectTitle') }}
                    </h2>
                    <div 
                        class="flex justify-center items-center pt-6">
                        <div 
                            class="w-full max-w-[700px] shadow-md">
                            <UCarousel
                                v-if="demoImage && demoImage.length > 0"
                                ref="carouselRef"
                                v-slot="{ item }"
                                :items="demoImage"
                                :ui="{ 
                                    item: 'basis-full', 
                                    indicators: { 
                                        wrapper: 'absolute flex items-center justify-center gap-2 sm:gap-3 bottom-4 inset-x-0',
                                        active: 'bg-red-700 dark:bg-red-600', 
                                        base: 'w-2 h-2 sm:w-3 sm:h-3'
                                    },
                                    default: {
                                        prevButton: {
                                            class: 'p-1.5 sm:p-2'
                                        },
                                        nextButton: {
                                            class: 'p-1.5 sm:p-2'
                                        }
                                    }
                                }"
                                class="rounded-lg overflow-hidden"
                                indicators
                                arrows>
                                <img 
                                    :src="item" 
                                    class="w-full" 
                                    draggable="false" 
                                />
                            </UCarousel>
                            <div 
                                v-else 
                                class="flex justify-center items-center w-full h-64 bg-gray-100">
                                <NoImage 
                                    class="sm:w-12 sm:h-12 w-10 h-10 text-gray-400" 
                                />
                            </div>
                        </div>
                    </div>
                    <h2 
                        class="text-md sm:text-lg font-semibold uppercase py-3"
                         v-if="techology && techology.length > 0">
                        {{ t('technology') }}
                    </h2>
                    <div 
                        class="flex gap-x-2 gap-y-1 sm:gap-y-2 flex-wrap justify-center">
                        <ul 
                            v-for="(item, idx) in techology" 
                            :key="idx">
                            <li>
                                <u-badge 
                                    size="md" 
                                    :label="item" 
                                    variant="soft" 
                                    color="red" 
                                    :ui="{
                                        size: {
                                            md: 'text-xs md:text-sm'
                                        }
                                    }"
                                />
                            </li>
                        </ul>
                    </div>
                    <h2 
                        class="text-md sm:text-lg font-semibold uppercase py-2">
                        {{ t('details') }}
                    </h2>
                    <p 
                        class="text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400 px-4 sm:px-8 md:px-16 lg:px-32">
                        {{ detail }}
                    </p>
                    <div  
                        class="pb-10"
                        v-if="viewProjectLink || gitHubLink">
                        <h2 
                            class="text-md sm:text-lg font-semibold uppercase py-2">
                            {{ t('followUs') }}
                        </h2>
                        <div 
                            class="flex flex-wrap gap-x-2 sm:gap-x-3 justify-center">
                            <u-button
                                v-if="viewProjectLink"
                                target="_blank"
                                :to="viewProjectLink"
                                color="black"
                                variant="solid"
                                size="md"
                                class="px-4"
                                :ui="{
                                    padding: {
                                        md: 'py-1.5 sm:py-2'
                                    }
                                }">
                                <Explore 
                                    class="w-4 h-4" 
                                />
                                <span class="text-sm sm:text-md capitalize">{{ t('explore') }}</span>
                            </u-button>
                            <u-button
                                v-if="gitHubLink"
                                color="black"
                                target="_blank"
                                :to="gitHubLink"
                                variant="solid"
                                size="md"
                                class="px-4"
                                :ui="{
                                    padding: {
                                        md: 'py-1.5 sm:py-2'
                                    }
                                }">
                                <Github 
                                    class="w-4 h-4" 
                                />
                                <span class="text-sm sm:text-md">Github</span>
                            </u-button>
                        </div>
                    </div>
                    <div 
                        class="flex flex-col items-center justify-center gap-y-2" 
                        v-if="videoDemo && videoDemo !== ''">
                        <h2 
                            class="text-md sm:text-lg font-semibold uppercase py-2">
                            {{ t('demoProject') }}
                        </h2>
                        <div 
                            class="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
                            <div 
                                class="relative w-full pb-[56.25%]">
                                <iframe
                                    class="absolute top-0 left-0 w-full h-full rounded-lg"
                                    :src="videoDemo"
                                    allow="autoplay"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </u-modal>
    </div>
</template>

<script setup lang="ts">
import { 
    Open,
    Github,
    Eye,
    Explore,
    Cancel, 
    NoImage
} from '../icons';
import { 
    useTranslation 
} from '@/composables/useTranslation';

const { 
    translations, 
    t 
} = useTranslation();

const props = withDefaults(
    defineProps<{
        image?: string;
        workOn?: string;
        title?: string;
        detail?: string;
        techology?: string[];
        viewProjectLink?: string;
        gitHubLink?: string,
        demoImage?: string[]
        videoDemo?: string
    }>(),
    {
        image: "N/A",
        workOn: "N/A",
        title: "N/A",
        detail: "N/A",
        viewProjectLink: "",
        gitHubLink: "",
        videoDemo: ""
    }
);



const openModal: Ref<boolean> = ref<boolean>(false);

const toggleModal = (state: boolean): void => {
    openModal.value = state;
}

const carouselRef = ref();

onMounted((): void => {
    setInterval((): void => {
        if (!carouselRef.value) return;

        if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})

</script>

<style scoped>

</style>