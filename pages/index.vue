<!-- <template>
  <div class="p-4">
    <button @click="downloadPdf" class="px-4 py-2 bg-blue-500 text-white rounded">
      Download PDF
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDownloadFile } from '@/composables/useDownloadFile'

const { downloadFile } = useDownloadFile()

const downloadPdf = () => {
  // Full URL of your online PDF
  const pdfUrl = '/films/NimVatnaResume.pdf'
  downloadFile(pdfUrl, 'NimVatnaResume.pdf')
}
</script> -->

<!-- <template>
  <a href="#" @click.prevent="openTelegram" class="text-blue-500 hover:underline">
    Open Telegram
  </a>
</template>

<script setup lang="ts">
const openTelegram = (): void => {
    const username: string = 'vatna'; 
    window.location.href = `tg://resolve?domain=${username}`;
    setTimeout((): void => {
        window.open(`https://t.me/${username}`, '_blank');
    }, 400);
}
</script> -->

<!-- <template>
  <button @click="callPhone" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
    Call Now
  </button>
</template>

<script setup lang="ts">
const callPhone = () => {
    window.location.href = "tel:+85598727010";
};
</script> -->

<template>
    <div 
        class="">
        <Home/>
        <About/>
        <Achievement/>
        <!-- <experience/>
        <project/>
        <contact/>  -->
    </div>
</template>

<script setup lang="ts">
import { 
    Home,
    About,
    Achievement
} from '~/components/layouts';
</script>

<style scoped>

</style>

