<template>
    <div class="flex flex-col gap-4 items-center">
        <h1 class="text-4xl text-primary-text dark:text-white font-black">Career sectors</h1>
        <p class="text-primary-text dark:text-white">Based on the local labor market trend in Ethiopia we categorize our vacancies into fourteen sectors</p>

        <div class="flex flex-wrap gap-6 h-min items-center justify-center max-w-[1440px]">
            <SectorsCard/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/business.svg" catagory="Business" :open-position="329"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/creative-art.svg" catagory="Creative Arts" :open-position="18"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/education.svg" catagory="Education" :open-position="68"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/hospitality.svg" catagory="Hospitality" :open-position="9"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/low-and-medium-skilled-work.svg" catagory="Low and Medium Skilled Work" :open-position="329"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/low-and-medium-skilled-work.svg" catagory="Transportaion and Logistics" :open-position="32"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/engineering.svg" catagory="Engineering" :open-position="109"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/finance.svg" catagory="Finance" :open-position="140"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/legal-service.svg" catagory="Legal Service" :open-position="10"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/ict.svg" catagory="ICT" :open-position="37"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/health-care.svg" catagory="Health Care" :open-position="49"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/manufacturing.svg" catagory="Manufacturing" :open-position="3"/>
            <SectorsCard img-src="https://hahu.jobs/images/sectors_big/social-science.svg" catagory="Social Science" :open-position="72"/>
        </div>
    </div>
</template>