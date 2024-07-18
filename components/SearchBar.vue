<template>
    <div class="sticky top-[66px] sm:top-[75px] text-sm flex gap-2 items-center px-1 py-5 bg-secondary dark:bg-dark-primary dark:bg-opacity-50 bg-opacity-50 backdrop-blur">
        <div class="w-2/5">
            <input class="w-full py-2 px-14 dark:bg-[#444F60] dark:border-none border rounded-l-lg" type="text" placeholder="Search"/>
        </div>
        <div class="flex w-3/5 gap-2">
            <select class="w-full dark:bg-[#444F60] text-center text-[#A3AAB5] dark:text-white border dark:border-none py-2">
                <option class="" value="" disabled selected hidden>Select Position</option>
                <option class="text-black">A</option>
                <option class="text-black">B</option>
                <option class="text-black">C</option>
            </select>
            <select class="w-full text-center text-[#A3AAB5] dark:text-white dark:bg-[#444F60] dark:border-none border py-2">
                <option class="" value="" disabled selected hidden>Select Sector</option>
                <option class="text-black">A</option>
                <option class="text-black">B</option>
                <option class="text-black">C</option>
            </select>
            <select class="w-full text-center text-[#A3AAB5] dark:text-white dark:bg-[#444F60] dark:border-none border py-2 rounded-r-lg">
                <option class="" value="" disabled selected hidden>Select City</option>
                <option class="text-black">A</option>
                <option class="text-black">B</option>
                <option class="text-black">C</option>
            </select>
        </div>
    </div>
</template>