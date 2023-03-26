<script setup>
defineProps(['job'])
</script>

<template>
  <div>
    <div>
      <div>{{ job.company }}</div>
      <div v-if="job.new">NEW!</div>
      <div v-if="job.featured">FEATURED</div>
    </div>
    <div>{{ job.position }}</div>
    <div>
      <div>1d ago</div>
      <div>{{ job.contract }}</div>
      <div>{{ job.location }}</div>
    </div>
  </div>
</template>

