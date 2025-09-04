<template>
    <div
        class="w-full min-h-[90vh] sm:px-6 lg:px-8 pt-6 space-y-6  md:space-y-10">
        <div 
            class="flex flex-col gap-y-3 items-center justify-center">
            <h2 
                class="text-2xl sm:text-3xl font-medium tracking-wide text-red-700 dark:text-red-600 leading-7 sm:leading-none"
                :class="translations.language === 'en'? 'logo' : ''">
                {{ t('featuredWork') }}
            </h2>
            <div 
                class="border-2 min-w-32 border-gray-300 dark:border-gray-600"></div>
            <p
                class="max-w-[700px] text-center text-sm sm:text-md leading-5 sm:leading-snug font-normal text-gray-500 dark:text-gray-400 px-3 sm:px-0">
                {{ t('projectTitle1') }}
            </p>
        </div>
        <div
            class="max-w-full flex justify-center ">
            <div 
                class="w-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-4 sm:px-0">
                <ProjectCard
                    v-for="(item, idx) in project.slice(0, 6)"  
                    :key="idx"
                    :image="item.mainImage"
                    :title="item.title"
                    :detail="item.detail"
                    :work-on="item.workingOn"  
                    :git-hub-link="item.gitHubLink"
                    :demo-image="item.demoImage"
                    :techology="item.techology"       
                />
            </div>
        </div>
        <div    
            class="pt-0 sm:pt-2 md:pt-3 flex flex-col items-center gap-y-2 md:gap-y-4">
            <p
                class="text-sm sm:text-md font-medium text-black dark:text-white text-center">
                {{ t('projectTitle2') }}
            </p>
            <span>
                <NuxtLink
                    to="/projects">
                    <UButton
                        color="black"
                        variant="solid"
                        size="md"
                        :ui="{
                            padding: {
                                md: 'py-1.5 px-4 md:px-3 md:py-2'
                            }
                        }"
                        class="transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300">
                        <span>
                            <Eye 
                                class="w-5 h-5"
                            />
                        </span>
                        <span
                            class="flex items-center uppercase">
                            <span class="text-xs sm:text-sm md:text-md">{{ t('viewAllProject') }}</span>
                            <Open class="w-4 h-4"/>
                        </span>
                    </UButton>
                </NuxtLink>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    ProjectCard
} from '../ui';
import { 
    Eye,
    Open
} from '../icons';
import { 
    useTranslation 
} from '@/composables/useTranslation';

const { 
    translations, 
    t 
} = useTranslation();

const project = computed(() => [
    {
        id: 1,
        mainImage: '',
        title: 'Personal Portofio V2.0',
        workingOn: 'frontend',
        category: 'personal project',
        detail: t('projectCard1'),
        techology: [
            "Nuxt",
            "Vue",
            "Javascript",
            "Typescript",
            "Nuxt UI",
            "Tailwind"
        ],
        gitHubLink: "fd",
        domainLink: "https://vatna-portfolio.vercel.app/",
        demoImage: [
        ],
    },
    {
        id: 2,
        mainImage: '',
        title: 'Personal Portofio V1.0',
        workingOn: 'frontend',
        category: 'personal project',
        detail: t('projectCard2'),
        techology: [
            "React",
            "Javascript",
            "Typescript",
            "Material UI",
            "Tailwind"
        ],
        gitHubLink: "fd",
        domainLink: "https://vatna-portfolio.vercel.app/",
        demoImage: [
        ],
    },
    {
        id: 3,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Robert Coffee',
        workingOn: 'frontend',
        detail: t('projectCard3'),
        category: 'personal project',
        techology: [
            "Nuxt",
            "Vue",
            "Tailwind",
            "Javascript",
            "Typescript",
            "NuxtUi",
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 4,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        category: 'personal project',
        title: 'Robert Coffee',
        workingOn: 'backend',
        detail: t('projectCard4'),
        techology: [
            "PhP",
            "Laraval",
            "Mysql",
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 5,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        category: 'personal project',
        title: 'starbuck',
        workingOn: 'Frontend',
        detail: t('projectCard5'),
        techology: [
            "React",
            "Tailwind",
            "Javascript",
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 6,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        category: 'personal project',
        title: 'Skincare',
        workingOn: 'Frontend',
        detail: t('projectCard6'),
        techology: [
            "Nuxt",
            "Vue",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 7,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Restaurants',
        workingOn: 'Frontend',
        category: 'personal project',
        detail: t('projectCard7'),
        techology: [
            "Nuxt",
            "Vue",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 8,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'photographer',
        category: 'personal project',
        workingOn: 'Frontend',
        detail: t('projectCard8'),
        techology: [
            "Nuxt",
            "Vue",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
])
</script>

<style scoped>

</style>