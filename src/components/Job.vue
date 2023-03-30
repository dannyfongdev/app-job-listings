<template>
  <div class="flex w-[325px] flex-col">
    <div class="">
      <div class="flex items-center gap-2 my-3">
        <div class="font-bold mr-3 text-primary1">{{ job.company }}</div>
        <div v-if="job.new" class="text-sm px-3 pt-[3px] rounded-2xl bg-primary1 text-white">
          NEW!
        </div>
        <div v-if="job.featured" class="text-sm px-3 pt-[3px] rounded-2xl bg-black text-white">FEATURED</div>
      </div>
      <div class="font-bold pb-2">{{ job.position }}</div>
      <div
        class="mb-4 flex w-full gap-2 border-b border-neutral3 pb-2 text-neutral3"
      >
        <div>{{ job.postedAt }}</div>
        &middot;
        <div>{{ job.contract }}</div>
        &middot;
        <div>{{ job.location }}</div>
      </div>
    </div>
    <Tags :tags="tags" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import Tags from "./Tags.vue";

const props = defineProps({
  job: Object,
});

const tags = computed(() => {
  const arr = [];
  arr.push(props.job.role);
  arr.push(props.job.level);
  arr.push(...props.job.languages);
  arr.push(...props.job.tools);
  return arr;
});
</script>
