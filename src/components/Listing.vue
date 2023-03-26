<script setup>
import Tags from "./Tags.vue";
import Job from "./Job.vue";

defineProps(['job']);
</script>

<template>
  <div>
    <img :src="job.logo" alt="Company Log">
  </div>

  <div class="flex">
    <Job :job="job"/>
    <Tags />
  </div>
</template>
