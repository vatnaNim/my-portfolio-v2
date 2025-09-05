<template>
    <div
        class="w-full min-h-[90vh] px-4 md:px-8 space-y-3">
        <h2
            class="text-red-700 dark:text-red-600 lg:text-start text-center"
            :class="translations.language === 'en'? 'logo text-2xl sm:text-3xl lg:text-4xl font-medium  tracking-wide' : 'font-semibold text-2xl md:text-3xl'">
            {{ t('education') }} {{ t('&') }} {{ t('certifications') }}
        </h2>
        <div
            class="flex flex-col lg:flex-row gap-y-8 lg:gap-y-4 gap-x-0 lg:gap-x-4">
            <div 
                class="w-full lg:w-[50%] ">
                <h3
                    class="flex gap-x-2 lg:gap-x-3 items-center lg:justify-start justify-center">
                    <span>
                        <Edcation
                            class="w-7 h-7 sm:w-8 sm:h-8 text-red-700 dark:text-red-600"
                        />
                    </span>
                    <span
                        class="uppercase"
                        :class="translations.language === 'en'? 'text-xl md:text-2xl tracking-wide font-semibold' : 'text-xl sm:text-2xl md:text-3xl font-semibold '">
                        {{ t('education') }}
                    </span>
                </h3>
                <div 
                    class="flex flex-col gap-y-2 md:gap-y-3 mt-3">
                    <ClientOnly>
                        <div 
                            class="relative bg-gray-500/10 dark:bg-white/5 backdrop-blur-sm shadow-lg  flex flex-1 flex-col sm:flex-row items-center gap-y-1 sm:gap-x-3 lg:gap-x-4 py-3 px-3 lg:px-4 rounded-lg border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer aos-init aos-animate"
                            v-for="(item, idx) in edcationDb"
                            :key="idx"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1500"
                            data-aos-once="false"
                            data-aos-mirror="true">
                            <span 
                                class="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-white
                                    flex items-center justify-center shadow-md border border-gray-300 dark:border-gray-700">
                                <Dot class="text-red-700 dark:text-red-600"/>
                            </span>
                            <div 
                                v-if="item.logo"
                                class="w-16 h-16 lg:w-20 sm:h-20 flex-shrink-0">
                                <img
                                    :src="item.logo"
                                    :alt="item.schoolName"
                                    class="w-full h-full object-scale-down"
                                />
                            </div>
                            <div
                                v-else 
                                class="md:w-16 md:h-16 w-14 h-14   rounded-full flex justify-center items-center text-white bg-gray-900">
                                <NoImage
                                    class="sm:w-6 sm:h-6 w-5 h-5 object-fill"
                                />
                            </div>
                            <div
                                class="text-center sm:text-start">
                                <h3 class="font-medium text-md sm:text-lg">
                                    {{ item.schoolName }}
                                </h3>
                                <p class="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-1">
                                    {{ item.year }}
                                </p>
                                <p class="text-xs sm:text-sm text-gray-500 italic">
                                    {{ item.degree }}
                                </p>
                            </div>
                        </div>
                    </ClientOnly>
                </div>
            </div>
            <div 
                class="w-full lg:w-[50%] border-0 lg:border-l-2 border-gray-300 pl-0 lg:pl-4">
                <h3
                    class="flex gap-x-2 lg:gap-x-3 items-center lg:justify-start justify-center pb-3 lg:pb-0">
                    <span
                        class="">
                        <Certificates
                            class="w-7 h-7 sm:w-8 sm:h-8 text-red-700 dark:text-red-600"
                        />
                    </span>
                    <span
                        class="uppercase"
                        :class="translations.language === 'en'? 'text-xl md:text-2xl tracking-wide font-semibold' : 'text-xl sm:text-2xl md:text-3xl font-semibold '">
                        {{ t('certifications') }}
                    </span>
                </h3>
                <div 
                    class="flex flex-col gap-y-2 sm:gap-y-4 mt-2 sm:mt-4">
                    <ClientOnly>
                        <div 
                            class="relative bg-gray-500/10 dark:bg-white/5 backdrop-blur-sm shadow-lg 
                                px-5 py-3 flex flex-col  rounded-lg border transition-all duration-300 
                                hover:shadow-2xl hover:scale-[1.02] cursor-pointer items-center sm:items-start aos-init aos-animate"
                                v-for="(cert, idx) in paginatedCertificates"
                                :key="idx"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="1500"
                                data-aos-once="false"
                                data-aos-mirror="true">
                            <span 
                                class="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-yellow-400 
                                    flex items-center justify-center shadow-md border border-gray-300 dark:border-gray-700">
                                🏅
                            </span>
                            <h4 
                                class="text-center sm:text-start font-semibold text-md sm:text-lg text-gray-800 dark:text-gray-200 pb-1">
                                {{ cert.title }}
                            </h4>
                            <div 
                                class="text-center sm:text-start">
                                <p 
                                    class="text-xs sm:text-sm text-gray-600 dark:text-gray-500 ">
                                    {{ cert.detail }}
                                </p>
                                <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-500 italic">
                                    {{ cert.year }}
                                </p>
                            </div>
                            <div 
                                v-if="cert.imageUrl"
                                class="mt-1 sm:mt-2 flex gap-x-1 md:gap-x-2">
                                <u-button
                                    size="sm"
                                    color="black"
                                    :key="cert.id"
                                    @click="viewCert(cert)">
                                    <Eye 
                                        class="md:w-5 md:h-5 h-4 w-4"
                                    />
                                    <span 
                                        class="text-xs md:text-sm tracking-wide">
                                        {{ t('view') }}
                                    </span>
                                </u-button>
                                <u-button
                                    size="sm"
                                    color="red"
                                    :to="cert.imageUrl"
                                    target="_blank">
                                    <Pdf 
                                        class="md:w-5 md:h-5 h-4 w-4"
                                    />
                                    <span   
                                        class="text-xs md:text-sm tracking-wide">
                                        PDF
                                    </span>
                                </u-button>
                            </div>
                        </div>
                    </ClientOnly>
                    <div 
                        class="mt-2 flex justify-end">
                        <UPagination
                            v-model="page"
                            :total="certificates.length"
                            :page-count="pageSize"
                            :ui="{ 
                                rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md',
                                base: 'sm:text-md text-sm',
                                default: {
                                    activeButton: {
                                        class: 'bg-red-700 dark:bg-red-600 hover:bg-red-800 dark:hover:bg-red-700'
                                    },
                                    inactiveButton: {
                                        class: 'bg-white dark:bg-black'
                                    },
                                } 
                            }">
                            <template 
                                #prev="{ onClick, canGoPrev }">
                                <UTooltip 
                                    text="Previous Certificates">
                                    <UButton
                                        icon="material-symbols:arrow-forward-ios-rounded"
                                        color="black"
                                        :ui="{ rounded: 'rounded-full' }"
                                        class="rtl:[&_span:first-child]:rotate-180 me-2 rotate-180"
                                        :disabled="!canGoPrev"
                                        @click="onClick"
                                    />
                                </UTooltip>
                            </template>

                            <template 
                                #next="{ onClick, canGoNext }">
                                <UTooltip 
                                    text="Next Certificates">
                                    <UButton
                                        icon="material-symbols:arrow-forward-ios-rounded"
                                        color="black"
                                        :ui="{ rounded: 'rounded-full' }"
                                        class="rtl:[&_span:last-child]:rotate-180 ms-2"
                                        :disabled="!canGoNext"
                                        @click="onClick"
                                    />
                                </UTooltip>
                            </template>
                        </UPagination>
                    </div>
                </div>
            </div>
        </div>
        <ImageModal
            :open="openViewmodal"
            :selected="selectedCert"
            @update:open="openViewmodal = $event"
        />
    </div>
