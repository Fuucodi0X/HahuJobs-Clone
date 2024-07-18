<template>
    <div class="flex flex-col items-center w-[200px] h-[200px] justify-center rounded-lg shadow-md hover:shadow-2xl dark:hover:shadow-primary bg-white dark:bg-dark-secondary">
        <div class="flex flex-col items-center gap-2">
            <img class="w-24" :src="imgSrc" alt="">
            <h2 class="text-primary text-center text-[16px] leading-4 w-32 font-bold">{{ catagory }}</h2>
        </div>
        <p class="truncate text-sm mt-1">{{ openPosition }} Open positions</p>
    </div>
</template>

<script setup>
const props = defineProps({
    imgSrc: {
        type: String,
        default: "https://hahu.jobs/images/sectors_big/natural-science.svg"
    },
    catagory: {
        type: String,
        default: "Natural Science"
    },
    openPosition: {
        type: Number,
        default: 33
    }
})
</script>