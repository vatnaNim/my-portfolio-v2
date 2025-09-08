<template>
    <div 
        class="relative">
        <transition 
            name="fade">
            <div
                v-if="isLoading"
                class="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
                <Page /> 
                <p 
                    class="mt-4 text-gray-700 dark:text-gray-300 font-medium text-lg sm:text-xl">
                    Loading...
                </p>
            </div>
        </transition>
        <div 
            v-show="!isLoading" 
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
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 gap-y-3 sm:gap-y-4 w-full aos-init aos-animate">
                <ClientOnly>
                    <ProjectCard
                        v-for="(item, idx) in project.filter(item => item.category === 'real work project')"
                        :key="item.id"
                        :image="item.mainImage"
                        :title="item.title"
                        :detail="item.detail"
                        :work-on="item.workingOn"
                        :git-hub-link="item.gitHubLink"
                        :demo-image="item.demoImage"
                        :techology="item.techology"
                        :view-project-link="item.domainLink"
                        data-aos="fade-up"
                        :data-aos-delay="idx * 50"
                        data-aos-duration="1200"
                        data-aos-once="false"
                        data-aos-mirror="true"
                    />
                </ClientOnly>
            </div>
        </div>
      
        <div 
            class="space-y-4 text-center w-full mt-4 sm:mt-8">
        <h3
            class="text-sm sm:text-md md:text-xl underline underline-offset-4"
            :class="translations.language === 'en' ? 'logo' : ''">
            {{ t('myProject') }}
        </h3>
        <ClientOnly>
            <div 
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 gap-y-3 sm:gap-y-4 w-full aos-init aos-animate">
                <ProjectCard
                    v-for="(item, idx) in project.filter(item => item.category === 'personal project')"
                    :key="item.id"
                    :image="item.mainImage"
                    :title="item.title"
                    :detail="item.detail"
                    :work-on="item.workingOn"
                    :git-hub-link="item.gitHubLink"
                    :demo-image="item.demoImage"
                    :techology="item.techology"
                    :view-project-link="item.domainLink"
                    data-aos="fade-up"
                    :data-aos-delay="idx * 50"
                    data-aos-duration="1200"
                    data-aos-once="false"
                    data-aos-mirror="true"
                />
            </div>
        </ClientOnly>
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
import { Page } from '~/components/loadings'
import AOS from 'aos';
import 'aos/dist/aos.css';

const { t, translations } = useTranslation();

const project = computed(() => [
    {
        id: 1,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757005089/Screenshot_2025-09-04_184013_wstnrm.png',
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
        gitHubLink: "https://github.com/vatnaNim/Personal_Photographer_Project",
        domainLink: "",
        demoImage: [
            "https://res.cloudinary.com/doleyeec5/image/upload/v1757006478/Screenshot_2025-05-20_055409_naswja.png",
        ],
        videoDemo: "",
    },
    {
        id: 9,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757007581/448773910_495856986298364_976179559881324687_n_v37r9l.jpg',
        title: 'Gtech Admin',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard9'),       
        techology: [
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
        ],
        videoDemo: "",
    },
    {
        id: 10,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757007213/Screenshot_2025-09-05_003230_rtcigz.png',
        title: 'Gtech Cambodia',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard10'),        
        techology: [
        ],
        gitHubLink: "",
        domainLink: "https://gtechcambodia.com/",
        demoImage: [
        ],
        videoDemo: "",
    },
    {
        id: 11,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757007406/462255561_838872061763165_7338830345133159744_n_zuj9sz.jpg',
        title: 'sambot sambot digital admin',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard11'),        
        techology: [
        ],
        gitHubLink: "",
        domainLink: "https://www.gtechcambodia.com/",
        demoImage: [
        ],
        videoDemo: "",
    },
    {
        id: 12,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757007406/462255561_838872061763165_7338830345133159744_n_zuj9sz.jpg',
        title: 'sambot sambot digital tamplate',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard12'),
        techology: [
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
        ],
        videoDemo: "",
    },
    {
        id: 13,
        mainImage: 'https://res.cloudinary.com/doleyeec5/image/upload/v1757007679/No_Image_Available_ldfzuj.jpg',
        title: 'Samphat Motobike Pos System',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: t('projectCard13'),
        techology: [
        ],
        gitHubLink: "",
        domainLink: "https://www.gtechcambodia.com/",
        demoImage: [
        ],
        videoDemo: "",
    },
]);

const isLoading: Ref<boolean> = ref<boolean>(true);
    
onMounted((): void => {
    AOS.init({
        duration: 1500, 
        once: false,    
        mirror: true,
        anchorPlacement: 'top-bottom',  
    });
        if (document.readyState === 'complete') 
    {
        isLoading.value = false
    } else {
        window.addEventListener('load', () => {
        setTimeout(() => {
            isLoading.value = false
        }, 300)
    })
  }
});

onBeforeUnmount((): void => {
    AOS.refresh(); 
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>