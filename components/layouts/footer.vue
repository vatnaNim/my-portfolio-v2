<template>
    <div 
        class="flex flex-col px-6 sm:px-12 lg:px-40 py-8 bg-black dark:bg-gray-900 text-white mt-4 md:mt-10 lg:mt-14 space-y-6">
        <div 
            class="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 justify-between">
            <div 
                class="flex-1 space-y-4 text-center lg:text-left">
                <div>
                    <h3 
                        class="text-xl font-semibold uppercase">
                        {{ t('footerTitle1') }}
                    </h3>    
                    <p 
                        class="text-xs tracking-wide font-medium text-gray-400">
                        {{ t('footerTitle2') }}
                    </p>
                </div>
                <div 
                    class="space-y-2">
                    <h3 
                        class="text-md font-semibold">
                        {{ t('followme') }}:
                    </h3>  
                    <div 
                        class="flex justify-center lg:justify-start">
                        <ul 
                            v-for="(item, idx) in media" 
                            :key="idx">
                            <li>
                                <u-tooltip
                                    :text="item.name"
                                    :popper="{ placement: 'top', arrow: true }">
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
                class="flex-1 flex flex-col items-center gap-y-2 text-center">
                <h3 
                    class="text-md font-semibold">
                    {{ t('quickLink') }}
                </h3>  
                <ul 
                    class="flex flex-col gap-y-1">
                    <li 
                        v-for="(item, idx) in quickLinks" :key="idx"
                        class="text-gray-400 hover:text-red-700 dark:hover:text-red-600 text-sm hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer"
                        @click="handleClick(item.target ?? '')">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
            <div 
                class="flex-1 flex flex-col items-center lg:items-end gap-y-2 text-center lg:text-right">
                <h3 
                    class="text-md font-semibold">
                    {{ t('latestWork') }}
                </h3>  
                <ul 
                    class="space-y-2 flex flex-col items-center lg:items-end">
                    <li 
                        class="text-gray-400 text-sm hover:text-red-700 dark:hover:text-red-600">
                        <NuxtLink 
                            to="/">
                            <div 
                                class="flex items-center gap-x-2 hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer">
                                <span>{{ t('viewPortflio') }}</span>
                                <Open class="w-4 h-4"/>
                            </div>
                        </NuxtLink>
                    </li>
                    <li 
                        class="text-gray-400 hover:text-red-700 dark:hover:text-red-600 text-sm"
                        @click="downloadPdf">
                        <div 
                            class="flex items-center gap-x-2 hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer">
                            <span>
                                {{ t('downloadCv') }}
                            </span>
                            <Open 
                                class="w-4 h-4"
                            />
                        </div>
                    </li>
                    <li 
                        class="text-gray-400 hover:text-red-700 dark:hover:text-red-600 text-sm"
                        @click="callPhone">
                        <div 
                            class="flex items-center gap-x-2 hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer">
                            <span>
                                {{ t('callMe') }}
                            </span>
                            <Open 
                                class="w-4 h-4"
                            />
                        </div>
                    </li>
                    <li 
                        class="text-gray-400 hover:text-red-700 dark:hover:text-red-600 text-sm"
                        @click="openTelegram">
                        <div 
                            class="flex items-center gap-x-2 hover:underline hover:underline-offset-2 duration-300 ease-in-out cursor-pointer">
                            <span>{{ t('sayHelloTelegram') }}</span>
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
                }}">
                <Pray 
                    class="w-5 h-5 text-red-800 dark:text-red-800"
                />
        </u-divider>
        <div 
            class="text-xs text-gray-500 text-center">
            <p>
                © {{ t('2025') }} | 
                <span 
                    class="text-red-700 dark:text-red-600">{{ t('designFt') }}</span> 
                    {{ t('and') }} 
                    <span 
                    class="text-red-700 dark:text-red-600">{{ t('coded') }}</span> 
                    {{ t('byFt') }}
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
    Pray
} from '../icons';
import { 
    useDownloadFile 
} from '@/composables/useDownloadFile';
import { 
    useTranslation 
} from '@/composables/useTranslation';

const { translations, toggleLanguage, t } = useTranslation();
const props = defineProps({
  onScrollToSection: Function as PropType<(id: string) => void>
});

const handleClick = (id: string) => {
  props.onScrollToSection?.(id);
};

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
        target: '#home' 
    },
    { 
        name: t('about'),
        target: '#about' 
    },
    { 
        name: t('achievement'), 
        target: '#achievement' 
    },
    { 
        name: t('experience'), 
        target: '#experience' 
    },
    { 
        name: t('projects'), 
        target: '#project'
    },
    { 
        name: t('contact'),
        target: '#contact' 
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