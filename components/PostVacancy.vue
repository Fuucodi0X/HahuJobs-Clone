<template>
    <div id="vacancy" class="flex flex-col items-center gap-16">
        <div class="flex flex-col gap-4 items-center">
            <h1 class="text-4xl text-primary-text dark:text-white font-black">Post vacancy</h1>
            <p class="text-primary-text dark:text-white text-center max-w-[800px]">HaHuJobs offers dedicated enterprise cloud services for a full human resource management platform with an affordable price package. Posting vacancy is completely free, and only requires to follow the below listed steps.</p>
            <div class="flex flex-wrap mt-8 justify-center gap-16">
                <div class="flex flex-col max-w-96 items-center gap-3">
                    <p class="p-2 w-10 text-center text-white bg-primary-light rounded-full">1</p>
                    <h3 class="font-semibold text-sm">Receive</h3>
                    <p class="text-center font-light text-sm">You contact us through one of our outlets with the details of your vacancy. You can click the button below to review ways to share your vacancy and review the required information we need to publish your vacancy on all our outlets.</p>
                </div>
                <div class="flex flex-col max-w-96 items-center gap-3">
                    <p class="p-2 w-10 text-center text-white bg-primary-light rounded-full">2</p>
                    <h3 class="font-semibold text-sm">Validate</h3>
                    <p class="text-center font-light text-sm">You contact us through one of our outlets with the details of your vacancy. Our service officers will receive the details from your organization via the channel you communicated it in. They will review the details provided to validate all required information is available and build validate the legitimacy of the vacancy.</p>
                </div>
                <div class="flex flex-col max-w-96 items-center gap-3">
                    <p class="p-2 w-10 text-center text-white bg-primary-light rounded-full">3</p>
                    <h3 class="font-semibold text-sm">Publish</h3>
                    <p class="text-center font-light text-sm">All vacancy details will then go through our standardized categorization process for taxonomy identification and reorganization of information if required so it fits the publishing structure of our outlets, then will be approved for publishing.</p>
                </div>
            </div>
        </div>
        
        <div class="flex px-6 py-2 cursor-pointer text-sm text-white rounded-md bg-primary transition ease-in-out hover:duration-500 hover:text-black hover:bg-primary-light">Post vacancy</div>

        <div class="flex flex-wrap justify-center gap-12 sm:gap-32">
            <div class="flex flex-col items-center">
                <h1 class="text-primary text-4xl font-bold">446</h1>
                <p class="text-primary-text dark:text-white font-bold">Enterprise</p>
            </div>
            <div class="flex flex-col items-center">
                <h1 class="text-primary text-4xl font-bold">10.4K</h1>
                <p class="text-primary-text dark:text-white font-bold">Users</p>
            </div>
            <div class="flex flex-col items-center">
                <h1 class="text-primary text-4xl font-bold">52</h1>
                <p class="text-primary-text dark:text-white font-bold">Opportunities</p>
            </div>
        </div>

        <div class="flex flex-col gap-8 items-center">
            <h1 class="text-4xl text-primary-text dark:text-white font-black">News & Events</h1>
            <div class="flex flex-wrap gap-12 justify-center">
                <NewsEventCard/>
                <NewsEventCard imgSrc="https://res.cloudinary.com/db90fgpov/image/upload/v1671355915/HaHuJobs/Blogs/vacancy_post_ps61tz.jpg" type="Guides" date="16 September 2022" title="How can you post a vacancy on HaHuJobs?" description="As of mind September 2022, we have offered an open vacancy post-request submission portal that allows employers to publish vacancies on all HaHuJobs outlets. The service is simple and offered free of charge for all types of employers."/>
                <NewsEventCard imgSrc="https://res.cloudinary.com/db90fgpov/image/upload/v1671355890/HaHuJobs/Blogs/new_year_gift_thumbnail_d2cv9c.jpg" type="New Features" title="Our new year's gift, new features from HaHuJobs" date="10 September 2022" description="Happy Ethiopian New Year!! Our development teams have worked hard to provide our users with new features to offer much-needed insights and automation. To that goal, we are happy to announce the release of two modules as a run-up to our full release of the whole HaHuJobs echo systems. We now have a vacancy post request submission portal for employers who would like to publish their vacancies on our portal free of charge. The submission process has two steps, the first being the employer providing contact information, name, and TIN followed by a list of vacancies to be submitted and their respective details."/>
            </div>
        </div>

    </div>
</template>