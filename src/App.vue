<template>
  <main class="mx-auto w-[375px] bg-neutral3 md:w-full xl:max-w-screen-2xl">
    <div
      class="h-[156px] bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')]"
    ></div>
    <div class="bg-neutral1 p-6 md:mb-6">
      <Listing
        v-for="job in filteredJobs"
        :key="job.id"
        :job="job"
        @filter="handleFilter"
      ></Listing>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import Listing from "./components/Listing.vue";
import jobs from "./data.json";

// @todo need to create the filter list component and a clear function

// each time a tag is clicked, we add the filter to the list of filters
// only allow one role or level otherwise automatically no results
// only allow each tool/lanaguage once
const filteredRole = ref("");
const filteredLevel = ref("");
const filteredLanguages = ref([]);
const filteredTools = ref([]);

function handleFilter(key, value) {
  switch (key) {
    case "role":
      filteredRole.value = value;
      break;
    case "level":
      filteredLevel.value = value;
      break;
    case "language":
      if (!filteredLanguages.value.includes(value)) {
        filteredLanguages.value.push(value);
      }
      break;
    case "tool":
      if (!filteredTools.value.includes(value)) {
        filteredTools.value.push(value);
      }
      break;
  }
  // console.log(filteredRole.value, filteredLevel.value);
  // console.log(filteredLanguages.value);
  // console.log(filteredTools.value);
}

// use a computed to update the list of filteredJobs based on any change in the filters
const filteredJobs = computed(() => {
  let newJobs = jobs;
  newJobs = newJobs.filter((job) => {
    if (filteredRole.value && job.role !== filteredRole.value) {
      return false;
    } else if (filteredLevel.value && job.level !== filteredLevel.value) {
      return false;
    } else if (filteredLanguages.value.length > 0) {
      if (
        // job.languages must include every language in filteredLanguages
        !filteredLanguages.value.every((item) => job.languages.includes(item))
      )
        return false;
    } else if (filteredTools.value.length > 0) {
      if (!filteredTools.value.every((item) => job.tools.includes(item)))
        return false;
    }
    return true;
  });
  return newJobs;
});
</script>
