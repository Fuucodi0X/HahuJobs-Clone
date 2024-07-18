<template>
    <div class="flex flex-col gap-2 rounded-lg overflow-hidden hover:ring-1 hover:ring-primary bg-white dark:bg-dark-secondary">
        <img class="max-w-80" :src="imgSrc" alt="">
        <div class="flex flex-col max-w-72 gap-2 p-4 px-6">
            <div class="flex">
                <div class="text-xs px-2 py-1 rounded-full text-black bg-primary-light">{{ type }}</div>
            </div>
            <p class="text-sm font-semibold">{{ date }}</p>
            <h2 class="font-bold text-lg line-clamp-1">{{ title }}</h2>
            <p class="font-light text-sm line-clamp-4">{{ description }}</p>
            <div class="flex justify-center mt-4">
                <button class="flex gap-2 items-center px-4 py-1.5 bg-primary text-white rounded-md hover:bg-primary-light hover:text-black">
                    <span>Read Post</span>
                    <span class="aspect-square object-contain overflow-hidden w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imgSrc: {
        type: String,
        default: "https://res.cloudinary.com/db90fgpov/image/upload/v1671355648/HaHuJobs/Blogs/hahujobs-employment-center-launch_dxmzg5.jpg"
    },
    type:{
        type: String,
        default: "HahuJobs News"
    },
    date: {
        type: String,
        default: "7 December 2022"
    },
    title: {
        type: String,
        default: "HaHuJobs Addis Ababa City Administration"
    },
    description: {
        type: String,
        default: "We are launching our employment center services soon!! The establishment is intended to serve jobseekers via scheduled visits to offer them both self and assisted CV building as well as digital job matching services. We also provide vacancy standardization, recruitment, and automation services to employers with our dedicated enterprise digital service deployments. The center will serve two groups of HaHuJobs clients, job seekers, and employers of all levels. The center features four primary service sections, a walking customers service area, for both employers and job seekers, a training/assessment communicable room, vacancy data processing operation area, and a supervision area. Each of these spaces is manned with well-trained professionals to offer holistic end-to-end data-driven fully automated recruitment solutions."
    }
})
</script>