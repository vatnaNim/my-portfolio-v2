<template>
    <div
        class="w-full min-h-[90vh] flex gap-x-10 px-8">
        <div 
            class="w-[50%]">
            <h3
                class="text-md font-medium text-gray-500">
                about me
            </h3>
            <h2
                class="text-4xl logo tracking-wide font-medium text-red-700 dark:text-red-600">
                My Skills
            </h2>
            <p
                class="text-md font-normal text-gray-500 tracking-wide">
                Learning in modern web development.
            </p>
            <h3
                class="my-3 text-xl capitalize font-semibold tracking-normal flex gap-x-3 items-center">
                <Webpage
                    class="text-red-700 dark:text-red-600 w-5 h-5"    
                />
                <span>
                    languages & technology
                </span>
            </h3>
            <div 
                class="w-full flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
                <ul
                    v-for="(item, idx) in technology"
                    :key="idx"
                    class="flex  flex-wrap gap-x-2">
                    <li>
                        <div 
                            class="px-2 py-2 flex items-center border border-gray-300 dark:border-gray-600 gap-2 w-40 rounded-md shadow-sm"
                            :class="item.color">
                            <component
                                :is="item.icon"
                                class="w-5 h-5"
                            />
                            <span
                                class="uppercase font-medium tracking-wide">
                                {{ item.name }}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

            <h3
                class="my-3 text-xl capitalize font-semibold tracking-normal flex gap-x-3 items-center pt-4">
                <Tool
                    class="text-red-700 dark:text-red-600 w-5 h-5"    
                />
                <span>
                    Tools Supporter
                </span>
            </h3>

            <div 
                class="flex gap-x-4">
                <div 
                    class="w-56 h-52 border px-3 py-2 rounded-md shadow-md space-y-2">
                    <div 
                        class="flex justify-center items-center bg-blue-600 rounded-sm h-[30%]">
                        <Ui
                            class="text-white dark:text-black w-7 h-7"    
                        />
                    </div>
                    <h4
                        class="text-md font-bold">
                        UI Tools
                    </h4>
                    <div 
                        class="">
                        <div 
                            class="flex gap-x-2 items-center">
                            <Nuxtui
                                class="w-5 h-5"
                            />
                            <span
                                class="text-md ">
                                Nuxt UI
                            </span>
                        </div>
                        <div 
                            class="flex gap-x-2 items-center">
                            <Mui
                                class="w-5 h-5 text-blue-500"
                            />
                            <span
                                class="text-md ">
                                Mui
                            </span>
                        </div>
                    </div>
                </div>
                 <div 
                    class="w-56 h-52 border px-3 py-2 rounded-md shadow-md space-y-2">
                    <div 
                        class="flex justify-center items-center bg-blue-900 rounded-sm h-[30%]">
                        <DataIcon
                            class="text-white dark:text-black w-7 h-7"    
                        />
                    </div>
                    <h4
                        class="text-md font-bold">
                        Data Tools
                    </h4>
                    <div 
                        class="">
                        <div 
                            class="flex gap-x-2 items-center">
                            <Postman
                                class="w-5 h-5"
                            />
                            <span
                                class="text-md ">
                                Postman
                            </span>
                        </div>
                        <div 
                            class="flex gap-x-2 items-center">
                            <Hoppscotch
                                class="w-5 h-5 text-green-600"
                            />
                            <span
                                class="text-md ">
                                Hoppscotch
                            </span>
                        </div>
                    </div>
                </div>
                <div 
                    class="w-56 h-52 border px-3 py-2 rounded-md shadow-md space-y-2">
                    <div 
                        class="flex justify-center items-center bg-orange-700 rounded-sm h-[30%]">
                        <Tool
                            class="text-white dark:text-black w-7 h-7"    
                        />
                    </div>
                    <h4
                        class="text-md font-bold">
                        Version control
                    </h4>
                    <div>
                        <div 
                            class="flex gap-x-2 items-center">
                            <Git
                                class="w-5 h-5"
                            />
                            <span
                                class="text-md ">
                                Git
                            </span>
                        </div>
                        <div 
                            class="flex gap-x-2 items-center">
                            <Github
                                class="w-5 h-5"
                            />
                            <span
                                class="text-md ">
                                Mui
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            class="w-[50%] flex flex-col pt-10 gap-y-6">
            <h2
                class="text-wrap text-5xl tracking-normal leading-tight font-semibold flex flex-col">
                <span>
                    Designing with creativity,
                </span> 
                <span>
                    Building with purpose
                </span>
            </h2>
            <p
                class="font-medium text-md text-justify">
                I have been crafting frontend web development for one year, focusing on building responsive, user-friendly, and visually appealing interfaces. During this time, I have gained hands-on experience with modern tools like HTML, CSS (Tailwind), JavaScript, TypeScript, and Nuxt.js, allowing me to bring creative ideas into functional digital experiences. I am passionate about continuous learning and improving my skills to create impactful solutions that blend design and functionality.
            </p>
            <div
                class="grid grid-cols-2 gap-x-2 gap-y-2 mt-4">
                <ul
                    v-for="(item, idx) in information"
                    :key="idx">
                    <li>
                        <div 
                            class="flex gap-x-3">
                            <div
                                class="px-3 bg-gray-900 dark:bg-gray-800 border border-gray-600 flex items-center justify-center rounded-lg">
                                <component
                                    :is="item.icon"
                                    class="w-5 h-5 text-white"
                                />
                            </div>
                            <div
                                class="flex flex-col">
                                <span
                                    class="text-md font-semibold">
                                    {{ item.name }}
                                </span>
                                <span
                                    class="text-sm text-gray-500">
                                    {{ item.information }}
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Html as HtmlIcon,
    Css,
    Javascript,
    Typescript,
    React,
    Vue,
    Nuxt,
    Nuxtui,
    Mui,
    Php,
    Laravel,
    Mysql,
    Tailwind,
    Bootstrap,
    Node,
    Webpage,
    Tool,
    Ui,
    Data as DataIcon,
    Postman,
    Hoppscotch,
    Git,
    Github,
    Focus,
    Cake,
    Location,
    Call,
    Email
} from "@/components/icons";

