<template>
    <div 
        class="w-full min-h-screen px-4 md:px-8 space-x-3 md:space-x-0 space-y-8">
        <div 
            class="text-center space-y-0 sm:space-y-1">
            <h3 
                class=" text-gray-500 uppercase "
                :class="translations.language === 'en'? 'text-xs sm:text-sm font-medium' : 'text-xs md:text-sm'">
                {{ t('about') }}
            </h3>
            <h2
                class=" text-red-800 dark:text-red-600"
                :class="translations.language === 'en'? 'logo text-md sm:text-2xl md:text-3xl lg:text-4xl font-medium  tracking-wide' : 'font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-2'">
                <span>{{ t('aboutHeader1') }}</span><br />
                <span>{{ t('aboutHeader2') }}</span>
            </h2>
        </div>
        <div 
            class="flex flex-col lg:flex-row gap-4 sm:gap-8 items-start">
            <div 
                class="w-full lg:w-2/5 space-y-6">
                <div 
                    class="w-full h-[430px] sm:h-[460px] flex items-center justify-center overflow-hidden rounded-md">
                    <img
                        src="https://res.cloudinary.com/dgbeqlbhx/image/upload/v1756828338/siemreap_image_bzokes.webp"
                        alt="profile"
                        class="max-w-full max-h-full object-scale-down hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
                <div 
                    class="w-full lg:w-2/3 space-y-8 sm:space-y-4 md:space-y-8">
                    <p 
                        class=" text-gray-500 dark:text-gray-400 leading-relaxed text-center lg:text-start  font-normal"
                        :class="translations.language === 'en'? 'text-sm sm:text-md leading-normal md:leading-snug lg:leading-relaxed' : '  text-sm md:text-md leading-snug md:leading-normal'">
                        {{ t('paragraphAbout1') }}<span class="font-semibold"> HTML</span>, 
                        <span class="font-semibold">CSS (Tailwind)</span>, 
                        <span class="font-semibold">JavaScript</span>, 
                        <span class="font-semibold">TypeScript</span>, 
                        {{ t('and') }}
                        <span class="font-semibold">Nuxt.js</span>។ 
                        {{ t('paragraphAbout2') }}
                        <span class="font-semibold">RESTful APIs</span> 
                        {{ t('and') }}
                        <span class="font-semibold">{{ t('paragraphAbout3') }}</span> 
                        {{ t('paragraphAbout4') }}
                    </p>
                    <div 
                        class="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <ul 
                            v-for="(item) in information"
                            :key="item.id">
                            <li>
                            <div 
                                class="flex items-center gap-x-2">
                                <div
                                    class="bg-black dark:bg-gray-900 text-white px-2 py-2 rounded-lg flex items-center justify-center">
                                    <component 
                                        :is="item.icon"
                                        class="lg:w-5 lg:h-5 w-4 h-4"
                                    />
                                </div>
                                <div 
                                    class="flex flex-col items-start">
                                    <span 
                                        class=" text-black dark:text-white"
                                        :class="translations.language === 'en'? 'text-sm sm:text-md md:text-lg font-semibold' : 'text-sm sm:text-md md:text-lg font-semibold'">
                                        {{ item.name }}
                                    </span>
                                    <span class=" text-gray-500 dark:text-gray-400"
                                    :class="translations.language === 'en'? 'text-[0.65rem] sm:text-xs font-medium ' : 'text-[0.65rem] sm:text-xs font-medium '">
                                        {{ item.information }}
                                    </span>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>

                <div 
                    class="space-y-3 sm:space-y-4">
                    <h3 
                        class="font-semibold flex items-center justify-center lg:justify-start gap-x-2 text-black dark:text-white"
                        :class="translations.language === 'en' ? 'leading-relaxed text-md sm:text-xl' : 'text-md md:text-xl'">
                        <Webpage 
                            class="text-red-700 dark:text-red-600 w-4 h-4 sm:w-5 sm:h-5" 
                        />
                        {{ t('techologayHeader') }}
                    </h3>
                    <div 
                        class="flex flex-wrap justify-center lg:justify-start gap-x-1 sm:gap-x-2 lg:gap-x-4  gap-y-2">
                        <div
                            v-for="tech in technology"
                            :key="tech.id"
                            class="flex items-center gap-2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-white dark:text-gray-700 shadow-md hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                            :class="tech.color">
                            <component 
                                :is="tech.icon" 
                                class="w-4 h-4 sm:w-5 sm:h-5" 
                            />
                            <span 
                                class="uppercase font-medium text-xs md:text-sm lg:text-md">
                                {{ tech.name }}
                            </span>
                        </div>
                    </div>
                </div>

                <div 
                    class="space-y-3 sm:space-y-4">
                    <h3         
                        class="font-semibold flex items-center justify-center lg:justify-start gap-x-2 text-black dark:text-white"
                        :class="translations.language === 'en' ? 'leading-relaxed text-md sm:text-xl' : 'text-md md:text-xl'">
                        <Tool 
                            class="text-red-700 dark:text-red-600 w-4 h-4 sm:w-5 sm:h-5" 
                        />
                        {{ t('SupportingToolHeader') }}
                    </h3>
                    <div 
                        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-2 xl:gap-x-3 gap-y-2 sm:gap-y-3">
                        <div
                            class="flex items-center gap-3 xl:gap-4 px-3 py-1.5 md:py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div
                                class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 text-white">
                                <Ui class="xl:w-6 xl:h-6 w-5 h-5" />
                            </div>
                            <div 
                                class="flex flex-col">
                                <h4 
                                    class=" text-black dark:text-white"
                                    :class="translations.language === 'en'? 'text-md xl:text-lg font-semibold' : 'text-md md:text-sm lg:text-md xl:text-lg'">
                                    {{ t('uiTool') }}
                                </h4>
                                <div 
                                    class="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400"
                                    :class="translations.language === 'en'? 'text-xs md:text-sm' : ''">
                                    <div 
                                        class="flex items-center gap-2">
                                        <Nuxtui 
                                            class="md:w-5 md:h-5 w-4 h-4 text-green-600" 
                                        />
                                        <span>Nuxt UI</span>
                                </div>
                                <div 
                                    class="flex items-center gap-2">
                                    <Mui class="md:w-5 md:h-5 w-4 h-4 text-blue-500" />
                                    <span>MUI</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex items-center gap-3 xl:gap-4 px-3 py-1.5 md:py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div
                                class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-tr from-blue-800 to-indigo-900 text-white">
                                <DataIcon class="xl:w-6 xl:h-6 w-5 h-5" />
                            </div>
                            <div 
                                class="flex flex-col">
                                <h4 
                                    class=" text-black dark:text-white"
                                    :class="translations.language === 'en'? 'text-md xl:text-lg font-semibold' : 'text-md md:text-sm lg:text-md xl:text-lg'">
                                    {{ t('dataTool') }}
                                </h4>
                                <div 
                                    class="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <div 
                                        class="flex items-center gap-2">
                                        <Postman 
                                            class="md:w-5 md:h-5 w-4 h-4 text-green-600" 
                                        />
                                        <span>Postman</span>
                                </div>
                                <div 
                                    class="flex items-center gap-2">
                                    <Hoppscotch class="md:w-5 md:h-5 w-4 h-4 text-green-600" />
                                    <span>Hoppscotch</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex items-center gap-3 xl:gap-4 px-3 py-1.5 md:py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div
                                class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-tr from-amber-800 to-amber-900 text-white">
                                <Tool class="xl:w-6 xl:h-6 w-5 h-5" />
                            </div>
                            <div 
                                class="flex flex-col">
                                <h4 
                                    class=" text-black dark:text-white"
                                    :class="translations.language === 'en'? 'text-md xl:text-lg font-semibold' : 'text-md md:text-sm lg:text-md xl:text-lg'">
                                    {{ t('verionControl') }}
                                </h4>
                                <div 
                                    class="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <div 
                                        class="flex items-center gap-2">
                                        <Git 
                                            class="md:w-5 md:h-5 w-4 h-4 text-green-600" 
                                        />
                                        <span>Git</span>
                                    </div>
                                    <div 
                                        class="flex items-center gap-2">
                                        <Github class="md:w-5 md:h-5 w-4 h-4 text-gray-600 dark:text-gray-400" />
                                        <span>Github</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import {
    Html as HtmlIcon,
    Css,
    Javascript,
    Typescript,
    React,
    Vue,
    Nuxt,
    Nuxtui,
    Mui,
    Php,
    Laravel,
    Mysql,
    Tailwind,
    Bootstrap,
    Node,
    Webpage,
    Tool,
    Ui,
    Data as DataIcon,
    Postman,
    Hoppscotch,
    Git,
    Github,
    Focus,
    Cake,
    Location,
    Call,
    Email
} from "@/components/icons";
import { 
    useTranslation 
} from '@/composables/useTranslation';

