<template>
    <div v-if="text" @click="toggelIsClicked" :class="{'bg-primary text-white': isCliked}" class="flex rounded-full py-1 px-2 gap-0.5 items-center border-2 border-primary cursor-pointer">
        <p>{{ text }}</p>
        <span v-if="isCliked" class="aspect-square object-contain overflow-hidden w-3">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
            </svg>
        </span>
        <span v-else class="aspect-square object-contain overflow-hidden w-3">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    text:{
        type:String,
    }
})
const isCliked = ref(false);
function toggelIsClicked() {
    isCliked.value = !isCliked.value
}
</script>