const technology = [
    {
        id: 1,
        name: "Html",
        icon: HtmlIcon,
        color: "bg-gradient-to-r from-orange-600 to-yellow-600"
    },
    {
        id: 2,
        name: "Css",
        icon: Css,
        color: "bg-gradient-to-r from-blue-600 to-cyan-500"
    },
    {
        id: 3,
        name: "Javascript",
        icon: Javascript,
        color: "bg-gradient-to-r from-yellow-700 to-amber-600"
    },
    {
        id: 4,
        name: "Typescript",
        icon: Typescript,
        color: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
        id: 5,
        name: "React",
        icon: React,
        color: "bg-gradient-to-r from-cyan-600 to-blue-500"
    },
    {
        id: 6,
        name: "Vue",
        icon: Vue,
        color: "bg-gradient-to-r from-green-400 to-emerald-600"
    },
    {
        id: 7,
        name: "Nuxt",
        icon: Nuxt,
        color: "bg-gradient-to-r from-emerald-500 to-green-600"
    },
    {
        id: 8,
        name: "Bootstrap",
        icon: Bootstrap,
        color: "bg-gradient-to-r from-purple-500 to-indigo-600"
    },
    {
        id: 9,
        name: "Tailwind",
        icon: Tailwind,
        color: "bg-gradient-to-r from-sky-300 to-blue-500"
    },
    {
        id: 10,
        name: "Php",
        icon: Php,
        color: "bg-gradient-to-r from-indigo-500 to-indigo-700"
    },
    {
        id: 11,
        name: "Laravel",
        icon: Laravel,
        color: "bg-gradient-to-r from-red-600 to-pink-500"
    },
    {
        id: 12,
        name: "My Sql",
        icon: Mysql,
        color: "bg-gradient-to-r from-teal-600 to-cyan-500"
    }
];

const information = [
    {
        id: 1, 
        icon: Webpage,
        name: 'Field',
        information: 'Web Development'
    },
    {
        id: 2, 
        icon: Focus,
        name: 'Focus',
        information: 'Frontend Web Development'
    },
    {
        id: 3, 
        icon: Cake,
        name: 'Birthdate',
        information: '01-Dec-2002'
    },
    {
        id: 4, 
        icon: Location,
        name: 'Address',
        information: 'Phnom Penh, Cambodia'
    },
    {
        id: 5, 
        icon: Call,
        name: 'Tel',
        information: '(+855)95 872 770'
    },
    {
        id: 6, 
        icon: Email,
        name: 'Email',
        information: 'vatnagz@gmail.com'
    },
]

</script>

<style scoped>

</style>