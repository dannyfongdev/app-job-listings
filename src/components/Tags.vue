<template>
  <ul class="flex flex-wrap gap-4 md:items-center">
    <li
      class="inline-block rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
    >
      {{ role }}
    </li>
    <li
      class="inline-block rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
    >
      {{ level }}
    </li>
    <li
      v-for="language in languages"
      :key="language"
      class="inline-block rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
    >
      {{ language }}
    </li>
    <li
      v-for="tools in tools"
      :key="tools"
      class="inline-block rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
    >
      {{ tools }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  role: String,
  level: String,
  languages: Array,
  tools: Array,
});
</script>
