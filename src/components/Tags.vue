<template>
  <ul class="flex flex-wrap gap-4 md:items-center">
    <li
      class="inline-block cursor-pointer rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
      @click="emit('filter', 'role', role)"
    >
      {{ role }}
    </li>
    <li
      class="inline-block cursor-pointer rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
      @click="emit('filter', 'level', level)"
    >
      {{ level }}
    </li>
    <li
      v-for="language in languages"
      :key="language"
      class="inline-block cursor-pointer rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
      @click="emit('filter', 'language', language)"
    >
      {{ language }}
    </li>
    <li
      v-for="tool in tools"
      :key="tool"
      class="inline-block cursor-pointer rounded-md bg-neutral1 py-1.5 px-3 font-bold text-primary1 md:h-8"
      @click="emit('filter', 'tool', tool)"
    >
      {{ tool }}
    </li>
  </ul>
</template>

<script setup>
const emit = defineEmits(["filter"]);
const props = defineProps({
  role: String,
  level: String,
  languages: Array,
  tools: Array,
});
</script>
