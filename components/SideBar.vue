<template>
    <div class="flex flex-col items-center dark:text-white w-full">
        <!-- Filter option button -->
        <button @click="toggleFilters" class="flex w-full items-center justify-between line-clamp-3 my-6 px-2">
            <span class="aspect-square object-contain overflow-hidden w-5">
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"></path>
                </svg>
            </span>
            <p class="font-black">Additional Filters</p>            
            <span v-if="showFilter" class="aspect-square object-contain overflow-hidden w-5">
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-primary" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path>
                </svg>
            </span>
            <span v-else class="aspect-square object-contain overflow-hidden w-5">
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-primary" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
            </span>
        </button>
        
        <!-- Filter Setting -->
        <div :class="{ hidden: !showFilter}" class="flex flex-col w-full">
           <!-- Experience filter -->
           <div class="flex flex-col py-6 px-2 gap-4 border-b">
               <div class="relative">
                    <div id="sliderTruck" class="w-full h-1.5 bg-secondary-dark rounded-xl"></div>
                    <input v-model="lowerSlider" type="range" min="0" max="10" >
                    <input v-model="upperSlider" type="range" min="0" max="10" >
                </div>
                <div class="flex justify-between items-center text-xs mt-2 ">
                    <p class="">0 - 3 years of experience</p>
                    <div class="flex gap-2 h-30 items-center ">
                        <input type="checkbox" class="" name="" id=""/>
                        <p class="">> 10</p>
                    </div>
                </div>
           </div>

           <!-- Salary type filter -->
           <div class="flex flex-col py-6 px-2 border-b">
                <h2 class="font-semibold">Type</h2>
                <div class="flex flex-wrap gap-2 items-center truncate text-xs mt-2">
                    <Pill text="Bid"/>
                    <Pill text="Full Time"/>
                    <Pill text="Contrat"/>
                    <Pill text="Internship"/>
                    <Pill text="Part Time"/>
                </div>
           </div>

           <!-- Region filter -->
           <div class="flex flex-col py-6 px-2">
                <h2 class="font-semibold">Region</h2>
                <EthiopiaMap class="mt-6"/>
           </div>
        </div>
    </div>
</template>

<style scoped>
input[type="range"]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;
}

input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    background-color: #009688;
    cursor: grab;
    pointer-events: auto;
    border-radius: 50%;
}

input[type="range"]:active::-webkit-slider-thumb{
    background-color: #009688;
    border: 3px solid #ffffff;
}
</style>

<script setup>
const showFilter = ref(true);
const lowerSlider = ref(0)
const upperSlider = ref(3)

onMounted(()=> {
    showFilter.value = 640 < window.screen.width
    watchEffect(updateSliderTruck)
})

function toggleFilters() {
    showFilter.value = !showFilter.value;
}
function updateSliderTruck() {
    if(import.meta.client){
        const sliderTruck = document.getElementById('sliderTruck')
    
        const lowerPercentage = (lowerSlider.value / 10) * 100
        const upperPercentage = (upperSlider.value / 10) * 100
     
        // console.log(sliderTruck)
        sliderTruck.style.background = `linear-gradient(to right, #D1D5DB, #D1D5DB ${lowerPercentage}%, #009688 ${lowerPercentage}%, #009688 ${upperPercentage}%, #D1D5DB ${upperPercentage}%, #D1D5DB)`;
    }
}

</script>