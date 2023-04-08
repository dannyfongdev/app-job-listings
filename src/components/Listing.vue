<template>
  <div
    class="mx-auto mb-10 flex rounded-md bg-white p-6 shadow-lg md:mb-5 md:max-w-[1110px]"
  >
    <Job :job="job" @filter="handleFilter" />
  </div>
</template>

<script setup>
// @todo logo has position issues
// @todo y spacing needed between Listings
import Job from "./Job.vue";

defineProps({
  job: Object,
});

const emit = defineEmits(["filter"]);
function handleFilter(key, value) {
  emit("filter", key, value);
}
</script>
