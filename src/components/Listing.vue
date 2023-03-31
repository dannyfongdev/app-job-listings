<template>
  <div class="mx-6 -mb-6 w-12 md:-mb-32 md:w-24">
    <img :src="job.logo" alt="Company Log" />
  </div>

  <div
    class="mx-auto flex rounded-md bg-white p-6 shadow-lg md:max-w-[1110px] md:pl-36"
  >
    <Job :job="job" @filter="handleFilter" />
  </div>
</template>

<script setup>
// @todo logo has position issues
// @todo y spacing needed between Linstings
import Job from "./Job.vue";

defineProps({
  job: Object,
});

const emit = defineEmits(["filter"]);
function handleFilter(key, value) {
  emit("filter", key, value);
}
</script>
