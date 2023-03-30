<template>
  <div class="mx-6 -mb-6 w-12">
    <img :src="job.logo" alt="Company Log" />
  </div>

  <div class="flex rounded-md bg-white p-6 shadow-lg mb-5">
    <Job :job="job" />
  </div>
</template>

<script setup>
import Job from "./Job.vue";

defineProps({
  job: Object,
});
</script>
