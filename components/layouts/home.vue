<template>
    <div
        class="w-full min-h-full md:min-h-[90vh] px-4 md:px-8 flex flex-col-reverse md:flex-row gap-y-3 sm:gap-y-8 md:gap-y-0">
        <div 
            class="w-full md:min-w-[50%] flex flex-col justify-start items-center md:items-start gap-y-2 md:gap-y-4 mt-0 md:pt-8">
            <UBadge 
                variant="solid"
                color="gray"
                size="xs"
                :ui="{ 
                    rounded: 'rounded-full',
                }">
                <Dot class="text-green-500 w-4 h-4 md:w-5 md:h-5 "/>
                <span
                    class="text-gray-500 dark:text-gray-300">
                    {{ t('newOpportunities') }}
                </span>
            </UBadge>
            <div 
                class="space-y-0 sm:space-y-0.5 md:space-y-1 lg:space-y-2 md:text-start text-center">
                <h2
                    class=" font-semibold text-wrap"
                    :class="translations.language === 'en'? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' : 'font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading '">
                    {{ t('hello_there') }}
                </h2>
                <h2
                    class=" text-red-700 dark:text-red-600  "
                    :class="translations.language === 'en'? 'font-medium logo text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider' : 'font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-2'">
                    {{ t('name') }}
                </h2>
                <div 
                    class="flex items-center gap-x-0 md:gap-x-2  font-bold uppercase text-gray-500 dark:text-gray-400"
                    :class="translations.language === 'en'? 'text-md sm:text-xl md:text-2xl lg:text-3xl' : 'text-md sm:text-xl md:text-2xl lg:text-3xl'">
                    <span>{{ t('position') }} &</span>
                    <div 
                        class="relative h-8 md:h-10 w-16 md:w-24 lg:w-32 overflow-hidden">
                        <span class="absolute animate-up">Nuxt</span>
                        <span class="absolute animate-down">React</span>
                    </div>
                </div>
            </div>
           <p 
                class=" text-sm lg:text-base leading-5 md:leading-relaxed text-center md:text-start text-gray-600 dark:text-gray-300 max-w-[600px]">
                {{ t('withOver') }} <span class="font-semibold text-red-600 dark:text-red-500">{{ t('oneYear') }}</span> 
                {{ t('focusOnDeliver') }}
                <span class="font-semibold">{{ t('modernDesign') }}</span> {{ t('and') }} <span class="font-semibold">{{ t('cleanCode') }}</span>. 
                {{ t('like') }} <span class="italic">Nuxt.js</span> {{ t('and') }} <span class="italic">React</span> 
                {{ t('talk') }}
            </p>
            <div 
                class="flex flex-col md:flex-row items-center gap-y-2 md:gap-x-2">
                <span
                    class="text-sm md:text-md font-semibold">
                    {{ t('followme') }} :
                </span>
                <div 
                    class="flex gap-x-1.5 sm:gap-x-2">
                    <ul
                        v-for="(social, idx) in mySocialMedia"
                        :key="idx">
                        <li>
                            <UTooltip 
                                :text="social.name" 
                                :popper="{ arrow: true }">
                                <u-button
                                    v-if="social.name === 'Telegram'"
                                    @click="openTelegram"
                                    variant="solid"
                                    :color="darkColor ? 'gray' : 'black'"
                                    size="sm"
                                    :ui="{
                                        rounded: 'rounded-full',
                                        padding: { sm: 'px-2 py-2' }
                                    }">
                                    <component 
                                        :is="social.icon" 
                                        class="w-4 h-4 text-white" 
                                    />
                                </u-button>
                                <u-button
                                    v-else
                                    :to="social.link"
                                    target="_blank"
                                    variant="solid"
                                    :color="darkColor ? 'gray' : 'black'"
                                    size="sm"
                                    :ui="{
                                        rounded: 'rounded-full',
                                        padding: { sm: 'px-2 py-2' }
                                    }">
                                    <component 
                                        :is="social.icon" 
                                        class="w-4 h-4 text-white"  
                                    />
                                </u-button>
                            </UTooltip>
                        </li>
                    </ul>
                </div>
            </div>
            <div 
                class="">
                <div class="flex items-center gap-x-1 lg:gap-x-2">
                    <u-tooltip
                        :text="t('contactme')"
                        :ui="{
                            base: 'capitalize'
                        }"
                        :popper="{
                            placement: 'top', 
                            arrow: true }">
                        <u-button
                            size="md"
                            variant="solid"
                            :color="darkColor ? 'gray' : 'black'"
                            :ui="{
                                padding: {
                                    md: 'px-1 sm:px-2 lg:px-3 py-2'
                                },
                                gap: {
                                    'md': 'lg:gap-x-2 gap-x-1'
                                },
                                size: {
                                    'md': 'text-sm lg:text-md'
                                }
                            }">
                            <LongArrow
                                class="w-5 lg:w-6 h-5 lg:h-6 text-gray-200"
                            />
                            <span
                                class=" font-semibold capitalize text-wrap"
                                :class="translations.language === 'en'? 'text-xs md:text-sm lg:text-md' : 'text-[0.65rem] md:text-[0.70rem] lg:text-md'">
                                {{ t('contactme') }}
                            </span>
                        </u-button>
                    </u-tooltip>
                    <u-tooltip
                        :text="t('downloadCv')"
                        :popper="{
                            placement: 'top', 
                            arrow: true }">
                            <u-button
                                size="md"
                                variant="outline"
                                :color="darkColor ? 'gray' : 'black'"
                                @click="downloadPdf"
                                :ui="{
                                    base: 'flex items-center gap-2 transition-all duration-300',
                                    rounded: 'rounded-lg',
                                    variant: {
                                        outline: 'hover:bg-black hover:text-white dark:hover:bg-gray-200 dark:hover:text-black'
                                    },
                                    padding: {
                                        md: 'px-1 sm:px-2 lg:px-3 py-2'
                                    },
                                    gap: {
                                        'md': 'lg:gap-x-2 gap-x-1'
                                    },
                                    size: {
                                        'md': 'text-sm lg:text-md'
                                    }
                                }"
                                class="group">
                                <download
                                    class="w-5 md:w-6 h-5 md:h-6 text-black dark:text-gray-300 group-hover:text-white dark:group-hover:text-black"
                                />
                                <span 
                                    class="font-semibold text-wrap"
                                    :class="translations.language === 'en'? 'text-xs md:text-sm lg:text-md' : 'text-[0.65rem] md:text-[0.70rem] lg:text-md'">
                                    {{ t('downloadCv') }}
                                </span>
                            </u-button>
                    </u-tooltip>
                    <span
                        class="text-xs sm:text-sm ml-0 md:ml-2 lg:ml-4 space-x-1 sm:space-x-2 md:space-x-1.5 lg:space-x-3 text-nowrap flex">
                        <span class="text-gray-300 hidden md:block">|</span> <span>{{ t('projectDone')}}</span>
                    </span>
                </div>
                
            </div>
            <div 
                class="flex justify-center items-center gap-x-3 sm:gap-x-4 pt-3">
                <span
                    class="flex items-center gap-x-1 text-gray-500 dark:text-gray-400">
                    <u-tooltip
                        text="Address"
                        :popper="{ 
                            arrow: true,
                            placement: 'top'
                        }">
                        <Location
                            class="w-5 h-5 hover:text-gray-700 hover:dark:text-gray-400 duration-300"
                        />
                    </u-tooltip>
                    <span
                        class="text-xs sm:text-xs font-medium ">
                        {{ t('location') }}
                    </span>
                </span>
                <span
                    class="flex items-center gap-x-1 text-gray-500 dark:text-gray-400">
                    <u-tooltip
                        text="Languages"
                        :popper="{ 
                            arrow: true,
                            placement: 'top'
                        }">
                        <Chat
                            class="w-5 h-5 hover:text-gray-700 hover:dark:text-gray-400 duration-300"/>
                    </u-tooltip>
                    <span
                        class="text-xs font-medium ">
                        {{ t('language_skill') }}
                    </span>
                </span>
                <span
                    class="flex items-center gap-x-1 text-gray-500 dark:text-gray-400">
                    <u-tooltip
                        text="Experience"
                        :popper="{ 
                            arrow: true,
                            placement: 'top'
                        }">
                        <Experience
                            class="w-5 h-5 hover:text-gray-700 hover:dark:text-gray-400 duration-300"
                        />
                    </u-tooltip>
                    <span
                        class="text-xs font-medium ">
                        {{ t('experience_home') }}
                    </span>
                </span>
            </div>
        </div>
        <div 
            class="w-full md:min-w-[50%] flex justify-center items-center perspective-[1200px]">
            <div 
                class="animated-card relative w-[90vw] max-w-[300px] sm:w-[300px] h-[400px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl group mx-auto">
                <img
                    src="https://res.cloudinary.com/dgbeqlbhx/image/upload/v1756829107/IMG_3819_ewhamp.webp"
                    alt="Nim Vatna"
                    class="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:blur-sm"
                />
            <div 
                class="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 animate-shine pointer-events-none"></div>
            <div
                class="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 sm:px-6 py-1 sm:py-2 rounded-xl bg-gray-200/30 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex flex-col items-center gap-y-2 transition-transform duration-500 group-hover:-translate-y-2 w-[85%] sm:w-auto">
                <span 
                    class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
                    {{ t('name') }}
                </span>
                <span 
                    class="text-gray-600 dark:text-gray-300 text-center"
                    :class="translations.language === 'en' ? 'text-xs sm:text-sm' : 'text-[0.75rem] md:text-sm'">
                    {{ t('position') }}
                </span>
                <button 
                    class=" uppercase bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-md hover:scale-105 transition-transform w-full sm:w-auto"
                    :class="translations.language === 'en' ? 'text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5' : 'text-[0.65rem] sm:text-[0.70rem] px-3 py-2 sm:px-4 sm:py-2'">
                    {{ t('contactme') }}
                </button>
            </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    useDownloadFile 
} from '@/composables/useDownloadFile'
import { 
    Facebook,
    GithubLogo,
    Telegram,
    Linkedin,
    Download,
    LongArrow,
    Location,
    Chat,
    Experience,
    Dot
} from '../icons';
import {
    useCustomColorMode
} from "~/composables/useCustomColorMode";
import { 
    useTranslation 
} from '@/composables/useTranslation';

