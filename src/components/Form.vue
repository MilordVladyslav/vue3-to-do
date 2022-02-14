<script setup>
import { ref } from 'vue'
const emits = defineEmits(['newToDo'])
let todoText = ref('')
function addItem(active) {
  emits('newToDo', todoText.value)
  todoText.value = ''
}
</script>

<template>
  <div class="form-wrapper">
    <form action="#">
      <input type="text" class="to-do-input" placeholder="What's next..." v-model="todoText">
<!--      <button class="submit" @click.prevent="$emit('newToDo', todoText)">Submit</button>-->
      <button class="submit" @click.prevent="addItem">Submit</button>
    </form>
  </div>
</template>

<style>

</style>