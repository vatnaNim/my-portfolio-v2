<template>
    <div
        class="border w-[350px] rounded-lg shadow-md overflow-hidden group">
        <div 
            class="w-full h-48 relative bg-gray-100">
            <img 
                v-if="image && image !== 'N/A'"
                :src="image" 
                :alt="title"
                class="w-full h-full object-top"
            />
             <div 
                v-else 
                class="flex justify-center items-center w-full h-full text-gray-400">
                <NoImage class="w-12 h-12" />
            </div>
            <div 
                class="absolute top-0 left-0 w-full h-full">
                <div 
                    class="px-3 py-3 flex justify-end">
                    <span
                        class="text-xs  capitalize px-3 py-0.5 bg-gray-400/2 backdrop-blur-md text-black font-semibold border border-gray-400 rounded-md">
                        {{ workOn }}
                    </span>
                </div>
                <div 
                    class="flex justify-center items-center relative">
                    <article
                        class="absolute top-12 space-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                        <u-tooltip
                            text="View Project"
                            :popper="{
                                arrow: true,
                                placement: 'top'
                            }">
                            <span >
                                <button
                                    @click="toggleModal(true)"
                                    class=" p-2 rounded-full hover:bg-black hover:text-white duration-300">
                                    <Eye
                                        class="w-5 h-5 text-red-600"
                                    />
                                </button>
                            </span>
                        </u-tooltip>
                        <u-tooltip
                            v-if="gitHubLink"
                            text="View Github"
                            :popper="{
                                arrow: true,
                                placement: 'top'
                            }">
                            <a 
                                :href="gitHubLink"
                                target="_blank">
                                <button
                                    class=" p-2 rounded-full hover:bg-black hover:text-white duration-300">
                                    <Github
                                        class="w-5 h-5 text-red-600 "
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
                class="text-sm font-normal text-gray-500 line-clamp-3">
                {{ detail }}
            </p>
            <div 
                class="flex flex-wrap gap-x-1 gap-y-1 pt-1">
                <ul
                    v-for="(item, idx) in techology"
                    :key="idx">
                    <li>
                        <u-badge
                            size="sm"
                            :label="item"
                            variant="soft"
                            color="red"
                        />
                    </li>
                </ul>
            </div>
            <div 
                class="flex gap-x-2 pt-1">
                <u-tooltip
                    text="View in Project"
                    :popper="{
                        arrow: true,
                        placement: 'top'
                        
                    }"
                    class="flex-1">
                    <UButton
                        color="black" 
                        size="sm"
                        block
                        class="px-4"
                        @click="toggleModal(true)">
                        <span>
                            View Project
                        </span>
                        <span>
                            <Open
                                class="w-4 h-4"
                            />
                        </span>
                    </UButton>
                </u-tooltip>
                
                <u-popover
                    v-if="gitHubLink"
                    mode="hover"
                    :popper="{
                        placement: 'top',
                        offsetDistance: 2
                    }">
                    <UButton
                        target="_blank"
                        :to="gitHubLink"
                        color="gray"
                        variant="soft">
                        <github
                            class="w-5 h-5 text-black"
                        />
                    </UButton>
                    <template #panel>
                        <div 
                            class="px-2 py-1 flex gap-x-2">
                            <div 
                                class="flex items-center">
                                <Github
                                    class="w-6 h-6"    
                                />
                            </div>
                            <div 
                                class="">
                                <h3 class="text-sm font-semibold">GitHub</h3>
                                <p class="text-xs text-gray-500">View the source code for Task Management App</p>
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
                class="overflow-y-auto">
                <div 
                    class="px-4 py-4 flex items-center justify-between">
                    <div 
                        class="border-l-2 border-red-700 px-2">
                        <h2
                            class="text-xl font-semibold uppercase leading-5">
                            {{ title }}
                        </h2>
                        <p
                            class="text-sm font-medium capitalize text-gray-500">
                            {{ workOn }}
                        </p>
                    </div>
                    <div 
                        class="">
                        <UTooltip
                            text="Close"
                            :popper="{ placement: 'top', arrow: true }">
                            <UButton
                                size="sm"
                                variant="ghost"
                                color="red"
                                @click="toggleModal(false)">
                                <Cancel class="w-5 h-5"/>
                            </UButton>
                        </UTooltip>
                    </div>
                </div>
                <u-divider 
                    size="sm" 
                    class="px-4"
                    :ui="{
                        border: {
                            base: 'border-red-700 dark:border-red-600'
                        }
                    }"
                />
                <div 
                    class="px-4 text-center">
                    <h2
                        class="text-lg font-semibold uppercase pt-2">
                        Demo project Images
                    </h2>
                    <div 
                        class="flex justify-center items-center pt-6">
                        <div 
                            class="max-w-[700px] h-lg shadow-md">
                            <UCarousel 
                                v-if="demoImage && demoImage.length > 0"
                                ref="carouselRef"
                                v-slot="{ item }" 
                                :items="demoImage" 
                                :ui="{ 
                                    item: 'basis-full',
                                    indicators: {
                                        active: 'bg-red-700'
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
                                class="flex justify-center items-center w-full h-full bg-gray-100">
                                <NoImage class="w-12 h-12 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <h2
                        class="text-lg font-semibold uppercase py-3">
                        technology
                    </h2>
                    <div 
                        class="flex gap-x-2 items-center justify-center">
                        <ul
                            v-for="(item, idx) in techology">
                            <li>
                                <u-badge
                                    size="md"
                                    :label="item"
                                    variant="soft"
                                    color="red"
                                />
                            </li>
                        </ul>
                    </div>
                    <h2
                        class="text-lg font-semibold uppercase py-2">
                        Details
                    </h2>
                    <p
                        class="text-sm text-center text-gray-500 px-32">
                        {{ detail }}
                    </p>
                    <div 
                        class=""
                        v-if=" gitHubLink">
                        <h2
                            class="text-lg font-semibold uppercase py-2">
                            Follow us
                        </h2>
                        <div 
                            class="space-x-3 pb-10">
                            <u-button
                                target="_blank"
                                :to="viewProjectLink"
                                color="black"
                                variant="solid"
                                size="md"
                                class="px-4">
                                <Explore
                                    class="w-4 h-4"
                                />
                                <span>
                                    explore
                                </span>
                            </u-button>
                            <u-button
                                v-if="gitHubLink"
                                color="black"
                                target="_blank"
                                :to="gitHubLink"
                                variant="solid"
                                size="md"
                                class="px-4">
                                <Github
                                    class="w-4 h-4"
                                />
                                <span>
                                    Github
                                </span>
                            </u-button>
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
    }>(),
    {
        image: "N/A",
        workOn: "N/A",
        title: "N/A",
        detail: "N/A",
        viewProjectLink: "",
        gitHubLink: ""
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