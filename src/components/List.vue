<script setup>
import Item from "./Item.vue";
defineProps({
  list: {
    type: Array,
    required: false
  }
})
defineEmits(['changeStatus', 'remove'])
function customFunc(item) {
  console.log('hello')
}
</script>

<template>
  <div class="item-list">
    <Item
        v-for="(item, index) in list"
        :key="item.title" :toDoItem="item"
        @changeStatus="(toDo, status) => $emit('changeStatus', toDo, status)"
        @remove="(toDo) => $emit('remove', toDo)"
    >
    </Item>
  </div>
</template>

<style scoped>
</style>