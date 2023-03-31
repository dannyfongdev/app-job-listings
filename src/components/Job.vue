<template>
  <div class="flex w-[325px] flex-col md:w-full md:flex-row md:justify-between">
    <div class="">
      <div class="my-3 flex items-center gap-2">
        <div class="mr-3 font-bold text-primary1">{{ job.company }}</div>
        <div
          v-if="job.new"
          class="rounded-2xl bg-primary1 px-3 pt-[3px] text-sm text-white"
        >
          NEW!
        </div>
        <div
          v-if="job.featured"
          class="rounded-2xl bg-black px-3 pt-[3px] text-sm text-white"
        >
          FEATURED
        </div>
      </div>
      <div class="pb-2 font-bold">{{ job.position }}</div>
      <div
        class="mb-4 flex w-full gap-2 border-b border-neutral3 pb-2 text-neutral3 md:border-none"
      >
        <div>{{ job.postedAt }}</div>
        &middot;
        <div>{{ job.contract }}</div>
        &middot;
        <div>{{ job.location }}</div>
      </div>
    </div>
    <Tags
      :role="job.role"
      :level="job.level"
      :languages="job.languages"
      :tools="job.tools"
    />
  </div>
</template>

<script setup>
import Tags from "./Tags.vue";

const props = defineProps({
  job: Object,
});
</script>
