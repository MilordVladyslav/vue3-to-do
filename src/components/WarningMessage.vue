<script setup>
defineProps({
  warning: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="warning-message">
    {{warning}}
  </div>
</template>