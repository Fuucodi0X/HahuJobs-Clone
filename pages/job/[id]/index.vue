<template>
    <div class="flex flex-col xl:flex-row w-full my-4 gap-6 bg-secondary  dark:bg-dark-primary">
        <div class="flex flex-col xl:w-9/12 rounded-md">
            <HeroJobCard/>

            <div class="flex justify-between bg-white dark:bg-dark-secondary px-6 sm:px-10 py-4">
                <label @click="toggelTabs(0)" :class="{'text-primary border-b-2 border-primary' : showTabs[0]}" class="py-2 px-4 sm:px-8 cursor-pointer">
                    Post
                </label>
                <label @click="toggelTabs(1)" :class="{'text-primary border-b-2 border-primary' : showTabs[1]}" class="py-2 px-4 sm:px-8 cursor-pointer">
                    KPI
                </label>
                <label @click="toggelTabs(2)" :class="{'text-primary border-b-2 border-primary' : showTabs[2]}" class="py-2 px-4 sm:px-8 cursor-pointer">
                    Analysis
                </label>
            </div>
            
            <div class="flex flex-col bg-white dark:bg-dark-secondary px-6 sm:px-10 py-4 rounded-b-lg">
                <Post :class="{'hidden' : !showTabs[0]}"/>
                <KPI :class="{'hidden' : !showTabs[1]}"/>
                <Analysis :class="{'hidden' : !showTabs[2]}"/>
            </div>

        </div>
        <div class="flex flex-col gap-2 xl:w-3/12">
            <h2 class="font-black my-1">Related Jobs</h2>
            <div class="sm:grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] flex flex-col gap-2">
                <MiniJobCard/>
                <MiniJobCard/>
                <MiniJobCard/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'jobs'
})
const showTabs = ref([true,false,false])
function toggelTabs(num) {
    showTabs.value = [false,false,false]
    showTabs.value[num] = !showTabs.value[num]
}
</script>