<template>
    <div
        class="px-8 py-4 flex flex-col justify-center items-center gap-y-4">
        <div 
            class="leading-4 text-center">
            <h2 
                class="text-3xl logo font-medium tracking-wide text-red-700 dark:text-red-600">
                My projects
            </h2>
            <p
                class="text-md font-semibold text-gray-500">
                Build for love, grow with passion.
            </p>
            <div
                class="w-64 border border-red-700 mt-5"></div>
        </div>
        <div 
            class="space-y-4 text-center">
            <h3 
                class="logo text-xl underline">
                Realtime Project
            </h3>
            <div 
                class="grid grid-cols-3 gap-x-4 gap-y-4">
                <ProjectCard
                    v-for="(item) in project.filter(item => item.category === 'real work project')"  
                    :key="item.id"
                    :image="item.mainImage"
                    :title="item.title"
                    :detail="item.detail"
                    :work-on="item.workingOn"  
                    :git-hub-link="item.gitHubLink"
                    :demo-image="item.demoImage"
                    :techology="item.techology" 
                />
            </div>
        </div>
        <div 
            class="space-y-4 text-center">
            <h3 
                class="logo text-xl underline">
                My Project
            </h3>
            <div 
                class="grid grid-cols-3 gap-x-4 gap-y-4">
                <ProjectCard
                    v-for="(item) in project.filter(item => item.category === 'personal project')"  
                    :key="item.id"
                    :image="item.mainImage"
                    :title="item.title"
                    :detail="item.detail"
                    :work-on="item.workingOn"  
                    :git-hub-link="item.gitHubLink"
                    :demo-image="item.demoImage"
                    :techology="item.techology" 
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    ProjectCard 
} from '~/components/ui';


const project = [
    {
        id: 1,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Personal Portofio V1.0',
        workingOn: 'frontend',
        category: 'personal project',
        detail: 'A modern, responsive personal portfolio website showcasing my skills, projects, and experience. Built using React with TypeScript, Tailwind CSS, and Material UI, it includes interactive sections, smooth animations, and a clean design to highlight my development work and contact information.',
        techology: [
            "React",
            "Javascript",
            "Typescript",
            "Material UI",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "https://vatna-portfolio.vercel.app/",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 2,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Robert Coffee',
        workingOn: 'frontend',
        detail: 'A front-end training project for a coffee shop website with a clean UI, responsive layout, and modular structure. This project was built for self-learning and runs locally using "npm run dev". It integrates with the "Robert Coffee (Back-End)" service for login authentication and uses REST APIs for data handling and communication.',
        category: 'personal project',
        techology: [
            "Nuxt",
            "Vue",
            "Tailwind",
            "Javascript",
            "Typescript",
            "NuxtUi",
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 3,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        category: 'personal project',
        title: 'Robert Coffee',
        workingOn: 'backend',
        detail: 'A backend training project built with Laravel and MySQL to support the Robert Coffee front-end. This project was developed as part of my self-learning journey to practice server-side development. It runs locally using XAMPP Control Panel v3.3.0 and provides RESTful APIs for authentication and data operations',
        techology: [
            "PhP",
            "Laraval",
            "Mysql",
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 4,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        category: 'personal project',
        title: 'starbuck',
        workingOn: 'Frontend',
        detail: 'A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site and helped me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and rendering static content effectively',
        techology: [
            "React",
            "Tailwind",
            "Javascript",
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 5,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        category: 'personal project',
        title: 'Skincare',
        workingOn: 'Frontend',
        detail: 'A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site, helping me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and static content rendering.Read',
        techology: [
            "Nuxt",
            "Vue",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 6,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Restaurants',
        workingOn: 'Frontend',
        category: 'personal project',
        detail: 'A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site, helping me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and static content rendering',
        techology: [
            "Nuxt",
            "Vue",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 7,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'photographer',
        category: 'personal project',
        workingOn: 'Frontend',
        detail: 'A Nuxt.js project created to deepen my understanding of modern frontend frameworks and REST API integration. The application showcases photographer profiles and testimonials, with dynamic data fetched from a backend API. It was developed as a self-learning exercise using TypeScript and Tailwind CSS. The project runs locally using "npm run dev" for the client and open one more terminal and run this command-line "npx json-server --watch static/data/photographyDb.json --port 3001" for the backend.',
        techology: [
            "Nuxt",
            "Vue",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 8,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: '',
        category: 'personal project',
        workingOn: 'Frontend',
        detail: 'A Nuxt.js project created to deepen my understanding of modern frontend frameworks and REST API integration. The application showcases photographer profiles and testimonials, with dynamic data fetched from a backend API. It was developed as a self-learning exercise using TypeScript and Tailwind CSS. The project runs locally using "npm run dev" for the client and open one more terminal and run this command-line "npx json-server --watch static/data/photographyDb.json --port 3001" for the backend.',
        techology: [
            "Nuxt",
            "Vue",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 9,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Gtech Admin',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: 'Developed the frontend interface of the Gtech Admin panel, implementing responsive UI components and integrating with backend APIs. Focused on debugging, improving user experience, and ensuring seamless interaction with the admin dashboard.',
        techology: [
            "Nuxt",
            "Vue",
            "Nuxt Ui",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 10,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Gtech Cambodia',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: 'Worked on maintaining and improving the Gtech Cambodia website. Implemented API integrations, optimized frontend performance, and ensured cross-browser compatibility. Focused on clean UI and smooth interactions for end-users.',
        techology: [
            "Next.js",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "https://www.gtechcambodia.com/",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 11,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'sambot sambot digital admin',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: 'Built the frontend dashboard for Sambot Digital Admin, creating interactive components and ensuring smooth integration with backend APIs. Focused on improving user experience and providing an efficient workflow for digital management.',
        techology: [
            "Nuxt.js",
            "vue",
            "Nuxt ui",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "https://www.gtechcambodia.com/",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 12,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'sambot sambot digital tamplate',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: 'Developed reusable frontend templates for the Sambot Digital Mail system. Followed UI guidelines to create a digital mail platform for customers to send invitations for ceremonies such as weddings, birthdays, and other events.',
        techology: [
            "Nuxt.js",
            "vue",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
    {
        id: 13,
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        title: 'Samphat Motobike Pos System',
        category: 'real work project',
        workingOn: 'Frontend',
        detail: 'Developed the frontend interface for the Samphat Motobike POS System. Implemented responsive layouts, interactive components, and smooth navigation to enhance the experience for staff managing orders and inventory.',
        techology: [
            "Nuxt.js",
            "Vue",
            "Nuxt ui",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        gitHubLink: "",
        domainLink: "https://www.gtechcambodia.com/",
        demoImage: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        ],
    },
]
</script>

<style scoped>

</style>