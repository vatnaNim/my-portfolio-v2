<template>
    <div
        class="w-full px-4 md:px-8 py-10 space-y-4 lg:space-y-16">
        <div 
            class="flex justify-center flex-col items-center gap-y-3">
            <h2
                class="text-2xl sm:text-3xl font-medium tracking-wide text-red-700 dark:text-red-600 leading-7 sm:leading-none"
                :class="translations.language === 'en'? 'logo ' : ''">
                {{ t('contactTitle1') }}
            </h2>
            <p
                class="max-w-[500px] text-sm sm:text-md leading-5 sm:leading-normal font-normal text-gray-500 dark:text-gray-400 text-center">
                {{ t('contactTitle2') }}
            </p>
        </div>
        <div 
            class="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 gap-x-2 lg:gap-x-4">
            <ClientOnly>
                <div 
                    class="flex flex-col gap-y-2 w-full lg:w-[50%] aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="false"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-bottom">
                    <div 
                        class="flex justify-center items-center">
                        <UTabs 
                            v-model="selectedTab"
                            :items="tabTtems"
                            
                            :ui="{
                                list: {
                                    width: 'w-52 sm:w-64',
                                    background: 'bg-gray-300 dark:bg-gray-800',
                                    padding: 'px-0.5 py-0.5 sm:py-1 sm:px-1 ',
                                    tab: {
                                        active: 'bg-gray-900 dark:bg-gray-300 text-white dark:text-black',
                                        size: 'text-[0.70rem] sm:text-sm',
                                    }
                                },
                            }">
                            <template #icon="{ item, selected }">
                                <UIcon 
                                    :name="item.icon" 
                                    class="w-4 h-4 flex-shrink-0 me-2" 
                                    :class="[selected && 'text-red-700 dark:text-red-600']" />
                            </template>
                        </UTabs>
                    </div>
                    <Transition
                        appear
                        mode="out-in"
                        enter-active-class="transition duration-500 ease-out transform"
                        enter-from-class="opacity-0 scale-75"
                        enter-to-class="opacity-100 scale-105"
                        leave-active-class="transition duration-400 ease-in transform"
                        leave-from-class="opacity-100 scale-105"
                        leave-to-class="opacity-0 scale-75">
                        <div 
                            v-if="selectedTab === 0"
                            class="border shadow-md rounded-md w-full px-4 py-3 space-y-3"
                            :class="isSubmitting?'bg-gray-200 dark:bg-gray-800' : 'bg-white dark:bg-gray-900' ">
                            <div 
                                class="space-y-4">
                                <div 
                                    class="leading-6 sm:leading-3">
                                    <h4
                                        class="text-md sm:text-lg font-semibold capitalize "
                                        :class="isSubmitting? 'text-red-700 dark:text-red-600' : 'text-black dark:text-white'">
                                        {{ isSubmitting? t('sendingEmail') : t('sendEmail') }}
                                    </h4>
                                    <p
                                        class="text-xs text-gray-500">
                                        {{ t('sendingpara') }}
                                    </p>
                                </div>
                                <UForm 
                                    :validate="validate" 
                                    :state="state" 
                                    class="space-y-2 md:space-y-3" 
                                    @submit="onSubmit">
                                    <div 
                                        class="w-full flex gap-x-1 sm:gap-x-2">
                                        <u-form-group
                                            :label="t('nameCon')"
                                            size="md"
                                            :ui="{
                                                base: 'font-semibold',
                                                size: {
                                                    'md': 'text-xs sm:text-sm'
                                                }
                                            }"
                                            required
                                            class="shrink w-28 xs:w-40 sm:w-64">
                                            <u-input
                                                type="text"
                                                name="fullname"
                                                v-model="state.name"
                                                :placeholder="t('namePlaceholder')"
                                                size="sm"
                                                :disabled="isSubmitting"
                                                variant="outline"
                                                :color="isSubmitting? 'red' : 'gray'"
                                                required
                                                :ui="{
                                                    color:{
                                                        gray:{
                                                            outline: 'focus:ring-2 focus:ring-red-700 dark:focus:ring-red-600'
                                                        }
                                                    },
                                                    size: {
                                                        'sm': 'text-xs sm:text-sm'
                                                    }
                                                }"
                                                class="caret-red-700"
                                            />
                                        </u-form-group>
                                        <u-form-group
                                            :label="t('email')"
                                            size="md"
                                            :ui="{
                                                base: 'font-semibold',
                                                size: {
                                                    'md': 'text-xs sm:text-sm'
                                                }
                                            }"
                                            required
                                            class="flex-1">
                                            <u-input
                                                name="email"
                                                type="email"
                                                :disabled="isSubmitting"
                                                v-model="state.email"
                                                placeholder="your@gmail.com"
                                                size="sm"
                                                variant="outline"
                                                :color="isSubmitting? 'red' : 'gray'"
                                                required
                                                :ui="{
                                                    color:{
                                                        gray:{
                                                            outline: 'focus:ring-2 focus:ring-red-700 dark:focus:ring-red-600'
                                                        }
                                                    },
                                                    size: {
                                                        'sm': 'text-xs sm:text-sm'
                                                    }
                                                }"
                                                class="caret-red-700"
                                            />
                                        </u-form-group>
                                    </div>
                                    <u-form-group
                                        :label="t('subject')"
                                        size="md"
                                        :ui="{
                                            base: 'font-semibold',
                                            size: {
                                                'md': 'text-xs sm:text-sm'
                                            }
                                        }"
                                        required
                                        class="flex-1">
                                        <u-input
                                            name="subject"
                                            v-model="state.subject"
                                            :disabled="isSubmitting"
                                            type="text"
                                            :placeholder="t('subjectPlaceholder')"
                                            size="sm"
                                            variant="outline"
                                            color="gray"
                                            required
                                            :ui="{
                                                color:{
                                                    gray:{
                                                        outline: 'focus:ring-2 focus:ring-red-700 dark:focus:ring-red-600'
                                                    }
                                                },
                                                size: {
                                                    'sm': 'text-xs sm:text-sm'
                                                }
                                            }"
                                            class="caret-red-700"
                                        />
                                    </u-form-group>
                                    <u-form-group
                                        :label="t('message')"
                                        size="md"
                                            :ui="{
                                                base: 'font-semibold',
                                                size: {
                                                    'md': 'text-xs sm:text-sm'
                                                },
                                            }"
                                        required
                                        class="flex-1">
                                        <u-textarea
                                            name="message"
                                            :placeholder="t('messagePlaceholder')"
                                            :disabled="isSubmitting"
                                            :rows="3"
                                            color="gray"
                                            size="md"
                                            variant="outline"
                                            v-model="state.message"
                                            :ui="{
                                                color:{
                                                    gray:{
                                                        outline: 'focus:ring-2 focus:ring-red-700 dark:focus:ring-red-600'
                                                    }
                                                },
                                                size: {
                                                    'md': 'text-xs sm:text-sm'
                                                }
                                            }"
                                            class="caret-red-700"
                                        />
                                    </u-form-group>
                                    <u-button
                                        size="md"
                                        color="black"
                                        type="submit"
                                        :ui="{
                                            size: {
                                                'md': 'text-xs sm:text-sm'
                                            }
                                        }"
                                        block
                                        :disabled="isSubmitting">
                                        <div class="flex items-center gap-x-2">
                                            <span v-if="isSubmitting" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            <Send v-else class="w-4 h-4" />
                                            {{ isSubmitting ? t('sending') : t('sendMessage') }}
                                        </div>
                                    </u-button>
                                </UForm>
                            </div>
                        </div>
                        <div 
                            v-else-if="selectedTab === 1"
                            class="border shadow-md rounded-md w-full px-4 py-3 space-y-2 flex flex-col items-center justify-center">
                            <h3 
                                class="text-md sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {{ t('supportMe') }}
                            </h3>
                            <p 
                                class="text-sm text-gray-500 dark:text-gray-400 text-center leading-4 sm:leading-normal ">
                                {{ t('contactTitle3') }}
                            </p>
                            <div 
                                class="w-64 overflow-hidden rounded-md shadow-md">

                                <div 
                                    v-if="qrLoading"
                                    class="flex justify-center items-center h-64">
                                    <Modal
                                        class="w-8 h-8 text-red-700 dark:text-red-600"
                                    />
                                </div>
                                <img 
                                    src="https://res.cloudinary.com/doleyeec5/image/upload/v1757004567/IMG_5829_xjlbpr.jpg" 
                                    alt="ABA QR CODE"
                                    class="w-full h-full"
                                    @load="handleQrLoad"    
                                />
                            </div>
                        </div>
                    </Transition>
                </div>
            </ClientOnly>
            <ClientOnly>
                <div 
                    class="w-full lg:w-[50%] flex flex-col gap-y-3 sm:gap-y-4 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="false"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-bottom">
                    <div 
                        class="border shadow-md rounded-md w-full px-4 py-3 space-y-3">
                        <div 
                            class="leading-6 sm:leading-4">
                            <h4
                                class="text-md sm:text-lg font-semibold text-black dark:text-white">
                                {{ t('getInTouch') }}
                            </h4>
                            <p
                                class="text-xs text-gray-500 dark:text-gray-400">
                                {{ t('getInTouch2') }}
                            </p>
                        </div>
                        <div 
                            class="flex flex-col">
                            <article
                                v-for="(item) in information"
                                :key="item.id"
                                class="group flex items-center justify-between gap-x-4 py-2 px-3 rounded-lg cursor-pointer
                                        transition-all duration-300
                                        hover:bg-gray-100 hover:shadow-md hover:scale-[1.01]
                                        dark:hover:bg-gray-800 dark:hover:shadow-lg"
                                        :href="item.link || 'javascript:void(0)'" 
                                        target="_blank"
                                        @click.prevent="handleClick(item)">
                                <div 
                                    class="flex items-center gap-x-3">
                                    <span>
                                        <component
                                            :is="item.icon"
                                            class="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300"
                                        />
                                    </span>
                                    <div 
                                        class="leading-5">
                                        <h4 class="text-md font-semibold text-gray-900 dark:text-gray-100">
                                            {{ item.mediaName }}
                                        </h4>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">
                                            {{ item.mediaDetail }}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <ForwardArrow
                                        class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300"
                                    />
                                </div>
                            </article>
                        </div>
                    </div>
                    <div 
                        class="border shadow-md rounded-md w-full px-4 py-3 space-y-4">
                        <div 
                            class="leading-6 sm:leading-4">
                            <h4
                                class="text-md sm:text-lg font-semibold capitalize text-black dark:text-white">
                                {{ t('connectWithMe') }}
                            </h4>
                            <p
                                class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-4 sm:leading-normal">
                                {{  t('connectWithMe2') }}
                            </p>
                        </div>
                        <div    
                            class="flex gap-x-3">
                            <u-tooltip
                                v-for="(item) in socalMedia"
                                :text="item.name"
                                :popper="{
                                    placement: 'top',
                                    arrow: true
                                }">
                                <a
                                    target="_blank"
                                    :href="item.link"
                                    class="flex items-center justify-center rounded-full transition-all duration-200
                                        hover:scale-110 "
                                    :class="[
                                        item.color,
                                        'dark:brightness-90 dark:hover:brightness-110'
                                    ]">
                                    <component 
                                        :is="item.icon" 
                                        class="w-5 h-5" 
                                    />
                                </a>
                            </u-tooltip>
                        </div>
                    </div>
                </div>
            </ClientOnly>
        </div>
        <MessageAlert
            :open="alert.open"
            :type="alert.type"
            :message="alert.message"
            @toggle="alert.open = $event"
        />
    </div>
