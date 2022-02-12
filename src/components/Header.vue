<script setup>
defineProps({
  title: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="header">
    <h1 class="title">Vue 3 To Do Application</h1>
    <div class="filters">
      <div class="filter">
        <p>All (21)</p>
      </div>
      <div class="filter">
        <p>Completed (21)</p>
      </div>
      <div class="filter">
        <p>Left (21)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
