<template>
    <div class="flex flex-col gap-4 items-center">
        <h1 class="text-4xl text-primary-text dark:text-white font-black">Services</h1>
        <p class="text-primary-text dark:text-white text-center max-w-[800px]">HaHuJobs offers digital career profiling, job application and subscription based relevant vacancy announcement notifications to job seekers that sign up on its primary service deployment.</p>

        <div class="flex flex-wrap gap-12 justify-center">
            <ServiceCard/>
            <ServiceCard imgSrc="https://hahu.jobs/_vercel/image?url=/images/services/job_application.svg&w=1536&q=100" title="Job Application" description="Apply for jobs with just a few clicks, and track the progress of your applications through notifications on multiple platforms. Revolutionize your job applications with pre-prepared application materials and an option to select what best fits your application. Using your HaHuJobs account you will be able to apply with only a few clicks and track its status."/>
            <ServiceCard imgSrc="https://hahu.jobs/_vercel/image?url=/images/services/vacancy_notification.svg&w=1536&q=100" title="Vacancy Notification" description="Take advantage of every job opportunity using our multi-platform vacancy notification services for jobseekers. Subscribe to a sector of your choice with various specific notification specifications to receive the latest options that fit your career profile. With multi platform, tailored and configurable subscription options you will never miss a vacancy of your interest."/>
        </div>
    </div>
</template>