<template>
    <transition
        enter-active-class="transition transform duration-300"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition transform duration-300"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-2">
        <div
            v-if="open"
            :class="alertClass"
            class="fixed top-4 right-4 flex items-center justify-between p-4 rounded-md shadow-md w-80 z-50 overflow-hidden ">
            <div 
                class="flex items-center gap-2">
                <span 
                    v-if="type === 'success'">
                    <Success 
                        class="w-8 h-8 text-green-600 dark:text-green-600"
                    />
                </span>
                <span 
                    v-else-if="type === 'error'">
                    <Unsuccess
                        class="w-8 h-8 text-red-600 dark:text-red-600"
                    />
                </span>
                <span 
                    v-else-if="type === 'info'">
                    <Mailinfo
                        class="w-8 h-8 text-blue-600 dark:text-blue-600"
                    />
                </span>
                <p 
                    class="text-md uppercase font-medium text-black dark:text-white">
                    {{ message }}
                </p>
        </div>
        <u-button
            size="sm"
            color="red"
            variant="link"
            @click="closeAlert"
            :ui="{
                rounded: 'rounded-full'
            }">
            <Cancel
                class="w-4 h-5"
            />
        </u-button>
        <div class="absolute bottom-0 left-0 h-1 bg-red-700" :style="{ width: progress + '%' }"></div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { 
    Cancel,
    Mailinfo,
    Success,
    Unsuccess
} from '../icons';

const props = withDefaults(
    defineProps<{
        open: boolean
        type?: 'success' | 'error' | 'info'
        message: string
        duration?: number
    }>(),
    {
        open: false,
        type: 'info',
        duration: 3000
    }
)

const emits = defineEmits<{
    (e: 'toggle', state: boolean): void
}>()

const progress: Ref<number> = ref<number>(100);
let timer: ReturnType<typeof setInterval> | null = null

const startTimer = (): void => {
    progress.value = 100
    const step = 100 / (props.duration! / 50)
    timer = setInterval(() => {
        progress.value -= step
        if (progress.value <= 0) {
        closeAlert()
        }
    }, 50)
}

const closeAlert = (): void => {
    emits('toggle', false)
    if (timer) clearInterval(timer)
}

watch(
    () => props.open,
    (val: boolean): void => {
        if (val) startTimer()
        else if (timer) clearInterval(timer)
    }
);

const alertClass = computed(() => {
  switch (props.type) {
    case 'success':
        return 'bg-gray-300/50 dark:bg-green-200 backdrop-blur-sm'
    case 'error':
        return 'bg-gray-300/50 dark:bg-green-200 backdrop-blur-sm'
    case 'info':
    default:
        return 'bg-gray-300/50 dark:bg-green-200 backdrop-blur-sm'
  }
})
</script>

<style scoped>

div > div[style] {
    transition: width 0.05s linear;
}
</style>
