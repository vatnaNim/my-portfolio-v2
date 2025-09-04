<template>
    <nav
        class="w-full h-[10vh] flex items-center justify-between px-6 sticky top-0 z-50 backdrop-blur-md bg-gray-400/20 border-b border-white/20 dark:bg-gray-800/30 dark:border-gray-700/40">
        <div>
            <h1 class="text-xl lg:text-3xl tracking-wide logo text-black dark:text-gray-200 ">
                Nim vatna
            </h1>
        </div>
        <div 
            class="hidden md:flex gap-x-4 lg:gap-x-8 px-3 lg:px-4 py-2 rounded-md backdrop-blur-md border shadow-md bg-gray-400/20 border-white/20 dark:bg-gray-800/30 dark:border-gray-400 text-black dark:text-gray-200 text-xs lg:text-md">
            <ul 
                v-for="(list, idx) in navList" 
                :key="idx">
                <li
                    @click="scrollToSection(list.target)"
                    class="flex items-center gap-x-0.5 lg:gap-x-1 cursor-pointer group"
                    :class="selectedSection === list.target ? 'text-red-700 dark:text-red-600' : ''">
                    <component
                        :is="list.icon"
                        class="w-6 h-5 inline-block"
                    />
                    <span 
                        class="relative inline-block ml-1">
                        {{ list.name }}
                        <span
                            class="absolute left-1/2 bottom-[-4px] h-[2px] w-0 bg-red-700 dark:bg-red-600 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
                    </span>
                </li>
            </ul>
        </div>
        <div 
            class=" space-x-0.5 sm:space-x-1">
            <u-tooltip
                :text="translations.language === 'en' ? t('languageBtnKh') : t('languageBtnEn')"
                :popper="{
                    placement: 'bottom',
                    offset: [0, 8]
                }">
                <u-button
                    variant="ghost"
                    color="gray"
                    @click="toggleLanguage"
                    size="md"
                    class="rounded-full"
                    :ui="{
                        padding:{
                            md: 'px-1 py-1'
                        },
                        color: {
                            gray:{
                                ghost:'hover:shadow-md hover:bg-gray-400/20 dark:hover:bg-gray-800/30 transition-colors duration-200',
                            }
                        }
                    }">
                    <component
                        :is="translations.language === 'en' ? English : Cambodia"
                        class="md:w-6 md:h-6 w-5 h-5 inline-block" />
                </u-button>
            </u-tooltip>
            <u-tooltip
                :text="darkColor ? t('lightModeBtn') : t('darkmodeBtn')"
                :popper="{
                    placement: 'bottom',
                    offset: [0, 8]
                }">
                <u-button
                    variant="ghost"
                    color="black"
                    @click="toggle"
                    size="md"
                    class="rounded-full"
                    :ui="{
                        padding:{
                            md: 'px-1 py-1'
                        },
                        color: {
                            black:{
                                ghost:'hover:shadow-md hover:bg-gray-400/20 dark:hover:bg-gray-800/30 transition-colors duration-200',
                            }
                        }
                    }">
                    <component
                        :is="darkColor ? Day : Dark"
                        class="md:w-6 md:h-6 w-5 h-5 inline-block" />
                </u-button>
            </u-tooltip>
            <u-tooltip
                :text="t('menu')"
                :popper="{
                    placement: 'bottom',
                    offset: [0, 8]
                }"
                class="md:hidden inline-block">
                <u-button
                    variant="ghost"
                    color="black"
                    size="md"
                    class="rounded-full"
                    @click="toggleSlideover(true)"
                    :ui="{
                        padding:{
                            md: 'px-1 py-1'
                        },
                        color: {
                            black:{
                                ghost:'hover:shadow-md hover:bg-gray-400/20 dark:hover:bg-gray-800/30 transition-colors duration-200',
                            }
                        }
                    }">
                    <Bar
                        class="md:w-6 md:h-6 w-5 h-5 inline-block rotate-180"/>
                </u-button>
            </u-tooltip>
        </div>
        <USlideover 
            v-model="slideoverBar"
            :ui="{
                width: 'max-w-[250px]',
                overlay: {
                    background: 'bg-black/30 dark:bg-black/50 backdrop-blur-md',
                }
            }"
            aria-hidden="false">
            <div
                class="flex flex-col justify-between h-full py-2">
                <div 
                    class="h-14 flex items-center justify-between px-2 border-b border-gray-500 dark:border-gray-400">
                    <h2
                        class="text-md sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {{ translations.language === 'en' ? 'Quick Navigation' : 'ការរុករករហ័ស' }}
                    </h2>
                    <u-tooltip
                        text="bar"
                        :popper="{
                            placement: 'bottom',
                            offset: [0, 8]
                        }"
                        class="md:hidden inline-block">
                        <u-button
                            variant="ghost"
                            color="black"
                            size="md"
                            class="rounded-full"
                            @click="toggleSlideover(false)"
                            :ui="{
                                padding:{
                                    md: 'px-1 py-1'
                                },
                                color: {
                                    black:{
                                        ghost:'hover:shadow-md hover:bg-gray-400/20 dark:hover:bg-gray-800/30 transition-colors duration-200',
                                    }
                                }
                            }">
                            <Bar
                                class="w-5 h-5 inline-block"/>
                        </u-button>
                    </u-tooltip>
                </div>
                <div 
                    class=" flex-1 px-2 py-4 space-y-2">
                    <ul
                        v-for="(list, idx) in navList"
                        :key="idx">
                        <li
                            @click="scrollToSection(list.target)"
                            class="flex items-center justify-between px-2 py-1 sm:py-2 rounded-md hover:bg-gray-900  duration-200 hover:shadow-md hover:dark:bg-gray-200  cursor-pointer"
                            :class="selectedSection === list.target ? 'text-red-700 dark:text-red-600 hover:text-red-700 dark:hover:text-red-600' : 'hover:text-gray-200 hover:dark:text-gray-900' ">
                            <span>
                                <component
                                    :is="list.icon"
                                    class="w-5 h-6 sm:w-6 sm:h-6 inline-block mr-2" 
                                />
                                <span
                                    class=" text-sm md:text-md">
                                    {{ list.name }}
                                </span>
                            </span>
                            <span>
                                <SharpArrow
                                    class="w-3 h-3 sm:w-4 sm:h-4 inline-block "    
                                />
                            </span>
                        </li>
                    </ul>
                </div>
                <div 
                    class="h-12 border-t border-gray-500 flex items-center justify-center ">
                    <span
                        class="text-sm space-x-2 flex items-center">
                        <DateIcon
                            class="text-red-700 dark:text-red-600 w-4 h-4 sm:w-5 sm:h-5"/>
                        <span
                            class="text-gray-800 dark:text-gray-200 text-sm sm:text-md font-semibold">
                            {{ formattedDate }}
                        </span>
                    </span>
                </div>
            </div>
        </USlideover>
    </nav>
