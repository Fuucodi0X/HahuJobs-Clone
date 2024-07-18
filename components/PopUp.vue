<template>
    <div class="flex fixed top-0 right-0 left-0 bottom-0 z-50 h-screen w-full overflow-auto bg-[rgba(217,221,225,.5)] py-4 px-2">
        <div class="flex flex-col w-full mx-4 px-8 py-10 gap-8 my-auto bg-white dark:bg-dark-secondary rounded-lg">
            <div class="flex items-center justify-between">
                <div class="flex gap-4">
                    <svg @click="emit('close')" class="p-1.5 rounded-lg cursor-pointer hover:bg-primary-light" xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <h3 class="font-bold">Job by Sector</h3>
                </div>
                <div @click="goToJobs" class="flex px-4 py-2 cursor-pointer rounded-lg border-2 border-primary gap-2 text-primary hover:bg-primary hover:text-white">
                    <p class="text-sm font-medium">View All</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </div>
            </div>

            <div class="sm:grid grid-cols-[repeat(auto-fill,minmax(282px,1fr))] flex flex-col gap-2">
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <img class="row-span-2 hidden xl:inline"src="https://hahu.jobs/images/mascot-half.svg" alt="">
                <PopUpCard/>
                <PopUpCard/>
                <PopUpCard/>
                <img class="row-span-2 xl:hidden"src="https://hahu.jobs/images/mascot-half.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['close'])
function goToJobs(){
    navigateTo('/job')
    emit('close')
}
</script>