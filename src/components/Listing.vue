<script setup>
import Tags from "./Tags.vue";
import Job from "./Job.vue";

defineProps(['job']);
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ job.company}}</h1>

  <div class="flex">
    <Job :job="job"/>
    <Tags />
  </div>
</template>
