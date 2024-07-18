<template>
    <div class="flex flex-col gap-12">
        <VacancyCard/>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div class="flex flex-col gap-2">
            <h1 class="text-sm font-bold">Summary:</h1>
            <div class="flex bg-white dark:bg-dark-secondary px-10 py-4 justify-around">
                <label @click="toggelTabs(0)" :class="{'text-primary border-b-2 border-primary' : showTabs[0]}" class="py-2 px-2 sm:px-8 cursor-pointer">
                    English
                </label>
                <label @click="toggelTabs(1)" :class="{'text-primary border-b-2 border-primary' : showTabs[1]}" class="py-2 px-2 sm:px-8 cursor-pointer">
                    አማረኝ
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
const showTabs = ref([true,false])
function toggelTabs(num) {
    showTabs.value = [false,false]
    showTabs.value[num] = !showTabs.value[num]
}
</script>