</template>

<script setup lang="ts">
import { 
    Home,
    About,
    Achievement,
    Experience,
    Project,
    Contact,
    Cambodia,
    English,
    Day,
    Dark,
    Bar,
    SharpArrow,
    Date as DateIcon
} from '../icons';
import {
    useCustomColorMode
} from "~/composables/useCustomColorMode"
import { 
    useTranslation 
} from '@/composables/useTranslation';
import { 
    useRouter,
    useRoute 
} from 'vue-router'

const router = useRouter();
const route = useRoute();

const { darkColor, toggle } = useCustomColorMode();
const { translations, toggleLanguage, t } = useTranslation();
const selectedSection: Ref<string> = ref<string>('#home');


const navList = computed(() => [
    { 
        name: t('home'), 
        icon: Home, 
        target: '#home' 
    },
    { 
        name: t('about'),
        icon: About,
        target: '#about' 
    },
    { 
        name: t('achievement'), 
        icon: Achievement, 
        target: '#achievement' 
    },
    { 
        name: t('experience'), 
        icon: Experience, 
        target: '#experience'
    },
    { 
        name: t('projects'), 
        icon: Project, 
        target: '#project' 
    },
    { 
        name: t('contact'),
        icon: Contact,
        target: '#contact' 
    },
]);

const slideoverBar: Ref<boolean> = ref<boolean>(false);

const toggleSlideover = (state: boolean): void => {
    slideoverBar.value = state;
}

const formattedDate = computed(() => {
    const today = new Date();

    if (translations.value.language === "en") {
        return today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
    const khWeekdays = [
        "ថ្ងៃអាទិត្យ",
        "ថ្ងៃច័ន្ទ",
        "ថ្ងៃអង្គារ",
        "ថ្ងៃពុធ",
        "ថ្ងៃព្រហស្បតិ៍",
        "ថ្ងៃសុក្រ",
        "ថ្ងៃសៅរ៍",
    ];

    const khMonths = [
        "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា",
        "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"
    ];

    const day = today.getDate()
        .toString()
        .replace(/\d/g, d => String.fromCharCode(0x17e0 + parseInt(d)));

    const month = khMonths[today.getMonth()];

    const year = today.getFullYear()
        .toString()
        .replace(/\d/g, d => String.fromCharCode(0x17e0 + parseInt(d))); 
    const weekday = khWeekdays[today.getDay()];

    return `${weekday} ទី ${day} ខែ ${month} ឆ្នាំ ${year}`;
});

const scrollToSection = (id: string): void => {
  if (route.path !== '/' && id === '#home') 
  {
    router.push('/').then(() => {
    setTimeout((): void => {
            const el = document.querySelector(id)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    })
    } else {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    selectedSection.value = id
    if (window.innerWidth < 768)
    {
        slideoverBar.value = false;
    }
}

defineExpose({
    scrollToSection
})

onMounted((): void => {
    if (route.path !== "/") return; 

    const sections = navList.value
        .map(item => document.querySelector(item.target))
        .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                selectedSection.value = `#${entry.target.id}`;
                }
            });
        },
        {
            root: null,         
            threshold: 0.6      
        }
    );
    sections.forEach((section) => observer.observe(section));
});

</script>

<style scoped>

</style>