const { t,translations } = useTranslation();
const mySocialMedia = [
    {
        id: 1,
        name: "Facebook",
        link: "https://www.facebook.com/nim.vatna.7",
        icon: Facebook
    },
    {
        id: 2,
        name: "Linkedin",
        link: "https://www.facebook.com/nim.vatna.7",
        icon: Linkedin
    },
    {
        id: 3,
        name: "Github",
        link: "https://www.facebook.com/nim.vatna.7",
        icon: GithubLogo
    },
    {
        id: 4,
        name: "Telegram",
        link: "https://www.facebook.com/nim.vatna.7",
        icon: Telegram
    },
]

const { darkColor } = useCustomColorMode();
const { downloadFile } = useDownloadFile();

const openTelegram = (): void => {
    const username: string = 'vatna'; 
    window.location.href = `tg://resolve?domain=${username}`;
    setTimeout((): void => {
        window.open(`https://t.me/${username}`, '_blank');
    }, 400);
}

const downloadPdf = (): void => {
    const pdfUrl = '/films/NimVatnaResume.pdf'
    downloadFile(pdfUrl, 'NimVatnaResume.pdf')
}

</script>

<style scoped>
@keyframes slide-up {
    0% { transform: translateY(0); opacity: 1; }
    45% { transform: translateY(-100%); opacity: 0; }
    55% { transform: translateY(100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

@keyframes slide-down {
    0% { transform: translateY(100%); opacity: 0; }
    45% { transform: translateY(0); opacity: 1; }
    55% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100%); opacity: 0; }
}

.animate-up {
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    animation: slide-up 5s infinite;
}

.animate-down {
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    animation: slide-down 5s infinite;
}
.animated-card {
  transform-style: preserve-3d;
  animation: floatRotate 6s ease-in-out infinite alternate;
}

@keyframes floatRotate {
  0% {
    transform: rotateY(0deg) rotateX(0deg) translateY(0px);
  }
  50% {
    transform: rotateY(15deg) rotateX(10deg) translateY(-10px);
  }
  100% {
    transform: rotateY(0deg) rotateX(0deg) translateY(0px);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(300%) rotate(45deg);
  }
}

.animate-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
  animation: shine 2.5s linear infinite;
}
</style>