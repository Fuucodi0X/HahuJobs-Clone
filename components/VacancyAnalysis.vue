<template>
    <div class="flex flex-col px-4 py-6 gap-2 ring-1 ring-gray-200 dark:ring-primary-light rounded-lg">
        <!-- Header of ISCO -->
        <div class="flex justify-between">
            <div class="flex items-center gap-2">
                <img class="w-4" src="https://hahu.jobs/icons/analysis/skill.svg" alt="">
                <h3 class="text-xs font-bold text-primary">Vacancy analysis</h3>
            </div>
            <img class="w-8" src="https://hahu.jobs/icons/o-net.png" alt="">
        </div>

        <!-- Body -->
        <div class="flex flex-col gap-8">
            <div class="flex flex-col">
                <p class="text-[#3B82F6] text-sm font-semibold">Adult Basic Education, Adult Secondary Education, and English as a Second Language Instructors (25-3011.00)</p>
                <p class="text-sm font-light">
                    Also Called: Academic Specialist, Adult Basic Education Instructor (ABE Instructor), Adult Basic Education Teacher (ABE Teacher)
                </p>
            </div>
           
           <div class="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
                <ScrollCard/>
                <ScrollCard/>
                <ScrollCard/>
           </div>

           <p class="text-sm font-light">
            The O*NET Program is the nation's primary source of occupational information. Valid data are essential to understanding the rapidly changing nature of work and how it impacts the workforce and U.S. economy. From this information, applications are developed to facilitate the development and maintenance of a skilled workforce.
           </p>
        </div>
    </div>
</template>