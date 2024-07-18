<template>
    <div id="home" class="flex flex-col gap-4 items-center">
        <h1 class="text-4xl text-primary-text dark:text-white text-center font-[800]">All Ethiopian Jobs in One Place.</h1>
        <p class="font-bold text-primary-text dark:text-white text-center">Find career opportunities in Ethiopia</p>
        <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-1">
            <input class="rounded-lg sm:rounded-r-none px-10 py-2.5 border font-bold duration-700 w-[350px] focus:w-[400px] focus:border-none hover:ring-1 hover:ring-primary" placeholder="Job title, city or keyword..." type="text">
            <div class="flex items-center gap-4 px-6 py-2.5 bg-primary rounded-l-lg rounded-r-lg sm:rounded-l-none">
                <img class="w-5" src="/public/search.svg" alt="">
                <p class="text-white font-bold">Find Job</p>
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-12 sm:gap-24 mt-4">
            <div class="flex flex-col items-center">
                <h1 class="text-primary text-2xl font-bold">946</h1>
                <p class="text-primary-text dark:text-white text-sm font-bold">Jobs</p>
            </div>
            <div class="flex flex-col items-center">
                <h1 class="text-primary text-2xl font-bold">353</h1>
                <p class="text-primary-text dark:text-white text-sm font-bold">Companies</p>
            </div>
            <div class="flex flex-col items-center">
                <h1 class="text-primary text-2xl font-bold">14</h1>
                <p class="text-primary-text dark:text-white text-sm font-bold">Sectors</p>
            </div>
        </div>
        <img src="https://cdn.hahu.jobs/public/aggregator/hahu.jobs/default-new-size.svg" alt="">
    </div>
</template>