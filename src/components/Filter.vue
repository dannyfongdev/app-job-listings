<template>
  <div v-if="hasFilters" class="flex justify-between bg-neutral1 p-6 md:mb-6">
    <ul class="flex gap-4">
      <li v-if="role">
        {{ role
        }}<span
          class="cursor-pointer p-1"
          v-html="CROSS"
          @click="emit('clear', 'role')"
        ></span>
      </li>
      <li v-if="level">
        {{ level
        }}<span
          class="cursor-pointer p-1"
          v-html="CROSS"
          @click="emit('clear', 'level')"
        ></span>
      </li>
      <li v-for="language in languages" :key="language">
        {{ language
        }}<span
          class="cursor-pointer p-1"
          v-html="CROSS"
          @click="emit('clear', 'language', language)"
        ></span>
      </li>
      <li v-for="tool in tools" :key="tool">
        {{ tool
        }}<span
          class="cursor-pointer p-1"
          v-html="CROSS"
          @click="emit('clear', 'tool', tool)"
        ></span>
      </li>
    </ul>
    <div class="cursor-pointer hover:underline" @click="emit('clear', 'all')">
      Clear
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
