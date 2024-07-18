<template>
    <div class="flex flex-col px-4 py-6 gap-2 ring-1 ring-gray-200 dark:ring-primary-light rounded-lg">
        <!-- Header of ISCO -->
        <div class="flex justify-between">
            <div class="flex items-center gap-2">
                <img class="w-4" src="https://hahu.jobs/icons/analysis/skill.svg" alt="">
                <h3 class="text-xs font-bold text-primary">Vacancy match with ISCO 08</h3>
            </div>
            <img class="w-8" src="https://hahu.jobs/icons/standard.png" alt="">
        </div>

        <!-- Body -->
        <div class="flex flex-col gap-8">
           <p class="text-[#3B82F6] text-sm font-semibold">Other Language Teachers / የሌልች የቋንቋዎች አስተማሪዎች (2353)</p>
           
           <div class="flex flex-col sm:flex-row gap-6">
                <ScrollCard class="sm:w-5/12"/>
                <Structure class="sm:w-7/12"/>
           </div>

           <p class="text-sm font-light">
            The International Standard Classification of Occupations (ISCO) is one of the main international classifications for which ILO is responsible. It belongs to the international family of economic and social classifications. ISCO is a tool for organizing jobs into a clearly defined set of groups according to the tasks and duties are undertaken in the job.
           </p>
        </div>
    </div>
</template>