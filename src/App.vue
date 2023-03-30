<template>
  <main class="mx-auto w-[375px] bg-neutral3 md:w-full xl:max-w-screen-2xl">
    <div
      class="h-[156px] bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')]"
    ></div>
    <div class="bg-neutral1 p-6 md:mb-6">
      <Listing v-for="job in jobs" :key="job.id" :job="job"></Listing>
    </div>
  </main>
</template>

<script setup>
import Listing from "./components/Listing.vue";
import jobs from "./data.json";
</script>
