<template>
  <div v-if="hasFilters" class="bg-neutral1 p-6 shadow-lg">
    <div
      class="mx-auto flex items-center justify-between rounded-md bg-white p-6 md:max-w-[1110px]"
    >
      <ul class="flex flex-wrap gap-4">
        <li v-if="role" class="flex items-center rounded-l-md bg-neutral1">
          <div class="px-2.5 font-bold text-primary1">{{ role }}</div>
          <div
            class="cursor-pointer rounded-r-md bg-primary1 p-1.5 text-white hover:bg-black"
            v-html="CROSS"
            @click="emit('clear', 'role')"
          ></div>
        </li>

        <li
          v-if="level"
          class="flex items-center rounded-l-md bg-neutral1 font-bold text-primary1"
        >
          <div class="px-2.5">{{ level }}</div>

          <div
            class="cursor-pointer rounded-r-md bg-primary1 p-1.5 text-white hover:bg-black"
            v-html="CROSS"
            @click="emit('clear', 'level')"
          ></div>
        </li>
        <li
          v-for="language in languages"
          :key="language"
          class="flex items-center rounded-md bg-neutral1 font-bold text-primary1"
        >
          <div class="px-2.5">{{ language }}</div>
          <div
            class="cursor-pointer rounded-r-md bg-primary1 p-1.5 text-white hover:bg-black"
            v-html="CROSS"
            @click="emit('clear', 'language', language)"
          ></div>
        </li>

        <li
          v-for="tool in tools"
          :key="tool"
          class="flex items-center rounded-l-md bg-neutral1 font-bold text-primary1"
        >
          <div class="px-2.5">
            {{ tool }}
          </div>
          <div
            class="cursor-pointer rounded-r-md bg-primary1 p-1.5 text-white hover:bg-black"
            v-html="CROSS"
            @click="emit('clear', 'tool', tool)"
          ></div>
        </li>
      </ul>
      <div
        class="inline-block cursor-pointer rounded-md py-1.5 px-3 font-bold text-neutral3 hover:text-primary1 hover:underline md:h-8"
        @click="emit('clear', 'all')"
      >
        Clear
      </div>
    </div>
  </div>
</template>

<script setup>
// @todo write CSS for this component

import { computed } from "vue";

const CROSS = "&#128473"; // cross aka x mark

const emit = defineEmits(["clear"]);
const props = defineProps({
  role: String,
  level: String,
  languages: Array,
  tools: Array,
});

const hasFilters = computed(() => {
  return (
    props.role ||
    props.level ||
    props.languages.length > 0 ||
    props.tools.length > 0
  );
});
</script>
