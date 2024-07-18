<template>
    <!-- Card hagger -->
    <div class="flex flex-col px-2 sm:px-10 py-5 gap-4 rounded-t-lg shadow-sm bg-white dark:bg-dark-secondary">
        <!-- Job Details container -->
         <div class="flex flex-col sm:flex-row items-center gap-8 my-6">
             <!-- Company Details -->
             <div class="flex p-4 bg-secondary dark:bg-[#697280] rounded-lg">
                 <img src="https://hahu.jobs/images/logo_150.png" alt="Logo" class="object-contain w-32">
             </div>
             <!-- Job Details -->
             <div class="flex flex-col items-center sm:items-start truncate gap-2">
                 <h1 class="font-black text-xl">UI/UX Designer</h1>
                 <!-- Job Metadata -->
                 <div class="flex flex-col gap-2 text-sm">
                     <!-- Company name -->
                     <p class="text-secondary-text text-center sm:text-start">HahuJobs</p>
                     <!-- Multiple Metadata -->
                     <div class="flex gap-2">
                         <!-- Job catagory metadata -->
                         <div class="flex gap-2 items-center">
                             <span class="aspect-square object-contain overflow-hidden w-5">
                                 <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                     <path d="M12.613 1.258a1.535 1.535 0 0 1 2.13 2.129l-1.905 2.856a8 8 0 0 1-3.56 2.939 4.011 4.011 0 0 0-2.46-2.46 8 8 0 0 1 2.94-3.56l2.855-1.904ZM5.5 8A2.5 2.5 0 0 0 3 10.5a.5.5 0 0 1-.7.459.75.75 0 0 0-.983 1A3.5 3.5 0 0 0 8 10.5 2.5 2.5 0 0 0 5.5 8Z"></path>
                                 </svg>
                             </span>
                             <p>Creative Arts</p>
                         </div>

                         <!-- Catagory subdivision metadata -->
                         <div class="flex gap-2 items-center">
                             <span class="flex justify-center aspect-square object-contain overflow-hidden w-5">
                                 <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-primary" aria-hidden="true">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                                 </svg>
                             </span>
                             <p>UI/UX Designer</p>
                         </div>
                     </div>
                     <!-- Location metadata -->
                     <div class="flex gap-2 items-center">
                         <span class="aspect-square object-contain overflow-hidden w-5">
                             <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                 <path clip-rule="evenodd" fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                             </svg>
                         </span>
                         <p>Addis Ababa</p>
                     </div>
                     <!-- Job experience metadata -->
                     <div class="flex gap-2 items-center">
                         <span class="aspect-square object-contain overflow-hidden w-5">
                             <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                 <path clip-rule="evenodd" fill-rule="evenodd" d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                                 <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z"></path>
                             </svg>
                         </span>
                         <p>0 years</p>
                     </div>
                     <!-- Open position metadata -->
                     <div class="flex gap-2 items-center">
                         <span class="aspect-square object-contain overflow-hidden w-5">
                             <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                 <path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z"></path>
                             </svg>
                         </span>
                         <p>1 Position</p>
                     </div>
                     <!-- Job application lifetime metadata -->
                     <div class="flex gap-2 items-center">
                         <span class="aspect-square object-contain overflow-hidden w-5">
                             <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-primary" aria-hidden="true">
                                 <path clip-rule="evenodd" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"></path>
                             </svg>
                         </span>
                         <p>08/07/2024 - 13/07/2024</p>
                     </div>
                     <!-- View metadata -->
                     <div class="flex gap-2 items-center">
                         <span class="aspect-square object-contain overflow-hidden w-5">
                             <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="text-primary" aria-hidden="true">
                                 <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                 <path clip-rule="evenodd" fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                             </svg>
                         </span>
                         <p>2k</p>
                     </div>
                 </div>
             </div>
         </div>
         <div class="flex flex-wrap gap-2 justify-between">
             <!-- Tages section -->
             <div class="flex items-center truncate gap-2 sm:gap-4">
                 <!-- Single tag -->
                 <div class="flex rounded-full bg-primary items-center gap-2 px-1 sm:px-2 sm:py-1">
                     <span class="aspect-square object-contain overflow-hidden w-3">
                         <svg data-slot="icon" fill="currentColor" class="text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                             <path clip-rule="evenodd" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"></path>
                         </svg>
                     </span>
                     <p class="text-white text-sm">Full time</p>
                 </div>
                 <!-- Single tag -->
                 <div class="flex rounded-full bg-primary items-center gap-2 px-1 sm:px-2 sm:py-1">
                     <span class="aspect-square object-contain overflow-hidden w-3">
                         <svg data-slot="icon" fill="currentColor" class="text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                             <path d="M6.375 5.5h.875v1.75h-.875a.875.875 0 1 1 0-1.75ZM8.75 10.5V8.75h.875a.875.875 0 0 1 0 1.75H8.75Z"></path>
                             <path clip-rule="evenodd" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.25 3.75a.75.75 0 0 1 1.5 0V4h2.5a.75.75 0 0 1 0 1.5h-2.5v1.75h.875a2.375 2.375 0 1 1 0 4.75H8.75v.25a.75.75 0 0 1-1.5 0V12h-2.5a.75.75 0 0 1 0-1.5h2.5V8.75h-.875a2.375 2.375 0 1 1 0-4.75h.875v-.25Z"></path>
                         </svg>
                     </span>
                     <p class="text-white text-sm">Birr 6000/Mon</p>
                 </div>
             </div>
             <div class="flex items-center hover:bg-primary hover:text-white font-bold border-2 border-primary text-primary px-2 rounded-full item-center cursor-pointer gap-2 self-end">
                 <span class="aspect-square object-contain overflow-hidden w-3 sm:w-5">
                     <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                         <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z"></path>
                     </svg>
                 </span>
                 <p>Share</p>
             </div>
         </div>
    </div>
</template>

