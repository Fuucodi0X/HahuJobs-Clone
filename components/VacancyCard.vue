<template>
    <div class="px-8 py-4 ring-1 ring-gray-200 dark:ring-primary-light rounded-lg shadow-lg">
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 text-primary">
                <span class="aspect-square object-contain overflow-hidden w-4">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                    </svg>
                </span>
                <h3 class="font-bold text-xs">About the vacancy</h3>
            </div>

            <div class="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-2 gap-y-4 text-sm">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Title:</span>
                    <p>UI/UX designer</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Sector:</span>
                    <p>Creative Arts</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Max Education Level:</span>
                    <p>Bachelor</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Enterprise:</span>
                    <p>HahuJobs Corporation</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">SubDivision:</span>
                    <p>UI/UX designer</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Gender Priority:</span>
                    <p>---</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">City:</span>
                    <p>Addis Ababa</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Salary:</span>
                    <p>6000/Mon</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Skils:</span>
                    <p>Designer</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Field of Study:</span>
                    <p>---</p>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-semibold">Min Education Level:</span>
                    <p>---</p>
                </div>
            </div>
        </div>
    </div>
</template>