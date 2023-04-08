<template>
  <div
    :class="
      job.new
        ? 'mx-auto mb-10 flex rounded-md border-l-4 border-primary1 bg-white p-6 shadow-lg md:mb-5 md:max-w-[1110px]'
        : 'mx-auto mb-10 flex rounded-md bg-white p-6 shadow-lg md:mb-5 md:max-w-[1110px]'
    "
  >
    <Job :job="job" @filter="handleFilter" />
  </div>
</template>

<script setup>
import Job from "./Job.vue";

defineProps({
  job: Object,
});

const emit = defineEmits(["filter"]);
function handleFilter(key, value) {
  emit("filter", key, value);
}
</script>
