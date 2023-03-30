<template>
  <ul class="flex flex-wrap gap-4 md:items-center">
    <li
      v-for="(tag, i) in tags"
      :key="tag"
      class="inline-block rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
    >
      {{ tags[i] }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(["tags"]);
</script>
