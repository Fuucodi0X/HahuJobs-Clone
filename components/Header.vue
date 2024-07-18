<template>
    <div class="sticky w-full top-0 bg-opacity-50 backdrop-blur backdrop-filter z-10 bg-secondary dark:bg-dark-primary dark:bg-opacity-50 dark:text-white py-4">
        <div class="flex relative justify-between text-xl items-center px-8 md:px-12">
            <!-- HahuJobs Logo -->
            <div class="flex flex-col">
                <NuxtLink to="/">
                    <img src="/public/HahuLogo.svg" class="w-[105px] dark:hidden" alt="">
                    <img src="/public/HahuLogo-dark.svg" class="w-[105px] hidden dark:inline" alt="">
                </NuxtLink>
                <p class="text-xs text-secondary-text dark:text-white">Primary</p>
            </div>

            <!-- NavLinks and Sign in/ Log out -->
            <div class="flex gap-6 text-sm">
                <div class="hidden md:flex md:gap-6">
                    <button @click="toggleButton(0)" class="hover:text-primary py-3" :class="{'font-bold text-primary' : highlightButton[0]}">
                        <NuxtLink to="/">Home</NuxtLink>
                    </button>
                    <button @click="toggleButton(1)" class="hover:text-primary py-3" :class="{'font-bold text-primary' : highlightButton[1]}">
                        <NuxtLink to="/#about">About</NuxtLink>
                    </button>
                    <button @click="togglePopUp" class="hover:text-primary py-3" :class="{'font-bold text-primary' : highlightButton[2]}">
                        Jobs
                    </button>
                    <button @click="toggleButton(3)" class="hover:text-primary py-3" :class="{'font-bold text-primary' : highlightButton[3]}">
                        <NuxtLink to="/#vacancy">Post Vacancy</NuxtLink>
                    </button>
                </div>
                <button class="flex items-center" @click="toggleTheme">
                    <svg class="dark:hidden" xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 256 256">
                        <path fill="currentcolor" d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4" />
                    </svg>
                    <svg class="hidden text-white dark:inline" xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 256 256">
                        <path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" />
                    </svg>
                </button>
                <div class="hidden md:flex items-center gap-4">
                    <button class="px-2 py-1.5 bg-primary text-white hover:bg-primary-light duration-500 hover:text-black text-xs rounded-md">
                        Login
                    </button>
                    <p>Or</p>
                    <button class="px-2 py-1.5 bg-primary text-white hover:bg-primary-light duration-500 hover:text-black text-xs rounded-md">
                        SignUp
                    </button>
                </div>
                <button @click="toggleMenu" class="md:hidden">
                    <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.5 7.5h17M3.5 12h14m-14 4.5h17" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
        <div v-if="showMenu" class="flex flex-col md:gap-6 text-sm w-full" >
            <button @click="toggleButton(0)" class="hover:text-primary py-3" :class="{'font-bold text-primary' : highlightButton[0]}">
                Home
            </button>
            <button @click="toggleButton(1)" class="hover:text-primary py-3" :class="{'font-bold text-primary' : highlightButton[1]}">
                About
            </button>
            <button @click="togglePopUp" class="hover:text-primary py-3" :class="{'font-bold text-primary' : highlightButton[2]}">
                Jobs
            </button>
            <button @click="toggleButton(3)" class="hover:text-primary py-3" :class="{'font-bold text-primary' : highlightButton[3]}">
                Post Vacancy
            </button>
        </div>
        <PopUp @close="togglePopUp" v-if="showPopUp"/>
    </div>
</template>

<script setup>
const showMenu = ref(false)
const darkMode = ref(false)
const showPopUp = ref(false)

if(import.meta.client) {
    darkMode.value = localStorage.getItem('theme') == 'dark'
    darkMode.value ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
}

function togglePopUp() {
    showPopUp.value = !showPopUp.value
    showPopUp.value ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
}
function toggleTheme(){
    darkMode.value = !darkMode.value
    darkMode.value ? localStorage.setItem('theme','dark') : localStorage.setItem('theme','light')
    darkMode.value ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
}
const highlightButton = ref([true,false,false,false])
function toggleButton(num) {
    highlightButton.value = [false,false,false,false]
    highlightButton.value[num] = !highlightButton.value[num]
    switch (num+1) {
        case 1: 
            navigateTo('/')
            break;
        case 2:
            navigateTo('/#about')
        case 4:
            navigateTo('/#vacancy')
    }
}
function toggleMenu() {
    showMenu.value = !showMenu.value
}
</script>