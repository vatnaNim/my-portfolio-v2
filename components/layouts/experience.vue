<template>
    <div 
        class="w-full px-4 sm:px-6 lg:px-8">
        <div    
            class="text-center space-y-3">
            <p 
                class="text-sm sm:text-md font-semibold text-gray-400">
                {{ t('titleExp1') }}
            </p>
            <h2
                class="text-2xl sm:text-3xl font-medium tracking-wide text-red-700 dark:text-red-600 leading-7 sm:leading-none"
                :class="translations.language === 'en' ? 'logo' : ''">
                {{ t('titleExp2') }}
            </h2>
            <p 
                class="text-sm sm:text-md leading-5 sm:leading-none font-normal text-gray-500 dark:text-gray-400">
                {{ t('titleExp3') }}
            </p>
        </div>
        <div 
            class="pt-6 md:pt-8 space-y-3 md:space-y-0">
            <div
                class="flex flex-col space-y-8"
                v-for="(exp, idx) in exp"
                :key="idx">
                <article
                    class="w-full flex flex-col md:flex-row gap-4 group"
                    :class="idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'">
                    <div
                        class="flex-1 flex justify-center md:justify-start"
                        :class="idx % 2 === 1 ? 'md:justify-start' : 'md:justify-end'">
                        <ClientOnly>
                            <div
                                class="w-full max-w-md border border-gray-200 shadow-md rounded-md space-y-4 p-4
                                    transition duration-300 ease-in-out
                                    hover:shadow-xl hover:-translate-y-2
                                    hover:border-red-700 hover:bg-gray-50 dark:hover:bg-gray-900 aos-init aos-animate"
                                    :data-aos="idx % 2 === 0 ? 'fade-right' : 'fade-left'"
                                    data-aos-duration="1500"
                                    data-aos-once="false"
                                    data-aos-mirror="true"
                                    data-aos-anchor-placement="top-bottom">
                                <div 
                                    class="flex flex-col gap-y-1.5">
                                    <div 
                                        class="flex items-center gap-x-4">
                                        <div 
                                            class="flex items-center gap-x-2">
                                            <Building 
                                                class="w-5 h-5 text-red-700 dark:text-red-600" 
                                            />
                                            <span 
                                                class="font-semibold text-sm sm:text-md uppercase text-gray-500">
                                                {{ exp.companyName }}
                                            </span>
                                        </div>
                                        <u-badge
                                            :label="exp.shift"
                                            variant="soft"
                                            color="red"
                                            size="sm"
                                            :ui="{
                                                size: {
                                                    sm: 'text-[0.65rem] sm:text-xs'
                                                }
                                            }"
                                        />
                                    </div>
                                    <h3 
                                        class="text-base sm:text-lg font-semibold capitalize leading-5 sm:leading-tight">
                                        {{ exp.position }}
                                    </h3>
                                    <div 
                                        class="flex flex-wrap gap-x-3">
                                        <div
                                            class="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-600 gap-x-0.5">
                                            <Date 
                                                class="w-4 h-4" 
                                            />
                                            <span>
                                                {{ exp.workTime }}
                                            </span>
                                        </div>
                                        <div
                                            class="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-600 gap-x-0.5">
                                            <Location 
                                                class="w-4 h-4" 
                                            />
                                            <span>
                                                {{ exp.companyLocation }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p 
                                    class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    {{ exp.description || '' }}
                                </p>
                                <div 
                                    class="space-y-2">
                                    <div
                                        class="flex items-center gap-x-2 text-xs sm:text-sm text-black dark:text-white">
                                        <Thunder
                                            class="w-4 h-4 text-red-700 dark:text-red-600"
                                        />
                                        <span class="font-medium">
                                            {{ t('keyAchi') }}
                                        </span>
                                    </div>
                                    <div 
                                        class="space-y-0 sm:space-y-0.5">
                                        <ul
                                            v-for="(achievement, i) in exp.keyAchievements"
                                            :key="i"
                                            class="list-disc list-inside text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">
                                            <li>{{ achievement }}</li>
                                        </ul>
                                    </div>
                                </div> 
                                <div 
                                    class="flex flex-col gap-y-2">
                                    <div 
                                        class="flex items-center gap-x-2">
                                        <div
                                            class="text-xs sm:text-sm flex items-center text-red-700 dark:text-red-600 underline underline-offset-2 cursor-pointer hover:text-gray-600 hover:dark:text-gray-400"
                                            @click="toggleModal(exp.id, true)">
                                            {{ t('viewMoreBtn') }} →
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ClientOnly>
                    </div>
                    <UDivider
                        orientation="vertical"
                        size="md"
                        class="hidden md:flex">
                        <Star
                            class="w-6 h-6 group-hover:text-red-700 dark:group-hover:text-red-600"
                        />
                    </UDivider>
                    <div class="flex-1 hidden md:block"></div>
                </article>
            </div>
        </div>
        <p 
            class="text-sm sm:text-md font-semibold text-gray-400 text-center pt-4">
            {{ t('footer') }}
        </p>
        <ExpModal
            v-if="modalId !== null"
            :open="openModal"
            :logo="exp.find(e => e.id === modalId)?.companyLogo"
            :logo-title="exp.find(e => e.id === modalId)?.companyName"
            :location="exp.find(e => e.id === modalId)?.companyLocation"
            :working-time="exp.find(e => e.id === modalId)?.workTime"
            :image-url="exp.find(e => e.id === modalId)?.certificates"
            :key-achievements="exp.find(e => e.id === modalId)?.keyAchievements"
            :responsible="exp.find(e => e.id === modalId)?.responsible"
            @toggle="toggleModal"
        />
  </div>
</template>

<script setup lang="ts">
import { 
    Building,
    Date,
    Location,
    Thunder,
    Star
} from '../icons';
import { 
    ExpModal 
} from '../ui';
import { 
    Gtech,
    Pedro,
    Kiwi
} from '~/assets/images';
import { 
    useTranslation 
} from '@/composables/useTranslation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { t, translations } = useTranslation();

const exp = computed(() =>  [
    {
        id: 1, 
        companyName: "GTech Cambodia",
        shift: t('shift'),
        companyLogo: Gtech,
        position: t('gtechPosition'),
        workTime: t('gtechWorkTime'),
        companyLocation: t('gtechlocation'),
        description: t('gtechDescription'),
        keyAchievements: [
            t('gtechAchi1'),
            t('gtechAchi2'),
            t('gtechAchi3')
        ],
        responsible: [
           t('gtechResp1'),
           t('gtechResp2'),
           t('gtechResp3'),
           t('gtechResp4'),
           t('gtechResp5'),
           t('gtechResp6'),
           t('gtechResp7'),
           t('gtechResp8'),
        ],
        certificates: "https://res.cloudinary.com/doleyeec5/image/upload/v1757004280/gtech_tyy9qo.jpg",
    },
    {
        id: 2, 
        companyName: "Pedro",
        companyLogo: Pedro,
        shift: t('shift'),
        position: t('pedroPosition'),
        workTime: t('pedroWorkTime'),
        companyLocation: t('pedrolocation'),
        description: t('pedroDescription'),
        keyAchievements: [
            t('pedroAchi1'),
            t('pedroAchi2'),
            t('pedroAchi3')
        ],
        responsible: [
          t('pedroResp1'),
          t('pedroResp2'),
          t('pedroResp3'),
          t('pedroResp4'),
          t('pedroResp5'),
          t('pedroResp6'),
          t('pedroResp7'),
        ],
        certificates: "https://res.cloudinary.com/doleyeec5/image/upload/v1757004280/aeonmall_h6xcne.jpg",
    },
    {
        id: 3, 
        companyName: "Kiwi Mart",
        companyLogo: Kiwi,
        shift: t('shift'),
        position: t('kiwiPosition'),
        workTime: t('kiwiWorkTime'),
        companyLocation: t('kiwilocation'),
        description: "",
        keyAchievements: [
            t('kiwiAchi1'),
            t('kiwiAchi2')
        ],
        responsible: [
            t('kiwiResp1'),
            t('kiwiResp2'),
            t('kiwiResp3'),
            t('kiwiResp4'),
        ],
        certificates: "",
    },
])

const openModal: Ref<boolean> = ref<boolean>(false);
const modalId: Ref<any | null> = ref<number| null>(null);

const toggleModal = (id: any | null, state: boolean): void => {
    modalId.value = id;
    openModal.value = state;
}

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