</template>

<script setup lang="ts">
import { 
    Edcation,
    Certificates,
    NoImage,
    ArrowDot,
    Dot,
    Eye,
    Pdf
} from '../icons';
import { 
    Beltei,
    Rupp 
} from '~/assets/images';
import { 
    ImageModal 
} from '../ui';
import { 
    useTranslation 
} from '@/composables/useTranslation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { translations, t } = useTranslation();

const page: Ref<number> = ref<number>(1);
const openViewmodal: Ref<boolean> = ref<boolean>(false);
const selectedCert: Ref<any> = ref<any>(null);

const edcationDb = computed(() => [
    {
        id: 1,
        schoolName: t('royelUniversity'),
        degree: t('royelmajor'),
        year: t('royelYear'),
        logo: Rupp
    },
    {
        id: 2, 
        schoolName: t('toulTompong'),
        degree: t('toulTompongmajor'),
        year: t('toulTompongYear'),
        logo: '',
    },
    {
        id: 3, 
        schoolName: t('beltei'),
        degree: t('belteimajor'),
        year: t('belteiYear'),
        logo: Beltei,
    }
]);

const certificates = computed(() => [
    {
        id: 1,
        title: t('royelUniversity'),
        detail: t('royelmajor'),
        year: t('royelCertYear'),
        imageUrl: "https://res.cloudinary.com/doleyeec5/image/upload/v1757004743/Sans_esgogema_i4dery.webp"
    },
    {
        id: 2,
        title: t('toulTompong'),
        detail: t('bacll'),
        year: t('highschoolYear'),
        imageUrl: "https://res.cloudinary.com/doleyeec5/image/upload/v1757004281/BACLL_fww7wj.jpg"
    },
    {
        id: 3,
        title: t('beltei'),
        detail: t('belteimajor'),
        year: t('year12'),
        imageUrl: "https://res.cloudinary.com/doleyeec5/image/upload/v1757004279/ESL_h00cue.jpg"
    },
    {
        id: 4,
        title:  t('beltei'),
        detail: t('belteimajor6'),
        year: t('year6'),
        imageUrl: "https://res.cloudinary.com/doleyeec5/image/upload/v1757004845/IMG_5820_a0hbc9.webp"
    },
    {
        id: 5,
        title: t('computerSchool'),
        detail: "Miscrosoft Officer",
        year: t('computerYear'),
        imageUrl: "https://res.cloudinary.com/doleyeec5/image/upload/v1757004281/computer_mdqxis.jpg"
    },
])

const pageSize: number = 3;
const paginatedCertificates = computed(() => {
    const start = (page.value - 1) * pageSize;
    return certificates.value.slice(start, start + pageSize)
});

const viewCert = (cert: any): void => {
    selectedCert.value = cert;
    openViewmodal.value = true; 
};

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