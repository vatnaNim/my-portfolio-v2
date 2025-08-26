<template>
    <div
        class="w-full min-h-[90vh] px-8 flex ">
        <div 
            class="w-[50%] flex flex-col justify-start items-start gap-y-4 pt-8">
            <UBadge 
                variant="solid"
                color="gray"
                :ui="{ rounded: 'rounded-full' }">
                <Dot class="text-green-500 w-5 h-5"/>
                <span
                    class="text-gray-500 dark:text-gray-300">
                    Looking for new opportunities
                </span>
            </UBadge>
            <h2
                class="text-6xl font-semibold text-wrap">
                Hello there, I'm 
            </h2>
            <h2 class="text-5xl font-medium logo tracking-wider text-red-700 dark:text-red-600">
                Nim Vatna
            </h2>
            <div 
                class="flex items-center gap-2 text-3xl font-bold uppercase text-gray-500">
                <span>web developer &</span>
                <div 
                    class="relative h-10 w-32 overflow-hidden">
                    <span class="absolute animate-up">Nuxt</span>
                    <span class="absolute animate-down">React</span>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque reprehenderit suscipit at velit odit quo modi saepe itaque amet sint, consectetur voluptates repudiandae dolorem neque dolor veritatis labore quia et corrupti. Porro obcaecati optio atque architecto harum eum, esse accusamus, dolore quisquam at nam voluptatum consectetur, est explicabo odit quos?
            </p>
            <div 
                class="flex items-center gap-x-2">
                <span
                    class="text-md font-semibold">
                    Follow Me :
                </span>
                <div 
                    class="flex gap-x-2">
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
                                        class="w-4 h-4 text-white" />
                                </u-button>
                            </UTooltip>
                        </li>
                    </ul>
                </div>
            </div>
            <div 
                class="">
                <div class="flex items-center gap-x-2">
                    <u-tooltip
                        text="Hire Me"
                        :popper="{
                            placement: 'top', 
                            arrow: true }">
                        <u-button
                            size="md"
                            variant="solid"
                            :color="darkColor ? 'gray' : 'black'">
                            <LongArrow
                                class="w-6 h-6 text-gray-200"
                            />
                            <span
                                class="text-md font-semibold ">
                                Hire Me
                            </span>
                        </u-button>
                    </u-tooltip>
                    <u-tooltip
                        text="Download my CV"
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
                                    }
                                }"
                                class="group">
                                <download
                                    class="w-6 h-6 text-black dark:text-gray-300 group-hover:text-white dark:group-hover:text-black"
                                />
                                <span 
                                    class="text-md font-semibold">
                                    Download CV
                                </span>
                            </u-button>
                    </u-tooltip>
                    <span
                        class="text-sm ml-4 space-x-3">
                        <span class="text-gray-300">|</span> <span>2+ Projects completed</span>
                    </span>
                </div>
                
            </div>
            <div 
                class="flex justify-center items-center gap-x-4 pt-3">
                <span
                    class="flex items-center gap-x-1 text-gray-500">
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
                        class="text-xs font-medium ">
                        Phnom Penh, Cambodia
                    </span>
                </span>
                <span
                    class="flex items-center gap-x-1 text-gray-500">
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
                        Khmer and English Speaker
                    </span>
                </span>
                <span
                    class="flex items-center gap-x-1 text-gray-500">
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
                        1+ Years Experience
                    </span>
                </span>
            </div>
        </div>
        <div
            class="w-[50%] flex justify-center items-center">
            in progress
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
import {useCustomColorMode} from "~/composables/useCustomColorMode"

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

const downloadPdf = () => {
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
</style>