<template>
    <div
        class="w-full  px-8">
        <div 
            class="text-center space-y-2">
            <p
                class="text-md font-semibold text-gray-500">
                Growth Journey
            </p>
            <h2
                class="text-3xl logo font-medium tracking-wide text-red-700 dark:text-red-600">
                Practical Experience, Real Impact
            </h2>
            <p
                class="text-md font-semibold text-gray-500 text-wrap">
                I focus on shipping value: scalable components, clean architecture, and measurable performance improvements.
            </p>
        </div>
        <div 
            class="pt-8">
            <div 
                class="flex flex-col"
                v-for="(exp, idx) in exp"
                :key="idx">
                <article 
                    :class="idx % 2 === 1 ? 'flex-row-reverse' : 'flex-row'"
                    class="w-full flex gap-x-4 group">
                    <div 
                        class=" flex-1 flex "
                        :class="idx %2 === 1? 'justify-start' : 'justify-end'">
                        <div 
                            class="w-[500px] border border-gray-200  shadow-md rounded-md space-y-4 p-4 
                            transition duration-300 ease-in-out
                            hover:shadow-xl hover:-translate-y-2 hover:border-red-700 hover:bg-gray-50 dark:hover:bg-gray-900">
                            <div 
                                class="flex flex-col gap-y-1.5">
                                <div 
                                    class="flex items-center gap-x-4">
                                    <div 
                                        class="flex items-center gap-x-2">
                                        <span>
                                            <Building
                                                class="w-5 h-5 text-red-700 dark:text-red-600"
                                            />
                                        </span>
                                        <span
                                            class="font-semibold text-md uppercase text-gray-500">
                                            {{ exp.companyName }}
                                        </span>
                                    </div>
                                    <u-badge
                                        :label="exp.shift"
                                        variant="soft"
                                        color="red"
                                    />
                                </div>
                                <h3
                                    class="text-lg font-semibold capitalize">
                                    {{ exp.position }}
                                </h3>
                                <div 
                                    class="flex gap-x-3">
                                    <div 
                                        class="flex items-center text-sm text-gray-500 gap-x-0.5">
                                        <span>
                                            <Date
                                                class="w-4 h-4"    
                                            />
                                        </span>
                                        <span>
                                            {{ exp.workTime }}
                                        </span>
                                    </div>
                                    <div 
                                        class="flex items-center text-sm text-gray-500 gap-x-0.5">
                                        <span>
                                            <Location
                                                class="w-4 h-4"    
                                            />
                                        </span>
                                        <span>
                                            {{ exp.companyLocation }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p
                                class="text-sm text-wrap text-gray-500 font-medium">
                                {{ exp.description || "" }}
                            </p>
                            <div 
                                class="space-y-2">
                                <div 
                                    class="flex items-center gap-x-2 text-sm text-black dark:text-white">
                                    <span>
                                        <Thunder
                                            class="w-4 h-4 text-red-700 dark:text-red-600"    
                                        />
                                    </span>
                                    <span
                                        class="font-medium">
                                        Key Achievements
                                    </span>
                                </div>
                                <ul
                                    class="list-disc list-inside text-gray-500 text-sm font-medium"
                                    v-for="(achievement, i) in exp.keyAchievements" 
                                    :key="i">
                                    <li>
                                        {{ achievement }}
                                    </li>
                                </ul>
                            </div>
                            <div 
                                class="flex flex-col gap-y-2">
                                <div 
                                    class="flex items-center gap-x-2">
                                    <div
                                        class="text-sm flex items-center text-red-700 dark:text-red-600 underline underline-offset-2 cursor-pointer hover:text-gray-600 hover:dark:text-gray-400"
                                        @click="toggleModal(exp.id, true)">
                                            View More Details →
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <UDivider 
                        orientation="vertical" 
                        size="md">
                    <Star
                        class="w-6 h-6 group-hover:text-red-700 dark:group-hover:text-red-600"
                    />
                </UDivider>
                    <div class=" flex-1"></div>
                </article>
            </div>
        </div>
        <p
            class="text-md font-semibold text-gray-500 text-center pt-4">
            Ready for new journey
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

const exp = [
    {
        id: 1, 
        companyName: "GTech Cambodia",
        shift: "Fulltime",
        companyLogo: Gtech,
        position: "Frontend Developer",
        workTime: "April 2024 – April 2025",
        companyLocation: "Phnom Penh, Cambodia",
        description: "Completed a 3-month internship and was promoted by the Senior Front-End Web Developer in recognition of strong performance and growth. Continued working in the role for one year.",
        keyAchievements: [
            "Built 3 frontend projects and maintained 2 applications",
            "Designed smooth and modern UI using Nuxt and Nuxt UI",
            "Integrated frontend components with REST APIs"
        ],
        responsible: [
            "Developed responsive user interfaces using HTML, CSS(Tailwind), JavaScript, TypeScript and Nuxt.js to ensure smooth performance across desktop, tablet and mobile device",
            "Gained experience maintaining the company website, including updating the UI and integrating API data.",
            "Optimized website performance by implementing lazy loading, reducing asset sizes, and improving load times using tools like Vite and Webpack.",
            "Integrated front-end components with RESTful APIs, ensuring seamless communication between client and sever using JSON data formats.",
            "Used Git for version control and collaborated with team members via GitHub to manage branches all pull requests efficiently.",
            "Tested and debugged API response, handle HTTP method (GET, POST, PUT, DELETE), and ensured smooth data flow to the frontend.",
            "Used tools like Postman, Hopscotch and browser developer tools to test back-end API endpoints and analyze request/response cycles for debugging and integration purposes.",
            "Leveraged Nuxt UI components to build dynamic user interfaces, ensuring consistent design and smooth functionality across different device."
        ],
        certificates: ""
    },
    {
        id: 2, 
        companyName: "Pedro",
        companyLogo: Pedro,
        shift: "Fulltime",
        position: "Visual Merchandiser Assistant & Customer Service Exclusive",
        workTime: "Feb 2022 – Jul 2023",
        companyLocation: "AEon mall, Phnom Penh",
        description: "Promoted to Visual Merchandiser Assistant after 6 months in Customer Service Exclusive by the Sale Supervisor and Visual Merchandising Manager in recognition of exceptional performance and creativity.",
        keyAchievements: [
            "Achieved Top 3 in store product display every month",
            "Consistently hit sales targets and ranked among top sales",
            "Participated in role-playing contest as a brand representative"
        ],
        responsible: [
            "Assisted in planning and executing store displays in line with brand guidelines and seasonal or promotional campaigns.",
            "Maintained store visuals to attract customers and boost product visibility.",
            "Managed store props and generated monthly reports.",
            "Collaborated with the merchandising team to implement visual strategies based on sales data, customer feedback, and market trends.",
            "Handled transactions, inquiries, and complaints with efficiency and professionalism.",
            "Built strong rapport with clients through product knowledge and personalized assistance.",
            "Consistently met sales and customer satisfaction targets."
        ],
        certificates: "https://res.cloudinary.com/dgbeqlbhx/image/upload/v1756131177/aeonmall_ekqqqr.jpg"
    },
    {
        id: 3, 
        companyName: "Kiwi Mart",
        companyLogo: Kiwi,
        shift: "Fulltime",
        position: "Cashier",
        workTime: "Jun 2020 – Jan 2021",
        companyLocation: "Phnom Penh, Cambodia",
        description: "",
        keyAchievements: [
            "Used POS systems to handle payments and checked receipts correctly.",
            "Helped train new staff members on the register and provided guidance on store procedures.",
        ],
        responsible: [
            "Provided fast, accurate, and friendly checkout service while handling various payment methods in a high-volume retail environment, and Reported daily revenue and ensured accurate cash drawer reconciliation with attention to detail and accuracy.",
            "Maintained a clean and organized checkout area, ensuring safety and neatness.",
            "Used POS systems to handle payments (Cash, Card or Vouchers) and checked receipts correctly.",
            "Helped train new staff members on the register and provided guidance on store procedures."
        ],
        certificates: ""
    },
]

const openModal: Ref<boolean> = ref<boolean>(false);
const modalId: Ref<any | null> = ref<number| null>(null);

const toggleModal = (id: any | null, state: boolean): void => {
    modalId.value = id;
    openModal.value = state;
}
</script>



<style scoped>

</style>