<script setup>
defineProps({
  toDoItem: {
    type: Object,
    required: false
  }
})
defineEmits(['changeStatus', 'remove'])
</script>

<template>
  <div class="item">
    <p>{{toDoItem.title}}</p>
    <div class="actions">
      <button @click="$emit('changeStatus', toDoItem, true )"><font-awesome-icon icon="check"/></button>
      <button @click="$emit('changeStatus', toDoItem, false )"><font-awesome-icon icon="arrow-rotate-left"/></button>
      <button @click="$emit('remove', toDoItem )"><font-awesome-icon icon="xmark"/></button>
    </div>
  </div>
</template>

<style scoped></style>