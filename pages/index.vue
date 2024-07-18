<template>
    <div class="flex flex-col">
        <div class="flex flex-col bg-secondary dark:bg-dark-primary">
            <Header/>
            <!-- Body of the Home page -->
            <div class="flex flex-col dark:text-white my-12 px-8 sm:px-12 gap-12">
                <Home/>
                <Sectors/>
                <Service/>
                <About/>
                <PostVacancy/>
            </div>
        </div>
        <Footer/>
    </div>
</template>