const { t, translations } = useTranslation();

const technology = [
    {
        id: 1,
        name: "Html",
        icon: HtmlIcon,
        color: "bg-gradient-to-r from-orange-600 to-yellow-600"
    },
    {
        id: 2,
        name: "Css",
        icon: Css,
        color: "bg-gradient-to-r from-blue-600 to-cyan-500"
    },
    {
        id: 3,
        name: "Javascript",
        icon: Javascript,
        color: "bg-gradient-to-r from-yellow-700 to-amber-600"
    },
    {
        id: 4,
        name: "Typescript",
        icon: Typescript,
        color: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
        id: 5,
        name: "React",
        icon: React,
        color: "bg-gradient-to-r from-cyan-600 to-blue-500"
    },
    {
        id: 6,
        name: "Vue",
        icon: Vue,
        color: "bg-gradient-to-r from-green-400 to-emerald-600"
    },
    {
        id: 7,
        name: "Nuxt",
        icon: Nuxt,
        color: "bg-gradient-to-r from-emerald-500 to-green-600"
    },
    {
        id: 8,
        name: "Bootstrap",
        icon: Bootstrap,
        color: "bg-gradient-to-r from-purple-500 to-indigo-600"
    },
    {
        id: 9,
        name: "Tailwind",
        icon: Tailwind,
        color: "bg-gradient-to-r from-sky-300 to-blue-500"
    },
    {
        id: 10,
        name: "Php",
        icon: Php,
        color: "bg-gradient-to-r from-indigo-500 to-indigo-700"
    },
    {
        id: 11,
        name: "Laravel",
        icon: Laravel,
        color: "bg-gradient-to-r from-red-600 to-pink-500"
    },
    {
        id: 12,
        name: "My Sql",
        icon: Mysql,
        color: "bg-gradient-to-r from-teal-600 to-cyan-500"
    }
];

const information = computed(() => [
    {
        id: 1, 
        icon: Webpage,
        name: String(t('field')),
        information: String(t('fieldDetail'))
    },
    {
        id: 2, 
        icon: Focus,
        name: String(t('focus')),
        information: String(t('focusDetail'))
    },
    {
        id: 3, 
        icon: Cake,
        name: t('birthDate'),
        information: t('birthdateDate')
    },
    {
        id: 4, 
        icon: Location,
        name: t('locationAbout'),
        information: t('locationDate')
    },
    {
        id: 5, 
        icon: Call,
        name: t('tel'),
        information: '+855 95 872 770'
    },
    {
        id: 6, 
        icon: Email,
        name: t('email'),
        information: 'vatnagz@gmail.com'
    },
]) 

</script>

<style scoped>

</style>