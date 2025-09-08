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
            <ClientOnly>
                <div 
                    class="w-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-4 sm:px-0 aos-init aos-animate">
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
                        :video-demo="item.videoDemo"
                        :view-project-link="item.domainLink"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1200"
                        data-aos-once="false"
                        data-aos-mirror="true" 
                        data-aos-offset="100"     
                    />
                </div>
            </ClientOnly>
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
import AOS from 'aos';
import 'aos/dist/aos.css';

const { 
    translations, 
    t 
} = useTranslation();

const project = computed(() => [
    {
        id: 1,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757005089/Screenshot_2025-09-04_184013_wstnrm.png',
        title: 'Personal Portfolio  V2.0',
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
        gitHubLink: "https://github.com/vatnaNim/my-portfolio-v2",
        domainLink: "https://vatna-portfolio.vercel.app/",
        demoImage: [
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005089/Screenshot_2025-09-04_184013_wstnrm.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005071/Screenshot_2025-09-04_184237_tdhuy1.png"
        ],
        videoDemo: "",
    },
    {
        id: 2,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757005072/Screenshot_2025-09-04_184500_fmvv7m.png',
        title: 'Personal Portfolio V1.0',
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
        gitHubLink: "https://github.com/vatnaNim/personal-portfolio",
        domainLink: "https://vatna-portfoliov1.vercel.app/",
        demoImage: [
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005072/Screenshot_2025-09-04_184500_fmvv7m.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005074/Screenshot_2025-09-04_184514_aoe2zx.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005074/Screenshot_2025-09-04_184527_zc1mlz.png"
        ],
        videoDemo: "",
    },
    {
        id: 3,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757005078/Screenshot_2025-09-04_195437_n9qcmd.png',
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
        gitHubLink: "https://github.com/vatnaNim/Robert-Coffee-Front-end",
        domainLink: "",
        demoImage: [
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005075/Screenshot_2025-09-04_185524_mvv6gh.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005078/Screenshot_2025-09-04_195437_n9qcmd.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005077/Screenshot_2025-09-04_195403_fi2ffb.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005081/Screenshot_2025-09-04_195502_w3mx9t.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005082/Screenshot_2025-09-04_195513_eqs7a5.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005079/Screenshot_2025-09-04_195451_wwfz8p.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005086/Screenshot_2025-09-04_195713_vmmujz.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005088/Screenshot_2025-09-04_195724_ngwwrb.png"
        ],
        videoDemo: "https://drive.google.com/file/d/1hhFmBS_RGCcQRihJQ0nwJgnN70z4bjJP/preview",
    },
    {
        id: 4,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757005075/Screenshot_2025-09-04_185524_mvv6gh.png',
        category: 'personal project',
        title: 'Robert Coffee',
        workingOn: 'backend',
        detail: t('projectCard4'),
        techology: [
            "PhP",
            "Laraval",
            "Mysql",
        ],
        gitHubLink: "https://github.com/vatnaNim/Robert-Coffee-Back-end",
        domainLink: "",
        demoImage: [
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005075/Screenshot_2025-09-04_185524_mvv6gh.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005078/Screenshot_2025-09-04_195437_n9qcmd.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005077/Screenshot_2025-09-04_195403_fi2ffb.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005081/Screenshot_2025-09-04_195502_w3mx9t.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005082/Screenshot_2025-09-04_195513_eqs7a5.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005079/Screenshot_2025-09-04_195451_wwfz8p.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005086/Screenshot_2025-09-04_195713_vmmujz.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757005088/Screenshot_2025-09-04_195724_ngwwrb.png"
        ],
        videoDemo: "https://drive.google.com/file/d/1hhFmBS_RGCcQRihJQ0nwJgnN70z4bjJP/preview",
    },
    {
        id: 5,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757006466/Screenshot_2025-05-20_060032_i9qme4.png',
        category: 'personal project',
        title: 'starbuck',
        workingOn: 'Frontend',
        detail: t('projectCard5'),
        techology: [
            "React",
            "Tailwind",
            "Javascript",
        ],
        gitHubLink: "https://github.com/vatnaNim/Starbuck",
        domainLink: "https://starbuck-mu.vercel.app/",
        demoImage: [
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757006466/Screenshot_2025-05-20_060032_i9qme4.png",
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757006463/Screenshot_2025-05-20_060014_mplfqk.png"
        ],
        videoDemo: "",
    },
    {
        id: 6,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757006472/Screenshot_2025-05-20_060405_d9saqg.png',
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
        gitHubLink: "https://github.com/vatnaNim/Skin-care-Project",
        domainLink: "",
        demoImage: [
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757006472/Screenshot_2025-05-20_060405_d9saqg.png",
        ],
        videoDemo: "",
    },
    {
        id: 7,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757006475/Screenshot_2025-05-20_061213_amb4ko.png',
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
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757006475/Screenshot_2025-05-20_061213_amb4ko.png",
        ],
        videoDemo: "", 
    },
    {
        id: 8,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757006478/Screenshot_2025-05-20_055409_naswja.png',
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
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757006478/Screenshot_2025-05-20_055409_naswja.png",
        ],
        videoDemo: "", 
    },
]);

onMounted((): void => {
    AOS.init({
        duration: 1500, 
        once: false,    
        mirror: true,
        anchorPlacement: 'top-bottom',  
    });
});

onBeforeUnmount((): void => {
    AOS.refresh(); 
});
</script>

<style scoped>

</style>