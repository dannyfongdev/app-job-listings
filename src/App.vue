<script setup>
import Listing from './components/Listing.vue';
import jobs from './data.json';
</script>

<template>
  <main>
    <Listing v-for="job in jobs" :key="job.id" :job="job"></Listing>
  </main>
</template>
