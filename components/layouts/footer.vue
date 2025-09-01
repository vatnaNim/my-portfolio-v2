<template>
    <div 
        class="flex flex-col px-40 py-8 bg-black dark:bg-gray-900 text-white mt-20 space-y-4">
        <div
            class="  flex gap-x-4 justify-start ">
            <div 
                class="flex-1 space-y-4">
                <span
                    class="space-y-0.5">
                    <h3
                        class="text-xl font-semibold uppercase">
                        {{ t('footerTitle1') }}
                    </h3>    
                    <p
                        class="text-xs tracking-wide flex flex-col font-medium text-gray-400">
                        <span>
                            {{ t('footerTitle2') }}
                        </span>
                    </p>
                </span>
                <div 
                    class="space-y-2">
                    <h3
                        class="text-md font-semibold">
                        {{ t('followme') }}:
                    </h3>  
                    <div 
                        class="flex">
                        <ul
                            v-for="(item, idx) in media"
                            :key="idx">
                            <li>
                                <u-tooltip
                                    :text="item.name"
                                    :popper="{
                                        placement: 'top',
                                        arrow: true,
                                    }">
                                    <u-button
                                        size="xs"
                                        variant="link"
                                        color="gray"
                                        :to="item.link"
                                        target="_blank">
                                        <component  
                                            class="w-6 h-5 hover:text-red-700 dark:hover:text-red-600 duration-300 ease-in-out"
                                            :is="item.logo"
                                        />
                                    </u-button>
                                </u-tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div 
                class="flex-1 flex flex-col  items-center gap-y-2">
                <h3
                    class="text-md font-semibold">
                    {{ t('quickLink') }}
                </h3>  
                <div 
                    class="flex flex-col justify-center text-center gap-y-1">
                    <ul
                        v-for="(item, idx) in quickLinks"
                        :key="idx">
                        <li
                            class="text-gray-400 hover:text-red-700 dark:hover:text-red-600 text-sm hover:underline hover:underline-offset-2 duration-300 ease-in-out">
                            <a 
                                :href="item.path">
                                <span>
                                    {{ item.name }}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div 
                class="flex-1 flex flex-col  items-end gap-y-2">
                <h3
                    class="text-md font-semibold">
                    Latest Work
                </h3>  
                <ul
                    class="space-y-2 text-end flex flex-col justify-center items-end">
                    <li
                        class="text-gray-400 text-sm  hover:text-red-700 dark:hover:text-red-600">
                        <a 
                            href="">
                            <div 
                                class="flex  items-center gap-x-2 hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer">
                                <span>
                                    {{ t('viewPortflio') }}
                                </span>
                                <Open
                                    class="w-4 h-4"
                                />
                            </div>
                        </a>
                    </li>
                    <li
                        class="text-gray-400 hover:text-red-700 dark:hover:text-red-600 text-sm "
                        @click="downloadPdf">
                        <div 
                            class="flex  items-center gap-x-2 hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer">
                            <span>
                                {{ t('downloadCv') }}
                            </span>
                            <Open
                                class="w-4 h-4"
                            />
                        </div>
                    </li>
                    <li
                        class="text-gray-400 hover:text-red-700 dark:hover:text-red-600 text-sm "
                        @click="callPhone">
                        <div 
                            class="flex  items-center gap-x-2 hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer">
                            <span>
                                {{ t('callMe') }}
                            </span>
                            <Open
                                class="w-4 h-4"
                            />
                        </div>
                    </li>
                    <li
                        class="text-gray-400 hover:text-red-700 dark:hover:text-red-600 text-sm "
                        @click="openTelegram">
                        <div 
                            class="flex  items-center gap-x-2 hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer">
                            <span>
                                {{ t('sayHelloTelegram') }}
                            </span>
                            <Open
                                class="w-4 h-4"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <u-divider
            size="xs"
            :ui="{
                border:{
                    base: 'border-gray-600 dark:border-gray-700'
                }
            }">
            <Pray
                class="w-5 h-5 text-red-800 dark:text-red-800"
            />
        </u-divider>
        <div 
            class="text-xs text-gray-500">
            <p>
                © {{ t('2025') }} | <span class="text-red-700 dark:text-red-600">{{ t('designFt') }}</span> {{ t('and') }} <span class="text-red-700 dark:text-red-600">{{ t('coded') }}</span> {{  t('byFt') }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    Facebook,
    Linkedin,
    Github,
    X,
    Open,
    Telegram,
    Call,
    Pray
} from '../icons';
import { 
    useDownloadFile 
} from '@/composables/useDownloadFile';
import { 
    useTranslation 
} from '@/composables/useTranslation';
const { translations, toggleLanguage, t } = useTranslation();

const media = [
    {
        id: 1, 
        name: "Facebook",
        logo: Facebook,
        link: ""
    },
    {
        id: 2, 
        name: "Linkedin",
        logo: Linkedin,
        link: ""
    },
    {
        id: 3, 
        name: "Github",
        logo: Github,
        link: "sd"
    },
    {
        id: 4, 
        name: "X",
        logo: X,
        link: ""
    }
]


const quickLinks = computed(() => [
    { 
        name: t('home'), 
        path: '/' 
    },
    { 
        name: t('about'),
        path: '/about' 
    },
    { 
        name: t('achievement'), 
        path: '/achievements' 
    },
    { 
        name: t('experience'), 
        path: '/experience' 
    },
    { 
        name: t('projects'), 
        path: '/projects' 
    },
    { 
        name: t('contact'),
        path: '/contact' 
    },
]);

const { downloadFile } = useDownloadFile()

const callPhone = (): void => {
    window.location.href = "tel:+85598727010";
};

const downloadPdf = (): void => {
    const pdfUrl = '/films/NimVatnaResume.pdf'
    downloadFile(pdfUrl, 'NimVatnaResume.pdf')
}

const openTelegram = (): void => {
    const username: string = 'vatna'; 
    window.location.href = `tg://resolve?domain=${username}`;
    setTimeout((): void => {
        window.open(`https://t.me/${username}`, '_blank');
    }, 400);
}
</script>

<style scoped>

</style>