</template>

<script lang="ts" setup>
import { 
    Email,
    Call,
    Linkedin,
    ForwardArrow,
    Facebook,
    Github,
    Telegram,
    Send
} from '../icons';
import {
    Modal
} from "@/components/loadings/";
import type { 
    FormError,
    FormSubmitEvent
} from '#ui/types'
import emailjs from 'emailjs-com'
import { 
    MessageAlert 
} from '../ui';
import { 
    useTranslation 
} from '@/composables/useTranslation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { 
    translations,
    t 
} = useTranslation();

const information = computed(() => [
    {
        id: 1,
        icon: Email,
        mediaName: t('email'),
        mediaDetail: "vatnagz@gmail.com",
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=vatnagz@gmail.com'
    },
    {
        id: 2,
        icon: Call,
        mediaName: t('tel'),
        mediaDetail: "+855 95 872 770",
        link: ''
    },
    {
        id: 3,
        icon: Telegram,
        mediaName: "Telegram",
        mediaDetail: "@vatna",
        link: ''
    }
]);

const socalMedia = [
    {
        id: 1,
        name: "Facebook",
        icon: Facebook,
        link: "https://www.facebook.com/share/1F7biHdp8V/?mibextid=wwXIfr",
        color: "text-blue-600 hover:text-blue-700",
    },
    {
        id: 2,
        name: "Linkedin",
        icon: Linkedin,
        link: "http://linkedin.com/in/vatna-nim-6a2a74359",
        color: "text-blue-600 hover:text-blue-700",
    },
    {
        id: 3,
        name: "Github",
        icon: Github,
        link: "https://github.com/vatnaNim",
        color: "text-gray-800 dark:text-white hover:text-black",
    },
    {
        id: 4,
        name: "Telegram",
        icon: Telegram,
        link: "https://t.me/vatna",
        color: "text-sky-500 hover:text-sky-600",
    },
];
const selectedTab: Ref<number> = ref<number>(0);
const qrLoading: Ref<boolean> = ref<boolean>(false);
const isSubmitting: Ref<boolean> = ref<boolean>(false);


