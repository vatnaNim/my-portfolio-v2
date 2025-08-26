<template>
    <nav
        class="w-full h-[10vh] flex items-center justify-between px-6 sticky top-0 z-50 backdrop-blur-md bg-gray-400/20 border-b border-white/20 dark:bg-gray-800/30 dark:border-gray-700/40">
        <div>
            <h1 class="text-lg md:text-xl lg:text-3xl tracking-wide logo text-black dark:text-gray-200 ">
                Nim vatna
            </h1>
        </div>
        <div 
            class="hidden md:flex gap-x-4 lg:gap-x-8 px-3 lg:px-4 py-2 rounded-md backdrop-blur-md border shadow-md bg-gray-400/20 border-white/20 dark:bg-gray-800/30 dark:border-gray-400 text-black dark:text-gray-200 text-xs lg:text-md">
            <ul
                v-for="(list, idx) in navList"
                :key="idx">
                <li
                    class="flex items-center gap-x-0.5 lg:gap-x-1">
                    <component
                        :is="list.icon"
                        class="w-6 h-5 inline-block" />
                    <span>
                        {{ list.name }}
                    </span>
                </li>
            </ul>
        </div>
        <div 
            class="space-x-1">
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
                        :is="translations.language === 'en' ? Cambodia : English"
                        class="w-6 h-6 inline-block" />
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
                        class="w-6 h-6 inline-block" />
                </u-button>
            </u-tooltip>
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
                        class="w-6 h-6 inline-block rotate-180"/>
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
                    class="h-14 flex items-center justify-between px-2 border-b border-gray-500">
                    <h2
                        class="text-lg font-semibold text-gray-800 dark:text-gray-200">
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
                            class="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-900 hover:text-gray-200 duration-200 hover:shadow-md hover:dark:bg-gray-200 hover:dark:text-gray-900 cursor-pointer">
                            <span>
                                <component
                                    :is="list.icon"
                                    class="w-6 h-6 inline-block mr-2" 
                                />
                                <span>
                                    {{ list.name }}
                                </span>
                            </span>
                            <span>
                                <SharpArrow
                                    class="w-4 h-4 inline-block "    
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
                            class="text-green-500 w-5 h-5"/>
                        <span
                            class="text-gray-800 dark:text-gray-200 text-md font-bold">
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


const { darkColor, toggle } = useCustomColorMode();
const { translations, toggleLanguage, t } = useTranslation();

const navList = computed(() => [
    { 
        name: t('home'), 
        icon: Home, 
        path: '/' 
    },
    { 
        name: t('about'),
        icon: About,
        path: '/about' 
    },
    { 
        name: t('achievement'), 
        icon: Achievement, 
        path: '/achievements' 
    },
    { 
        name: t('experience'), 
        icon: Experience, 
        path: '/experience' 
    },
    { 
        name: t('projects'), 
        icon: Project, 
        path: '/projects' 
    },
    { 
        name: t('contact'),
        icon: Contact,
        path: '/contact' 
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

</script>

<style scoped>

</style>