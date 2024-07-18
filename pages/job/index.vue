<template>
    <div class="sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] flex flex-col gap-2 my-1">
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
    </div>        
</template>

<script setup>
definePageMeta({
    layout: 'jobs'
})
</script>