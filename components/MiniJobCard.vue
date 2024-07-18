<template>
    <!-- Card hagger -->
    <NuxtLink to="/job/id" class="flex flex-col hover:ring-1 hover:ring-primary px-4 py-2 gap-6 rounded-md shadow-sm bg-white dark:bg-dark-secondary border dark:border-none">
        <!-- Card Header -->
        <div class="flex justify-end text-xs font-light">
            <div class="flex gap-2 text-primary items-center">
                <span class="flex items-center aspect-square object-contain overflow-hidden w-5">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path>
                    </svg>
                </span>
                <p>2 Days Left</p>
            </div>
        </div>

        <!-- Job Details container -->
        <div class="flex flex-col gap-4">
            <!--  -->
            <div class="flex flex-col text-sm">
                <!-- Company Details -->
                <div class="flex items-center gap-4">
                    <img src="https://hahu.jobs/images/logo_150.png" alt="Logo" class="object-contain w-12">
                    <h2>HahuJobs</h2>
                </div>

                <!-- Job Details -->
                <div class="flex flex-col truncate gap-2">
                    <h1 class="font-bold my-1">UI/UX Designer</h1>
                    <!-- Job Metadata -->
                    <div class="flex flex-col gap-2 font-light">
                        <!-- Job catagory metadata -->
                        <div class="flex gap-2 items-center">
                            <span class="aspect-square object-contain overflow-hidden w-5">
                                <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                    <path d="M12.613 1.258a1.535 1.535 0 0 1 2.13 2.129l-1.905 2.856a8 8 0 0 1-3.56 2.939 4.011 4.011 0 0 0-2.46-2.46 8 8 0 0 1 2.94-3.56l2.855-1.904ZM5.5 8A2.5 2.5 0 0 0 3 10.5a.5.5 0 0 1-.7.459.75.75 0 0 0-.983 1A3.5 3.5 0 0 0 8 10.5 2.5 2.5 0 0 0 5.5 8Z"></path>
                                </svg>
                            </span>
                            <p>Creative Arts</p>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Tags -->
            <div class="flex truncate text-xs gap-1">
                <!-- Single tag -->
                <div class="flex rounded-full bg-primary items-center gap-2 px-2">
                   <span class="aspect-square object-contain overflow-hidden w-3">
                    <svg data-slot="icon" fill="currentColor" class="text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"></path>
                    </svg>
                   </span>
                   <p class="text-white">Full time</p>
                </div>

                <!-- Single tag -->
                <div class="flex rounded-full bg-primary items-center gap-2 px-2">
                   <span class="aspect-square object-contain overflow-hidden w-3">
                        <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-white">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                            <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z"></path>
                        </svg>
                   </span>
                   <p class="text-white">0 yrs</p>
                </div>

                <!-- Single tag -->
                <div class="flex rounded-full bg-primary items-center gap-2 px-2">
                   <span class="aspect-square object-contain overflow-hidden w-3">
                        <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-white">
                            <path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z"></path>
                        </svg>
                   </span>
                   <p class="text-white">1 position</p>
                </div>
            </div>
        </div>

        <!-- Card Header -->
        <div class="flex justify-between text-sm font-light">
            <div class="flex gap-2 items-center">
                <span class="flex items-center aspect-square object-contain overflow-hidden w-3">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                    </svg>
                </span>
                <p>Addis Ababa</p>
            </div>
            <div class="flex gap-2 items-center">
                <span class="flex items-center aspect-square object-contain overflow-hidden w-4">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                    </svg>
                </span>
                <p>2k</p>
            </div>
        </div>
    </NuxtLink>
</template>