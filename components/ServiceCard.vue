<template>
    <div class="flex flex-col justify-between gap-6 px-8 py-6 rounded-lg hover:ring-1 hover:ring-primary bg-white dark:bg-dark-secondary">
        <img class="size-50 self-center" :src="imgSrc" alt="">
        <div class="flex flex-col gap-2">
            <h2 class="font-bold text-lg">{{ title }}</h2>
            <p class="max-w-60 font-light line-clamp-4">{{ description }}</p>
            <div class="flex justify-end mt-4">
                <button class="flex gap-2 items-center text-primary hover:text-primary-light">
                    <span>Explore More</span>
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
        default: "https://hahu.jobs/_vercel/image?url=/images/services/build_career_profile.svg&w=1536&q=100"
    },
    title: {
        type: String,
        default: "Build Career Profile"
    },
    description: {
        type: String,
        default: "Compose your career profile with context standards and identifiers to showcase your assessed competencies in the sector of your expertise.HaHuJobs offers you a simple, clear and easy to use platform to help you stand out from the crowd of candidates. The service enables you to compose your CV, help you evaluate your skills and apply for vacancies published on the HaHuJobs platforms."
    }
})
</script>