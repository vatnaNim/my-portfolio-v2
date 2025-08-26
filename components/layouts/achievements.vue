<template>
    <div
        class="w-full min-h-[90vh] px-8 space-y-4">
        <h2
            class="text-4xl logo tracking-wide font-medium text-red-700 dark:text-red-600">
            Education & Certifications
        </h2>
        <div
            class="flex gap-x-4 ">
            <div 
                class="w-[50%] ">
                <h3
                    class="flex gap-x-4 items-center">
                    <span
                        class="">
                        <Edcation
                            class="w-10 h-10 text-red-700 dark:text-red-600"
                        />
                    </span>
                    <span
                        class="text-2xl tracking-wide font-semibold uppercase">
                        Education
                    </span>
                </h3>
                <div 
                    class="flex flex-col gap-y-4 mt-3">
                    <div 
                        class="relative bg-gray-500/10 dark:bg-white/5 backdrop-blur-sm shadow-lg p-6  flex flex-1 flex-col sm:flex-row items-center gap-x-3 lg:gap-x-4 py-2 lg:py-3 px-3 lg:px-4 rounded-lg border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                        v-for="(item, idx) in edcationDb"
                        :key="idx">
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
                            class="w-20 h-20 rounded-full flex justify-center items-center text-white bg-gray-900">
                            <NoImage
                                class="w-6 h-6 object-fill"
                            />
                        </div>
                        <div>
                            <h3 class="font-medium text-lg">
                                {{ item.schoolName }}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                {{ item.year }}
                            </p>
                            <p className="text-sm text-gray-500 italic">
                                {{ item.degree }}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
            <div 
                class="w-[50%] border-l-2 border-gray-300 pl-4">
                <h3
                    class="flex gap-x-4 items-center">
                    <span
                        class="">
                        <Certificates
                            class="w-8 h-8 text-red-700 dark:text-red-600"
                        />
                    </span>
                    <span
                        class="text-2xl tracking-wide font-semibold uppercase">
                        Certificates
                    </span>
                </h3>
                <div 
                    class="flex flex-col gap-y-4 mt-4">
                    <div 
                        class="relative bg-gray-500/10 dark:bg-white/5 backdrop-blur-sm shadow-lg 
                            p-6 flex flex-col gap-y-0.5 rounded-lg border transition-all duration-300 
                            hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                            v-for="(cert, idx) in paginatedCertificates"
                            :key="idx">
                        <span 
                            class="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-yellow-400 
                                flex items-center justify-center shadow-md border border-gray-300 dark:border-gray-700">
                            🏅
                        </span>
                        <h4 
                            class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                            {{ cert.title }}
                        </h4>
                        <p 
                            class="text-sm text-gray-600 dark:text-gray-400">
                            {{ cert.detail }}
                        </p>
                        <p class="text-xs text-gray-500 italic">
                            {{ cert.year }}
                        </p>
                        <div 
                            v-if="cert.imageUrl"
                            class="mt-3 flex gap-x-2">
                            <u-button
                                size="sm"
                                color="black"
                                @click="toggleView(cert, true)">
                                <Eye 
                                    class="w-5 h-5"
                                />
                                <span 
                                    class="text-sm tracking-wide">
                                    View
                                </span>
                            </u-button>
                            <u-button
                                size="sm"
                                color="red"
                                :to="cert.imageUrl"
                                target="_blank">
                                <Pdf 
                                    class="w-5 h-5"
                                />
                                <span   
                                    class="text-sm tracking-wide">
                                    PDF
                                </span>
                            </u-button>
                        </div>
                    </div>
                    <div 
                        class="mt-2 flex justify-end">
                        <UPagination
                            v-model="page"
                            :total="certificates.length"
                            :page-count="pageSize"
                            :ui="{ 
                                rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md',
                                default: {
                                    activeButton: {
                                        color: 'black'
                                    },
                                    inactiveButton: {
                                        color: 'black'
                                    }
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
            :title="selectedCert?.title"
            :image-url="selectedCert?.imageUrl"
            :detail="selectedCert?.detail"
            :year="selectedCert?.year"
            @toggle="toggleView"
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


const page: Ref<number> = ref<number>(1);
const openViewmodal: Ref<boolean> = ref(false);
const selectedCert: Ref<any> = ref(null);

const edcationDb = [
    {
        id: 1,
        schoolName: "Royal University of Phnom Penh",
        degree: "Bachelor of Computer Science (G-25)",
        year: "Graduated 2022 – 2025",
        logo: Rupp
    },
    {
        id: 2, 
        schoolName: "Toul Tumpong High School, Phnom Penh",
        degree: "High School",
        year: "Bacll 2019 – 2020",
        logo: '',
    },
    {
        id: 3, 
        schoolName: "Beltei International School, Phnom Penh",
        degree: "General English Languages (ESL 12)",
        year: "Graduated 2017 – 2020",
        logo: Beltei,
    }
]

const certificates = [
    {
        id: 1,
        title: "Royal University of Phnom Penh",
        detail: "Bachelor of Computer Science ",
        year: "2025",
        link: ""
    },
    {
        id: 2,
        title: "Toul Tumpong High School, Phnom Penh",
        detail: "Bacll",
        year: " 2019 – 2020",
        imageUrl: "https://res.cloudinary.com/dgbeqlbhx/image/upload/v1756130708/BACLL_urrdcm.jpg"
    },
    {
        id: 3,
        title: "Beltei International School, Phnom Penh",
        detail: "General English Languages (ESL 12)",
        year: "2020",
        imageUrl: "https://res.cloudinary.com/dgbeqlbhx/image/upload/v1756130909/ESL_awas3i.jpg"
    },
    {
        id: 4,
        title: "Beltei International School, Phnom Penh",
        detail: "General English Languages (ESL 6)",
        year: "2017",
        imageUrl: "https://res.cloudinary.com/dgbeqlbhx/image/upload/v1756157462/IMG_5820_kywq3w.webp"
    },
    {
        id: 5,
        title: "Computer Vocational Training Organization",
        detail: "Miscrosoft Officer",
        year: "2022",
        imageUrl: "https://res.cloudinary.com/dgbeqlbhx/image/upload/v1756130941/computer_kpxr13.jpg"
    },
];

const pageSize: number = 3;
const paginatedCertificates = computed(() => {
    const start = (page.value - 1) * pageSize;
    return certificates.slice(start, start + pageSize)
});

const toggleView = (cert: any, state: boolean): void => {
    selectedCert.value = cert;
    openViewmodal.value = state;
};
</script>

<style scoped>

</style>