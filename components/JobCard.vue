<template>
    <!-- Card hagger -->
    <NuxtLink to="/job/id" class="flex flex-col hover:ring-1 hover:ring-primary px-4 py-4 gap-6 rounded-xl sm:rounded-md shadow-sm bg-white dark:bg-dark-secondary border dark:border-none">
        <!-- Card Header -->
        <div class="flex justify-between text-xs font-light">
            <div class="flex gap-2 text-primary items-center">
                <span class="flex items-center aspect-square object-contain overflow-hidden w-5">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path>
                    </svg>
                </span>
                <p>2 Days Left</p>
            </div>
            <div class="flex border-2 border-primary px-4 rounded-md py-1 gap-2 item-center cursor-pointer">
                <span class="flex items-center aspect-square object-contain overflow-hidden w-5">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path>
                    </svg>
                </span>
                <p class="dark:text-dark-text">Save</p>
            </div>
        </div>

        <!-- Job Details container -->
        <div class="flex flex-col gap-4">
            <!--  -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-8">
                <!-- Company Details -->
                <div class="flex flex-col items-center gap-4">
                    <img src="https://hahu.jobs/images/logo_150.png" alt="Logo" class="object-contain w-24">
                    <h2 class="dark:text-dark-text">HahuJobs</h2>
                </div>

                <!-- Job Details -->
                <div class="flex flex-col truncate gap-2">
                    <h1 class="font-bold self-center">UI/UX Designer</h1>
                    <!-- Job Metadata -->
                    <div class="flex flex-col gap-2 font-light dark:text-dark-text">
                        <!-- single metadata -->
                        <div class="flex gap-2 items-center">
                            <span class="aspect-square object-contain overflow-hidden w-5">
                                <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                    <path d="M12.613 1.258a1.535 1.535 0 0 1 2.13 2.129l-1.905 2.856a8 8 0 0 1-3.56 2.939 4.011 4.011 0 0 0-2.46-2.46 8 8 0 0 1 2.94-3.56l2.855-1.904ZM5.5 8A2.5 2.5 0 0 0 3 10.5a.5.5 0 0 1-.7.459.75.75 0 0 0-.983 1A3.5 3.5 0 0 0 8 10.5 2.5 2.5 0 0 0 5.5 8Z"></path>
                                </svg>
                            </span>
                            <p>Creative Arts</p>
                        </div>

                        <!-- single metadata -->
                        <div class="flex gap-2 items-center">
                            <span class="flex justify-center aspect-square object-contain overflow-hidden w-5">
                                <img src="https://hahu.jobs/icons/job/job-type.svg" alt="icon"/>
                            </span>
                            <p>UI/UX Designer</p>
                        </div>

                        <!-- single metadata -->
                        <div class="flex gap-2 items-center">
                            <span class="aspect-square object-contain overflow-hidden w-5">
                                <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                </svg>
                            </span>
                            <p>Addis Ababa</p>
                        </div>

                        <!-- single metadata -->
                        <div class="flex gap-2 items-center">
                            <span class="aspect-square object-contain overflow-hidden w-5">
                                <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                                    <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z"></path>
                                </svg>
                            </span>
                            <p>0 years</p>
                        </div>

                        <!-- single metadata -->
                        <div class="flex gap-2 items-center">
                            <span class="aspect-square object-contain overflow-hidden w-5">
                                <svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-primary">
                                    <path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z"></path>
                                </svg>
                            </span>
                            <p>1 Position</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tags -->
            <div class="flex truncate text-sm font-light gap-4">
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
                    <svg data-slot="icon" fill="currentColor" class="text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6.375 5.5h.875v1.75h-.875a.875.875 0 1 1 0-1.75ZM8.75 10.5V8.75h.875a.875.875 0 0 1 0 1.75H8.75Z"></path>
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.25 3.75a.75.75 0 0 1 1.5 0V4h2.5a.75.75 0 0 1 0 1.5h-2.5v1.75h.875a2.375 2.375 0 1 1 0 4.75H8.75v.25a.75.75 0 0 1-1.5 0V12h-2.5a.75.75 0 0 1 0-1.5h2.5V8.75h-.875a2.375 2.375 0 1 1 0-4.75h.875v-.25Z"></path>
                    </svg>
                   </span>
                   <p class="text-white">Birr 6000/Mon</p>
                </div>
            </div>

            <!-- Job description -->
            <div class="flex py-2 border-t">
                <p class="line-clamp-3 text-sm dark:text-dark-text">As a UI/UX Designer at HahuJobs, you will collaborate closely with the design team to create intuitive and user-friendly interfaces. Your responsibilities will include assisting in the creation of wireframes, prototypes, and mockups for new features and products, as well as conducting user research and usability testing to gather feedback and improve designs. You will work with developers to ensure the implementation of designs aligns with the vision, participate in brainstorming sessions, and contribute innovative design ideas. Additionally, you will maintain design consistency across all platforms and products while staying updated on the latest UI/UX trends and best practices.</p>
            </div>
        </div>

        <!-- Call to action -->
        <div class="flex justify-center text-sm gap-4">
            <div class="flex hover:bg-primary-light border-2 border-primary text-primary hover:text-black px-4 rounded-md py-1 item-center cursor-pointer">Read More</div>
            <div class="flex bg-primary hover:bg-primary-light border-2 border-primary text-white hover:text-black px-4 rounded-md py-1 item-center cursor-pointer">Apply Now</div>
        </div>

        <!-- Card Header -->
        <div class="flex justify-between text-sm font-light">
            <div class="flex gap-2 items-center">
                <span class="flex items-center aspect-square object-contain overflow-hidden w-5">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                    </svg>
                </span>
                <p>2k</p>
            </div>
            <div class="flex items-center">
                <span class="flex items-center aspect-square object-contain overflow-hidden w-5">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"></path>
                    </svg>
                </span>
            </div>
        </div>
    </NuxtLink>
</template>


