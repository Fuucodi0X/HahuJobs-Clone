<template>
    <div class="h-full bg-secondary dark:bg-dark-primary">
        <Header />
        <div class="flex flex-col lg:flex-row gap-4 px-4 sm:px-12 bg-secondary dark:text-white dark:bg-dark-primary">
            <div class="lg:w-2/12 flex">
                <SideBar/>
            </div>
            <div class="lg:w-10/12 flex flex-col mb-4">
                <SearchBar/>
                <slot></slot>
            </div>
        </div>
    </div>
    <Footer/>
</template>