const tabTtems = computed(() => [
    {
        label: t('email'),
        icon: 'material-symbols:alternate-email',
    },
    {
        label: t('supportMe'),
        icon: 'ic:twotone-favorite',
    }
])

const handleQrLoad = (): void => {
    qrLoading.value = false
}

const handleClick = (item: any): void => {
    if (item.mediaName === 'Email') {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${item.mediaDetail}`, '_blank');
    } 
    else if (item.mediaName === 'Phone') {
        window.location.href = `tel:${item.mediaDetail.replace(/\s+/g, '')}`;
    } 
    else if (item.mediaName === 'Telegram') {
        const username = item.mediaDetail.replace('@', '');
        window.location.href = `tg://resolve?domain=${username}`;
        setTimeout(() => {
        window.open(`https://t.me/${username}`, '_blank');
        }, 400);
    } 
    else if (item.link) {
        window.open(item.link, '_blank');
    }
};

const state = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const alert = reactive<{
    open: boolean,
    type: 'success' | 'info' | 'error' | undefined,
    message: string
}>({
    open: false,
    type: 'success',
    message: ''
});

const validate = (state: any): FormError[] => {
    const errors: FormError[] = []
    if (!state.name) errors.push({ path: 'name', message: 'Name is required' })
    if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
    if (!state.subject) errors.push({ path: 'subject', message: 'Subject is required' })
    if (!state.message) errors.push({ path: 'message', message: 'Message is required' })
    return errors
}

const onSubmit = async (event: FormSubmitEvent<any>): Promise<void> => {
    const { name, email, subject, message } = state;
    
    if (!name || !email || !subject || !message) {
        alert.message = 'Please fill all fields before submitting.';
        alert.type = 'error';
        alert.open = true;
        return;
    }

    isSubmitting.value = true;

    emailjs.send(
        'service_03h6aln',
        'template_g7ogjbn',
        { name, email, subject, message },
        '5ZSDGpWGncpXxY3dY'
    ).then((response) => {
        if (response.status === 200) {
            alert.message = 'Email sent successfully!';
            alert.type = 'success';
            alert.open = true;

            state.name = '';
            state.email = '';
            state.subject = '';
            state.message = '';
        } else {
            alert.message = 'Something went wrong.';
            alert.type = 'error';
            alert.open = true;
        }
    }).catch((error) => {
        alert.message = 'Failed to send email.';
        alert.type = 'error';
        alert.open = true;
        console.error(error);
    }).finally(() => {
        isSubmitting.value = false; 
    });
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

<style lang="scss" scoped>

</style>