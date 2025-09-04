<template>
    <div 
        class="px-4 md:px-8 py-4 flex flex-col justify-center items-center gap-y-3 sm:gap-y-4">
        <div 
            class="leading-4 text-center">
        <h2
            class="text-2xl sm:text-3xl font-medium tracking-wide text-red-700 dark:text-red-600 leading-7 sm:leading-none"
            :class="translations.language === 'en' ? 'logo' : ''">
            {{ t('myProject') }}
        </h2>
        <p 
            class="text-center text-sm sm:text-md leading-5 sm:leading-snug font-normal text-gray-500 dark:text-gray-400">
            {{ t('titleProject') }}
        </p>
        <div class="w-64 border border-red-700 mt-5"></div>
    </div>
    <div 
        class="space-y-4 md:space-y-8 text-center w-full">
        <h3
            class="text-sm sm:text-md md:text-xl underline underline-offset-4"
            :class="translations.language === 'en' ? 'logo' : ''">
            {{ t('realTimeProject') }}
        </h3>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 gap-y-3 sm:gap-y-4 w-full">
            <ProjectCard
                v-for="item in project.filter(item => item.category === 'real work project')"
                :key="item.id"
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
        class="space-y-4 text-center w-full">
        <h3
             class="text-sm sm:text-md md:text-xl underline underline-offset-4"
            :class="translations.language === 'en' ? 'logo' : ''">
            {{ t('myProject') }}
        </h3>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 gap-y-3 sm:gap-y-4 w-full">
            <ProjectCard
                v-for="item in project.filter(item => item.category === 'personal project')"
                :key="item.id"
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
    </div>
</template>


<script setup lang="ts">
import { 
    ProjectCard 
} from '~/components/ui';
import { 
    useTranslation 
} from '@/composables/useTranslation';

const { t, translations } = useTranslation();

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
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
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
        gitHubLink: "",
        domainLink: "https://vatna-portfolio.vercel.app/",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
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
    {
        id: 9,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Gtech Admin',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard9'),       
        techology: [
            "Nuxt",
            "Vue",
            "Nuxt Ui",
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
        id: 10,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Gtech Cambodia',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard10'),        
        techology: [
            "Next.js",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "https://www.gtechcambodia.com/",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 11,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'sambot sambot digital admin',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard11'),        
        techology: [
            "Nuxt.js",
            "vue",
            "Nuxt ui",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "https://www.gtechcambodia.com/",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 12,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'sambot sambot digital tamplate',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard12'),
        techology: [
            "Nuxt.js",
            "vue",
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
        id: 13,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Samphat Motobike Pos System',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard13'),
        techology: [
            "Nuxt.js",
            "Vue",
            "Nuxt ui",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "https://www.gtechcambodia.com/",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
]);

</script>

<style scoped>

</style>